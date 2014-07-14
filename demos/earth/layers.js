
/**
 * Container class for line layers.
 */
function LineLayers() {

	// ready state
	const INIT    = 0;
	const LOADING = 1;
	const LOADED  = 2;
	const FAILED  = 3;
	const DONE    = 4;

	_layers = [];

	// Compile features to GL list that can be reused for each drawing.
	function _compileLayer(gl, wrapper) {
		//ASSERT: wrapper.readyState == LOADED

		wrapper.listId = gl.genLists(1);
		gl.newList(wrapper.listId, gl.COMPILE);

		var features = wrapper.layer.data.features;
		for (var fi=0, fl=features.length; fi<fl; fi++) {
			var feature = features[fi];

			gl.begin(gl.LINE_STRIP);
			for (var vi=0, vl=feature.vertices.length; vi<vl; vi+=3) {
				gl.vertex3f(feature.vertices[vi], feature.vertices[vi+1], feature.vertices[vi+2]);
			}
			gl.end();
		}

		gl.endList();
		wrapper.readyState = DONE;
	}

	function _drawlayer(gl, wrapper) {
		gl.color3fv(wrapper.layer.color);
		gl.callList(wrapper.listId);
	}

	function _findLayerWrapper(name) {
		for (var li=0; li<_layers.length; li++) {
			var wrapper = _layers[li];
			if (name == wrapper.layer.name)
				return wrapper;
		}

		return null;
	}

	this.type = 'line';

	this.addLayer = function(name, color, url) {
		var layerWrapper = {
			layer: {
				name:  name, 
				color: [color[0], color[1], color[2]], 
				src:   url, 
				data:  null
			}, 
			listId: 0, 
			enabled: false, 
			readyState: INIT
		};

		var loader = new BVDLoader();
		loader.load( url, 
		   function(bvd_data) {	// onload
			layerWrapper.layer.data = bvd_data;
			layerWrapper.readyState = LOADED;
		}, function() {         // onerror
			layerWrapper.readyState = FAILED;
			console.warn('The layer source ' + layerWrapper.layer.src + ' is not found.');
		} );

		layerWrapper.readyState = LOADING;

		_layers.push(layerWrapper);
	};

	this.getCount = function() {
		return _layers.length;
	};

	this.findLayer = function(name) {
		var layerWrapper = _findLayerWrapper(name);
		return layerWrapper ? layerWrapper.layer : null;
	};

	this.enableLayer = function(name) {
		var layerWrapper = _findLayerWrapper(name);
		if (layerWrapper)
			layerWrapper.enabled = true;
	};

	this.disableLayer = function(name) {
		var layerWrapper = _findLayerWrapper(name);
		if (layerWrapper)
			layerWrapper.enabled = false;
	};

	this.draw = function(gl) {
		for (var li=0; li<_layers.length; li++) {
			var layerWrapper = _layers[li];
			if (!layerWrapper.enabled)
				continue;

			switch (layerWrapper.readyState) {
			case LOADED:
				_compileLayer(gl, layerWrapper);
				// falls down
			case DONE:
				_drawlayer(gl, layerWrapper);
				break;
			default:
				break;
			}
		}
	};

}
