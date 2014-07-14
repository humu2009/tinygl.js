
const GLOBE_RADIUS = 6378; // globe radius in kilometers

const WORLD_SCALE = 0.01; // world scaling factor

const MIN_SCALE = 0.75; // minimum zoom scale
const MAX_SCALE = 1.33; // maximum zoom scale


// context menu item event handler
var selectMenuItem = function() { };


/**
 * Convert a pair of latitude and longitude to the position on globe.
 */
function latLon2Point(lat, lon, position) {
	// lat -180..180
	// lon -90..90

	if (!position)
		position = new Float32Array(3);

	var angX = (180+lat) * Math.PI / 180;
	var angY = lon * Math.PI / 180;

	position[0] = Math.abs(Math.cos(angY)) * GLOBE_RADIUS * Math.sin(angX);
	position[1] = GLOBE_RADIUS * Math.sin(angY);
	position[2] = Math.abs(Math.cos(angY)) * GLOBE_RADIUS * Math.cos(angX);

	return position;
}

function makeFrustum(fovy, aspect, near, far) {
   var ymax = near * Math.tan( fovy * Math.PI / 360 );
   var ymin = -ymax;
   var xmax = ymax * aspect;
   var xmin = ymin * aspect;

   return {
		xmin: xmin, 
		xmax: xmax, 
		ymin: ymin, 
		ymax: ymax, 
		near: near, 
		far:  far
   };
}

function earth_main(args) {
	var canvas = (typeof args.canvas) == 'string' ? document.getElementById(args.canvas) : args.canvas;
	var contextMenu = (typeof args.contextMenu) == 'string' ? document.getElementById(args.contextMenu) : args.contextMenu;

	var is_firefox = /Firefox[\/\s]\d+(?:.\d+)*/.test(window.navigator.userAgent);

	var gl = canvas.getContext('experimental-tinygl');

	var globe = new Globe(GLOBE_RADIUS, 'earth/data/earth.jpg');

	var layers = new LineLayers();

	var color_globe = [0.50, 0.50, 0.50];
	var color_boundary = [0.99, 0.96, 0.32];
	var color_water_system = [0.06, 0.91, 0.96];

	var showGlobe = true;
	var enableTexture = true;

	var time = 0;
	var elapsed = 0;

	var rotX = 140, rotY = 0;
	var autoRotX = 3, autoRotY = 0;
	var scaleAll = 0.9;

	var mouseX, mouseY;
	var mouseDown = false;

	var layerStates = {};

	function init() {
		// init the globe
		globe.init();

		// init vector layers
		layers.addLayer('coasts', color_boundary, 'earth/data/coast.bvd');
		layers.addLayer('islands', color_boundary, 'earth/data/island.bvd');
		layers.addLayer('lakes', color_water_system, 'earth/data/lake.bvd');
		layers.addLayer('rivers', color_water_system, 'earth/data/river.bvd');
		layers.addLayer('nations', color_boundary, 'earth/data/nation.bvd');
		layers.addLayer('states', color_boundary, 'earth/data/state.bvd');

		layerStates['coasts'] = false;
		layerStates['islands'] = false;
		layerStates['lakes'] = false;
		layerStates['rivers'] = false;
		layerStates['nations'] = false;
		layerStates['states'] = false;
	}

	function resize() {
		gl.viewport(0, 0, canvas.width, canvas.height);

		var fru = makeFrustum(65, canvas.width / canvas.height, 1, 240);
		gl.matrixMode(gl.PROJECTION);
		gl.loadIdentity();
		gl.frustum(fru.xmin, fru.xmax, fru.ymin, fru.ymax, fru.near, fru.far);
	}

	function main_loop() {
		frame();
	}

	function frame() {
		var now = Date.now();
		elapsed = time > 0 ? (now - time) : 33/* 1000/30 */;
		draw();
		time = now;
		requestAnimationFrame(frame);
	}

	function draw() {
		gl.clearColor(0.2, 0.2, 0.2, 1);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		gl.enable(gl.DEPTH_TEST);

		if (enableTexture)
			gl.enable(gl.TEXTURE_2D);
		else
			gl.disable(gl.TEXTURE_2D);

		// auto rotate if mouse is not down
		if (!mouseDown) {
			rotX += autoRotX * scaleAll * 0.003 * elapsed;
			rotY += autoRotY  *scaleAll * 0.003 * elapsed;
		}

		gl.matrixMode(gl.MODELVIEW);
		gl.loadIdentity();
		gl.translatef(0, 0, -125);
		gl.scalef(WORLD_SCALE, WORLD_SCALE, WORLD_SCALE);
		gl.scalef(scaleAll, scaleAll, scaleAll);
		gl.rotatef(rotY, 1, 0, 0);
		gl.rotatef(rotX, 0, 1, 0);

		if (showGlobe)
			globe.draw(gl, color_globe, enableTexture);

		gl.pushMatrix();
		gl.scalef(1.001, 1.001, 1.001);

		layers.draw(gl);

		gl.popMatrix();

		gl.flush();

		gl.swapBuffers();
	}

	function mouse_down(evt) {
		if (evt.button == 0) {
			mouseX = evt.clientX;
			mouseY = evt.clientY;
			mouseDown = true;

			// hide context menu
			contextMenu.style.display = 'none';
		}

		evt.preventDefault();
		evt.stopPropagation();
	}

	function mouse_up(evt) {
		if (evt.button == 0) {
			mouseDown = false;
		}

		evt.preventDefault();
		evt.stopPropagation();
	}

	function mouse_move(evt) {
		var deltX, deltY;

		// calculate mouse movement since click
		deltX = evt.clientX - mouseX;
		deltY = evt.clientY - mouseY;

		// store new mouse position
		mouseX = evt.clientX;
		mouseY = evt.clientY;

		if (mouseDown) {
			// rotate
			rotX += deltX * 0.25 / scaleAll;
			rotY += deltY * 0.25 / scaleAll;

			// save values for auto rotation
			autoRotX = deltX * 0.25;
			autoRotY = deltY * 0.25;
		}

		evt.preventDefault();
		evt.stopPropagation();
	}

	function mouse_wheel(evt) {
		scaleAll += (is_firefox ? -40*evt.detail : evt.wheelDelta) / 2400;
		scaleAll = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scaleAll));

		evt.preventDefault();
		evt.stopPropagation();
	}

	function context_menu(evt) {
		// show context menu
		contextMenu.style.left = evt.layerX + 'px';
		contextMenu.style.top  = evt.layerY + 'px';
		contextMenu.style.display = 'block';

		evt.preventDefault();
		evt.stopPropagation();
	}

	// setup event handlers
	//

	canvas.addEventListener('mousedown', mouse_down, false);
	canvas.addEventListener('mouseup', mouse_up, false);
	canvas.addEventListener('mousemove', mouse_move, false);
	canvas.addEventListener(is_firefox ? 'DOMMouseScroll' : 'mousewheel', mouse_wheel, false);
	canvas.addEventListener('contextmenu', context_menu, false);

	// setup context menu routine
	//
	selectMenuItem = function(itemIndex) {
		switch (itemIndex) {
		case 0:	// toggle globe
			showGlobe = !showGlobe;
			break;
		case 1:	// toggle island layer
			if (layerStates['islands'])
				layers.disableLayer('islands');
			else
				layers.enableLayer('islands');
			layerStates['islands'] = !layerStates['islands'];
			break;
		case 2:	// toggle river layer
			if (layerStates['rivers'])
				layers.disableLayer('rivers');
			else
				layers.enableLayer('rivers');
			layerStates['rivers'] = !layerStates['rivers'];
			break;
		case 3:	// toggle lake layer
			if (layerStates['lakes'])
				layers.disableLayer('lakes');
			else
				layers.enableLayer('lakes');
			layerStates['lakes'] = !layerStates['lakes'];
			break;
		case 4:	// toggle coast layer
			if (layerStates['coasts'])
				layers.disableLayer('coasts');
			else
				layers.enableLayer('coasts');
			layerStates['coasts'] = !layerStates['coasts'];
			break;
		case 5:	// toggle nation boundary layer
			if (layerStates['nations'])
				layers.disableLayer('nations');
			else
				layers.enableLayer('nations');
			layerStates['nations'] = !layerStates['nations'];
			break;
		case 6:	// toggle US state boundary layer
			if (layerStates['states'])
				layers.disableLayer('states');
			else
				layers.enableLayer('states');
			layerStates['states'] = !layerStates['states'];
			break;
		default:
			console.info('Invalid menu item.');
			break;
		}
	};

	// launce the application
	//

	init();
	resize();
	main_loop();
}
