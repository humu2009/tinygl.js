
/**
 * Globe class.
 */
function Globe(radius, textureUrl) {

	const EARTH_LON_RES = 60; // Longitude Resolution
	const EARTH_LAT_RES = 60; // Latitude Resolution

	// ready states
	const INIT    = 0;
	const LOADING = 1;
	const LOADED  = 2;
	const FAILED  = 3;
	const DONE    = 4;
	
	// globe texture
	var _textureImg = null;
	var _textureId = 0;
	var _texureReadyState = INIT;

	// globe primitive
	var _indices = new Uint16Array(4 * EARTH_LON_RES * EARTH_LAT_RES);
	var _vertices = new Float32Array(3 * (EARTH_LON_RES + 1) * (EARTH_LAT_RES + 1));
	var _texCoords = new Float32Array(2 * (EARTH_LON_RES + 1) * (EARTH_LAT_RES + 1));

	function _genTexture(gl) {
		_textureId = gl.genTextures(1)[0];
		gl.pixelStorei(gl.UNPACK_FLIP_Y_TINYGL, true);
		gl.bindTexture(gl.TEXTURE_2D, _textureId);
		gl.texImage2D(gl.TEXTURE_2D, 0, 4, gl.RGBA, gl.UNSIGNED_BYTE, _textureImg);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
		gl.bindTexture(gl.TEXTURE_2D, 0);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_TINYGL, false);
		_texureReadyState = DONE;
	}

	function _loadTextureImage() {
		_textureImg = new Image;

		_textureImg.onload = function() {
			_texureReadyState = LOADED;
		};

		_textureImg.onerror = function() {
			_texureReadyState = FAILED;
		};

		_texureReadyState = LOADING;
		_textureImg.src = textureUrl;
	}

	function _makeModel() {
		// compute coords and texture coords of the globe sphere
		var vi = 0, ti = 0;
		for (var x=0; x<=EARTH_LON_RES; x++) {
			for (var y=0; y<=EARTH_LAT_RES; y++) {
				// angle around y-axis (which is x-value)
				var angX = (x * 360 / EARTH_LON_RES) * Math.PI / 180;
				var angY = (-90 + (y * 180 / EARTH_LAT_RES)) * Math.PI / 180;

				_vertices[vi++] = Math.abs(Math.cos(angY)) * radius * Math.sin(angX);
				_vertices[vi++] = radius * Math.sin(angY);
				_vertices[vi++] = Math.abs(Math.cos(angY)) * radius * Math.cos(angX);

				_texCoords[ti++] = x / EARTH_LON_RES;
				_texCoords[ti++] = y / EARTH_LAT_RES;
			}
		}

		// compute indices of the globe sphere
		var ii = 0;
		for (var y=0; y<EARTH_LAT_RES; y++) {
			for (var x=0; x<EARTH_LON_RES; x++) {
				_indices[ii++] = x       * (EARTH_LAT_RES + 1) + y;
				_indices[ii++] = x       * (EARTH_LAT_RES + 1) + (y + 1);
				_indices[ii++] = (x + 1) * (EARTH_LAT_RES + 1) + y;
				_indices[ii++] = (x + 1) * (EARTH_LAT_RES + 1) + (y + 1);
			}
		}
	}

	this.init = function() {
		_loadTextureImage();
		_makeModel();
	};

	this.draw = function(gl, color, enableTexture) {
		// set basic model color if given
		if (color)
			gl.color3fv(color);

		// apply texture if specified to
		if (enableTexture) {
			switch (_texureReadyState) {
			case LOADED:
				_genTexture(gl);
				// falls down
			case DONE:
				gl.bindTexture(gl.TEXTURE_2D, _textureId);
				break;
			default:
				gl.bindTexture(gl.TEXTURE_2D, 0);
				break;
			}
		}

		// draw primitives
		//

		gl.enableClientState(gl.VERTEX_ARRAY);
		gl.vertexPointer(3, gl.FLOAT, 0, _vertices);

		if (enableTexture && _texureReadyState == DONE) {
			gl.enableClientState(gl.TEXTURE_COORD_ARRAY);
			gl.texCoordPointer(2, gl.FLOAT, 0, _texCoords);
		} else {
			gl.disableClientState(gl.TEXTURE_COORD_ARRAY);
		}

		gl.disableClientState(gl.COLOR_ARRAY);
		gl.disableClientState(gl.NORMAL_ARRAY);

		gl.drawElements(gl.QUAD_STRIP, _indices.length, gl.UNSIGNED_SHORT, _indices);
	};

}
