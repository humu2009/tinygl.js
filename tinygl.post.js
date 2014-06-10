
	const BYTES_PER_INT8    = 1;
	const BYTES_PER_UINT8   = 1;
	const BYTES_PER_INT16   = 2;
	const BYTES_PER_UINT16  = 2;
	const BYTES_PER_INT32   = 4;
	const BYTES_PER_UINT32  = 4;
	const BYTES_PER_FLOAT32 = 4;
	const BYTES_PER_FLOAT64 = 8;

	/**
	 * Function exported from TinyGL
	 */
	
	var _ostgl_create_context = Module.cwrap('ostgl_create_context', 'number', ['number', 'number', 'number', 'number', 'number']);
	var _ostgl_delete_context = Module.cwrap('ostgl_delete_context', null, ['number']);
	var _ostgl_make_current = Module.cwrap('ostgl_make_current', null, ['number', 'number']);
	var _ostgl_resize = Module.cwrap('ostgl_resize', null, ['number', 'number', 'number', 'number']);
	var _ostgl_copy_framebuffer = Module.cwrap('ostgl_copy_framebuffer', null, ['number', 'number', 'number', 'number']);

	var _glEnable = Module.cwrap('glEnable', null, ['number']);
	var _glDisable = Module.cwrap('glDisable', null, ['number']);
	var _glShadeModel = Module.cwrap('glShadeModel', null, ['number']);
	var _glCullFace = Module.cwrap('glCullFace', null, ['number']);
	var _glPolygonMode = Module.cwrap('glPolygonMode', null, ['number', 'number']);
	var _glBegin = Module.cwrap('glBegin', null, ['number']);
	var _glEnd = Module.cwrap('glEnd', null, []);
	var _glVertex2f = Module.cwrap('glVertex2f', null, ['number', 'number']);
	var _glVertex3f = Module.cwrap('glVertex3f', null, ['number', 'number', 'number']);
	var _glVertex4f = Module.cwrap('glVertex4f', null, ['number', 'number', 'number', 'number']);
	var _glColor3f = Module.cwrap('glColor3f', null, ['number', 'number', 'number']);
	var _glColor4f = Module.cwrap('glColor4f', null, ['number', 'number', 'number', 'number']);
	var _glNormal3f = Module.cwrap('glNormal3f', null, ['number', 'number', 'number']);
	var _glTexCoord2f = Module.cwrap('glTexCoord2f', null, ['number', 'number']);
	var _glTexCoord4f = Module.cwrap('glTexCoord4f', null, ['number', 'number', 'number', 'number']);
	var _glEdgeFlag = Module.cwrap('glEdgeFlag', null, ['number']);
	var _glMatrixMode = Module.cwrap('glMatrixMode', null, ['number']);
	var _glLoadIdentity = Module.cwrap('glLoadIdentity', null, []);
	var _glLoadMatrixf = Module.cwrap('glLoadMatrixf', null, ['number']);
	var _glMultMatrixf = Module.cwrap('glMultMatrixf', null, ['number']);
	var _glPushMatrix = Module.cwrap('glPushMatrix', null, []);
	var _glPopMatrix = Module.cwrap('glPopMatrix', null, []);
	var _glRotatef = Module.cwrap('glRotatef', null, ['number', 'number', 'number', 'number']);
	var _glTranslatef = Module.cwrap('glTranslatef', null, ['number', 'number', 'number']);
	var _glScalef = Module.cwrap('glScalef', null, ['number', 'number', 'number']);
	var _glViewport = Module.cwrap('glViewport', null, ['number', 'number', 'number', 'number']);
	var _glFrustum = Module.cwrap('glFrustum', null, ['number', 'number', 'number', 'number', 'number', 'number']);
	var _glGenLists = Module.cwrap('glGenLists', 'number', ['number']);
	var _glIsList = Module.cwrap('glIsList', 'number', ['number']);
	var _glNewList = Module.cwrap('glNewList', null, ['number', 'number']);
	var _glEndList = Module.cwrap('glEndList', null, []);
	var _glCallList = Module.cwrap('glCallList', null, ['number']);
	var _glClear = Module.cwrap('glClear', null, ['number']);
	var _glClearColor = Module.cwrap('glClearColor', null, ['number', 'number', 'number', 'number']);
	var _glClearDepth = Module.cwrap('glClearDepth', null, ['number']);
	var _glRenderMode = Module.cwrap('glRenderMode', 'number', ['number']);
	var _glSelectBuffer = Module.cwrap('glSelectBuffer', null, ['number', 'number']);
	var _glInitNames = Module.cwrap('glInitNames', null, []);
	var _glPushName = Module.cwrap('glPushName', null, ['number']);
	var _glPopName = Module.cwrap('glPopName', null, []);
	var _glLoadName = Module.cwrap('glLoadName', null, ['number']);	
	var _glGenTextures = Module.cwrap('glGenTextures', null, ['number', 'number']);
	var _glDeleteTextures = Module.cwrap('glDeleteTextures', null, ['number', 'number']);
	var _glBindTexture = Module.cwrap('glBindTexture', null, ['number', 'number']);
	var _glTexImage2D = Module.cwrap('glTexImage2D', null, ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']);
	var _glTexEnvi = Module.cwrap('glTexEnvi', null, ['number', 'number', 'number']);
	var _glTexParameteri = Module.cwrap('glTexParameteri', null, ['number', 'number', 'number']);
	var _glPixelStorei = Module.cwrap('glPixelStorei', null, ['number', 'number']);
	var _glMaterialf = Module.cwrap('glMaterialf', null, ['number', 'number', 'number']);
	var _glMaterialfv = Module.cwrap('glMaterialfv', null, ['number', 'number', 'number']);
	var _glColorMaterial = Module.cwrap('glColorMaterial', null, ['number', 'number']);
	var _glLightf = Module.cwrap('glLightf', null, ['number', 'number', 'number']);
	var _glLightfv = Module.cwrap('glLightfv', null, ['number', 'number', 'number']);
	var _glLightModeli = Module.cwrap('glLightModeli', null, ['number', 'number']);
	var _glLightModelfv = Module.cwrap('glLightModelfv', null, ['number', 'number']);
	var _glFlush = Module.cwrap('glFlush', null, []);
	var _glHint = Module.cwrap('glHint', null, ['number', 'number']);
	var _glGetIntegerv = Module.cwrap('glGetIntegerv', null, ['number', 'number']);
	var _glGetFloatv = Module.cwrap('glGetFloatv', null, ['number', 'number']);
	var _glFrontFace = Module.cwrap('glFrontFace', null, ['number']);
	var _glEnableClientState = Module.cwrap('glEnableClientState', null, ['number']);
	var _glDisableClientState = Module.cwrap('glDisableClientState', null, ['number']);
	var _glArrayElement = Module.cwrap('glArrayElement', null, ['number']);
	var _glVertexPointer = Module.cwrap('glVertexPointer', null, ['number', 'number', 'number', 'number']);
	var _glColorPointer = Module.cwrap('glColorPointer', null, ['number', 'number', 'number', 'number']);
	var _glNormalPointer = Module.cwrap('glNormalPointer', null, ['number', 'number', 'number', 'number']);
	var _glTexCoordPointer = Module.cwrap('glTexCoordPointer', null, ['number', 'number', 'number', 'number']);
	var _glPolygonOffset = Module.cwrap('glPolygonOffset', null, ['number', 'number']);
	var _glDebug = Module.cwrap('glDebug', null, ['number']);

	/**
	 * Utility functions
	 */
	
	function createTGLContext(width, height, framebuf_ptr) {
		// use a temporary pointer array with only 1 element to pass in our own framebuffer
		var framebuf_ptr_arr_ptr = Module._malloc(BYTES_PER_UINT32);
		Module.setValue(framebuf_ptr_arr_ptr, framebuf_ptr, 'i32');
		var tgl_ctx_ptr = _ostgl_create_context(width, height, 32/* 32bit RGBA */, framebuf_ptr_arr_ptr, 1);
		Module._free(framebuf_ptr_arr_ptr);

		_ostgl_make_current(tgl_ctx_ptr, 0);
		return tgl_ctx_ptr;
	}

	function reallocateFramebuffer(width, height, old_framebuf_ptr) {
		if (old_framebuf_ptr)
			Module._free(old_framebuf_ptr);
		var new_framebuf_size = width * height * BYTES_PER_UINT32;
		// returns pointer to the new framebuffer on heap
		return Module._malloc(new_framebuf_size);
	}

	function calcAdjustedWidth(width) {
		// TinyGL requires the width of a framebuffer to be multiples of 4
		return width & ~3;
	}

	var util_canvas = null;

	function getUtilCanvas(width, height) {
		var isClean = false;
		if (!util_canvas) {
			isClean = true;
			if ((typeof document) != 'undefined')
				util_canvas = document.createElement('canvas');
		}

		if (!util_canvas)
			return null;

		if (util_canvas.width != width || util_canvas.height != height) {
			util_canvas.width  = width;
			util_canvas.height = height;
			isClean = true;
		}

		if (!isClean) {
			var ctx2d = util_canvas.getContext('2d');
			ctx2d.clearRect(0, 0, width, height);
		}

		return util_canvas;
	}

	function grabPixelsRGBToUint8Array(canvas) {
		var ctx2d = canvas.getContext('2d');
		var imgData = ctx2d.getImageData(0, 0, canvas.width, canvas.height);
		var data = imgData.data;
		var pixels = new Uint8Array(canvas.width * canvas.height * 3);
		for (var i=0, j=0, k=0, l=data.length>>2; i<l; i++, j+=3, k+=4) {
			pixels[j    ] = data[k    ];
			pixels[j + 1] = data[k + 1];
			pixels[j + 2] = data[k + 2];
		}
		return pixels;
	}

	function flipPixelsY(pixels, bytes_per_line, gen_new_array) {
		if (gen_new_array)
			pixels = new Uint8Array(pixels);

		var lines = pixels.length / bytes_per_line;
		var n = lines >> 1;
		for (var i=0; i<n; i++) {
			var p0 = i * bytes_per_line;
			var p1 = (lines - i - 1) * bytes_per_line;
			var tmp;
			for (var j=0; j<bytes_per_line; j++, p0++, p1++) {
				tmp = pixels[p0];
				pixels[p0] = pixels[p1];
				pixels[p1] = tmp;
			}
		}

		return pixels;
	}

	function intersectRects(r0, r1) {
		var xmax0 = r0.x + r0.w;
		var ymax0 = r0.y + r0.h;
		var xmax1 = r1.x + r1.w;
		var ymax1 = r1.y + r1.h;

		var xmin = Math.max(r0.x, r1.x);
		var ymin = Math.max(r0.y, r1.y);
		return {
			x: xmin, 
			y: ymin, 
			w: Math.min(xmax0, xmax1) - xmin, 
			h: Math.min(ymax0, ymax1) - ymin
		};
	}

	// IE11 provides a partial implementation of WebGL. For this very browser, some special treatments are required.
	var is_ie11_compatible = (typeof navigator) != 'undefined' && /Trident\/\d+\.\d+;\s.*rv:(\d+(?:\.\d+)*)/.test(navigator.userAgent);

	function createWebGLProgram(ctx3d, vsrc, fsrc) {
		var vshader = ctx3d.createShader(ctx3d.VERTEX_SHADER);
		ctx3d.shaderSource(vshader, vsrc);
		ctx3d.compileShader(vshader);
		if (!ctx3d.getShaderParameter(vshader, ctx3d.COMPILE_STATUS)) {
			debug_output.warn('Vertex shader compilation failed: ' + ctx3d.getShaderInfoLog(vshader));
			return null;
		}

		var fshader = ctx3d.createShader(ctx3d.FRAGMENT_SHADER);
		ctx3d.shaderSource(fshader, fsrc);
		ctx3d.compileShader(fshader);
		if (!ctx3d.getShaderParameter(fshader, ctx3d.COMPILE_STATUS)) {
			debug_output.warn('Fragment shader compilation failed: ' + ctx3d.getShaderInfoLog(fshader));
			return null;
		}

		var program = ctx3d.createProgram();
		ctx3d.attachShader(program, vshader);
		ctx3d.attachShader(program, fshader);
		ctx3d.linkProgram(program);
		if (!ctx3d.getProgramParameter(program, ctx3d.LINK_STATUS)) {
			debug_output.warn('Program generation failed: ' + ctx3d.getProgramInfoLog(program));
			return null;
		}

		var attributes = {};
		var attrib_count = ctx3d.getProgramParameter(program, ctx3d.ACTIVE_ATTRIBUTES);
		for (var i=0; i<attrib_count; i++) {
			var attrib = ctx3d.getActiveAttrib(program, i);
			attributes[attrib.name] = ctx3d.getAttribLocation(program, attrib.name);
		}

		var uniforms = {};
		var uniform_count = ctx3d.getProgramParameter(program, ctx3d.ACTIVE_UNIFORMS);
		for (var i=0; i<uniform_count; i++) {
			var uniform = ctx3d.getActiveUniform(program, i);
			uniforms[uniform.name] = ctx3d.getUniformLocation(program, uniform.name);
		}

		return {
			program: program, 
			attributes: attributes, 
			uniforms: uniforms
		};
	}

	function createWebGLTextureCopyPixels(ctx3d, width, height, pixels) {
		//assert: (pixels instanceof Uint8Array) || pixels == null
		//assert: pixels.length == width * height * BYTES_PER_UINT32

		var texture = ctx3d.createTexture();
		ctx3d.bindTexture(ctx3d.TEXTURE_2D, texture);
		ctx3d.texImage2D(ctx3d.TEXTURE_2D, 0, ctx3d.RGBA, width, height, 0, ctx3d.RGBA, ctx3d.UNSIGNED_BYTE, pixels);
		ctx3d.texParameteri(ctx3d.TEXTURE_2D, ctx3d.TEXTURE_MAG_FILTER, ctx3d.NEAREST);
		ctx3d.texParameteri(ctx3d.TEXTURE_2D, ctx3d.TEXTURE_MIN_FILTER, ctx3d.NEAREST);
		ctx3d.texParameteri(ctx3d.TEXTURE_2D, ctx3d.TEXTURE_WRAP_S, ctx3d.CLAMP_TO_EDGE);
		ctx3d.texParameteri(ctx3d.TEXTURE_2D, ctx3d.TEXTURE_WRAP_T, ctx3d.CLAMP_TO_EDGE);
		return texture;
	}

	var debug_output = (typeof console) != 'undefined' ? console : {
		info: function() {}, 
		warn: function() {}, 
		error: function() {}
	};


	/**
	 * Utility classes
	 */

	function Canvas2DSurfaceDriver(canvas, framebuf_width, framebuf_height) {
		this._canvas = canvas;
		this._ctx2d = canvas.getContext('2d');
		if (!this._ctx2d) {
			throw 'Canvas2DSurfaceDriver constructor failed: cannot get 2D context.';
		}

		this._img_data = this._ctx2d.createImageData(canvas.width, canvas.height);
	}

	Canvas2DSurfaceDriver.prototype = {

		deliver: function(viewport, framebuf) {
			var dirty_rect = intersectRects(viewport, {x: 0, y: 0, w: this._img_data.width, h: this._img_data.height});

			// copy pixels from framebuffer to imageData, swapping each R and B components
			var src, dest;
			var data = this._img_data.data;
			for (var i=dirty_rect.y, m=i+dirty_rect.h; i<m; i++) {
				src  = (i * viewport.W + dirty_rect.x) << 2;
				dest = (i * this._img_data.width + dirty_rect.x) << 2;
				for (var j=dirty_rect.x, n=j+dirty_rect.w; j<n; j++) {
					data[dest    ] = framebuf[src + 2];
					data[dest + 1] = framebuf[src + 1];
					data[dest + 2] = framebuf[src    ];
					data[dest + 3] = 255;
					src  += 4;
					dest += 4;
				}
			}

			// update canvas display
			this._ctx2d.putImageData(this._img_data, 0, 0);
		}

	};


	function WebGLSurfaceDriver(canvas, framebuf_width, framebuf_height) {
		this._canvas = canvas;

		var preferences = {
			antialias: false, 
			preserveDrawingBuffer: true
		};
		var ctx3d = canvas.getContext('experimental-webgl', preferences) || 
					canvas.getContext('webgl', preferences);
		if (!ctx3d) {
			throw 'WebGLSurfaceDriver constructor failed: cannot get WebGL context.';
		}
		this._ctx3d = ctx3d;

		var v_shader = [
			'#ifdef GL_ES', 
			'	precision mediump float;', 
			'#endif', 
			'', 
			'attribute vec2 a_position;', 
			'attribute vec2 a_texCoord;',
			'varying vec2 v_texCoord;', 
			'', 
			'void main(void) {', 
			'	v_texCoord = a_texCoord;', 
			'	gl_Position = vec4(a_position, 1.0, 1.0);', 
			'}'
		].join('\n');
		var f_shader = [
			'#ifdef GL_ES', 
			'	precision mediump float;', 
			'#endif', 
			'', 
			'uniform sampler2D s_canvasTex;', 
			'varying vec2 v_texCoord;', 
			'', 
			'void main(void) {', 
			'	vec4 texel = texture2D(s_canvasTex, v_texCoord);', 
			'	gl_FragColor = vec4(texel.b, texel.g, texel.r, 1.0);', 
			'}'
		].join('\n');

		// create program
		this._program_info = createWebGLProgram(ctx3d, v_shader, f_shader);

		// create canvas rectangle
		//
		this._canvas_rect_coords = ctx3d.createBuffer();
		ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, this._canvas_rect_coords);
		ctx3d.bufferData(ctx3d.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1]), ctx3d.STATIC_DRAW);
		this._canvas_rect_texcoords = ctx3d.createBuffer();
		ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, this._canvas_rect_texcoords);
		ctx3d.bufferData(ctx3d.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0]), ctx3d.STATIC_DRAW);
		ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, null);

		// create canvas texture with the dimensions of the framebuffer
		//
		this._canvas_texture = createWebGLTextureCopyPixels(ctx3d, framebuf_width, framebuf_height, null);
		ctx3d.bindTexture(ctx3d.TEXTURE_2D, null);

		this._canvas_texture_width = framebuf_width;
		this._canvas_texture_height = framebuf_height;
	}

	WebGLSurfaceDriver.prototype = {

		deliver: function(viewport, framebuf) {
			var ctx3d = this._ctx3d;

			ctx3d.viewport(0, 0, this._canvas.width, this._canvas.height);
			ctx3d.frontFace(ctx3d.CCW);
			ctx3d.disable(ctx3d.DEPTH_TEST);
			ctx3d.depthMask(false);

			ctx3d.useProgram(this._program_info.program);

			var x = -1;
			var y = 1 - 2 * viewport.H / this._canvas.height;
			var w = 2 * viewport.W / this._canvas.width;
			var h = 2 * viewport.H / this._canvas.height;

			// update canvas display with given framebuffer
			//
			ctx3d.activeTexture(ctx3d.TEXTURE0);
			ctx3d.bindTexture(ctx3d.TEXTURE_2D, this._canvas_texture);
			ctx3d.pixelStorei(ctx3d.UNPACK_FLIP_Y_WEBGL, true);
			if (this._canvas_texture_width != viewport.W || this._canvas_texture_height != viewport.H) {
				// recreate canvas texture from the given framebuffer since viewport has changed
				ctx3d.bindTexture(ctx3d.TEXTURE_2D, null);
				ctx3d.deleteTexture(this._canvas_texture);
				this._canvas_texture = createWebGLTextureCopyPixels(ctx3d, viewport.W, viewport.H, framebuf);
				this._canvas_texture_width  = viewport.W;
				this._canvas_texture_height = viewport.H;
			} else {
				// update texture data with pixels from framebuffer
				ctx3d.texSubImage2D(ctx3d.TEXTURE_2D, 0, 0, 0, this._canvas_texture_width, this._canvas_texture_height, ctx3d.RGBA, ctx3d.UNSIGNED_BYTE, framebuf);
			}
			ctx3d.pixelStorei(ctx3d.UNPACK_FLIP_Y_WEBGL, false);
			ctx3d.uniform1i(this._program_info.uniforms['s_canvasTex'], 0);
			ctx3d.enableVertexAttribArray(this._program_info.attributes['a_position']);
			if (!is_ie11_compatible) {
				// apply viewport
				ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, this._canvas_rect_coords);
				ctx3d.bufferSubData(ctx3d.ARRAY_BUFFER, 0, new Float32Array([x, y, x + w, y, x + w, y + h, x + w, y + h, x, y + h, x, y]));
			} else {
				// IE11 does not implement bufferSubData(), so we just recreate the buffer for the viewport rectangle
				ctx3d.deleteBuffer(this._canvas_rect_coords);
				this._canvas_rect_coords = ctx3d.createBuffer();
				ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, this._canvas_rect_coords);
				ctx3d.bufferData(ctx3d.ARRAY_BUFFER, new Float32Array([x, y, x + w, y, x + w, y + h, x + w, y + h, x, y + h, x, y]), ctx3d.STATIC_DRAW);
			}
			ctx3d.vertexAttribPointer(this._program_info.attributes['a_position'], 2, ctx3d.FLOAT, false, 0, 0);
			ctx3d.enableVertexAttribArray(this._program_info.attributes['a_texCoord']);
			ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, this._canvas_rect_texcoords);
			ctx3d.vertexAttribPointer(this._program_info.attributes['a_texCoord'], 2, ctx3d.FLOAT, false, 0, 0);
			ctx3d.drawArrays(ctx3d.TRIANGLES, 0, 6);
			ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, null);
			ctx3d.bindTexture(ctx3d.TEXTURE_2D, null);

			ctx3d.flush();
		}

	};


	/**
	 * @class 
	 */
	function TinyGLRenderingContextCtor(canvas, attribs) {
		this._surface = canvas;
		this._attribs = attribs || {};

		var w = calcAdjustedWidth(canvas.width);
		var h = canvas.height;

		this._frame_buf_ptr = reallocateFramebuffer(w, h, 0);
		this._frame_buf_width = w;
		this._frame_buf_height = h;

		this._tgl_ctx = createTGLContext(w, h, this._frame_buf_ptr);

		this._driver = null;
		if (this._attribs.driver != 'webgl') {
			try {
				this._driver = new Canvas2DSurfaceDriver(canvas, w, h);
			} catch (e) {
			}
		}
		if (!this._driver) {
			if (this._attribs.driver == '2d')
				throw 'Failed to initialize TinyGL with 2D context.';

			try {
				this._driver = new WebGLSurfaceDriver(canvas, w, h);
			} catch (e) {
			}
		}
		if (!this._driver) {
			if (this._attribs.driver == 'webgl')
				throw 'Failed to initialize TinyGL with WebGL context.';
			else
				throw 'Failed to initialize TinyGL, neither 2D context nor WebGL context is available.';
		}

		this._is_select_mode = false;
		this._select_output_buf = null;
		this._select_internal_buf_ptr = 0;
		this._select_buf_length = 0;

		this._array_coord_buf_ptr = 0;
		this._array_color_buf_ptr = 0;
		this._array_normal_buf_ptr = 0;
		this._array_texcoord_buf_ptr = 0;

		// local cache of the viewport
		this._vp = {
			x: 0, 
			y: 0, 
			w: w, 
			h: h, 
			// the dimensions of the framebuffer according to current viewport
			W: w, // W = x + w
			H: h  // H = y + h
		};

		this._pixelStoreFlipY = false;
	}

	TinyGLRenderingContextCtor.prototype = {

		// Boolean values
		//

		FALSE: 0, 
		TRUE: 1, 

		// Data types
		//

		BYTE: 0x1400, 
		UNSIGNED_BYTE: 0x1401, 
		SHORT: 0x1402, 
		UNSIGNED_SHORT: 0x1403, 
		INT: 0x1404, 
		UNSIGNED_INT: 0x1405, 
		FLOAT: 0x1406, 
		DOUBLE: 0x140A, 
//		2_BYTES: 0x1407, 
//		3_BYTES: 0x1408, 
//		4_BYTES: 0x1409, 

		// Primitives
		//

		POINTS: 0x0000, 
		LINES: 0x0001, 
		LINE_LOOP: 0x0002, 
		LINE_STRIP: 0x0003, 
		TRIANGLES: 0x0004, 
		TRIANGLE_STRIP: 0x0005, 
		TRIANGLE_FAN: 0x0006, 
		QUADS: 0x0007, 
		QUAD_STRIP: 0x0008, 
		POLYGON: 0x0009, 
		EDGE_FLAG: 0x0B43, 

		// Vertex Arrays
		//

		VERTEX_ARRAY: 0x8074, 
		NORMAL_ARRAY: 0x8075, 
		COLOR_ARRAY: 0x8076, 
		INDEX_ARRAY: 0x8077, 
		TEXTURE_COORD_ARRAY: 0x8078, 
		EDGE_FLAG_ARRAY: 0x8079, 
		VERTEX_ARRAY_SIZE: 0x807A, 
		VERTEX_ARRAY_TYPE: 0x807B, 
		VERTEX_ARRAY_STRIDE: 0x807C, 
		VERTEX_ARRAY_COUNT: 0x807D, 
		NORMAL_ARRAY_TYPE: 0x807E, 
		NORMAL_ARRAY_STRIDE: 0x807F, 
		NORMAL_ARRAY_COUNT: 0x8080, 
		COLOR_ARRAY_SIZE: 0x8081, 
		COLOR_ARRAY_TYPE:  0x8082,
		COLOR_ARRAY_STRIDE:  0x8083,
		COLOR_ARRAY_COUNT:  0x8084,
		INDEX_ARRAY_TYPE:  0x8085,
		INDEX_ARRAY_STRIDE:  0x8086,
		INDEX_ARRAY_COUNT:  0x8087,
		TEXTURE_COORD_ARRAY_SIZE:  0x8088,
		TEXTURE_COORD_ARRAY_TYPE:  0x8089,
		TEXTURE_COORD_ARRAY_STRIDE:  0x808A,
		TEXTURE_COORD_ARRAY_COUNT:  0x808B,
		EDGE_FLAG_ARRAY_STRIDE:  0x808C,
		EDGE_FLAG_ARRAY_COUNT:  0x808D,
		VERTEX_ARRAY_POINTER:  0x808E,
		NORMAL_ARRAY_POINTER:  0x808F,
		COLOR_ARRAY_POINTER:  0x8090,
		INDEX_ARRAY_POINTER:  0x8091,
		TEXTURE_COORD_ARRAY_POINTER:  0x8092,
		EDGE_FLAG_ARRAY_POINTER:  0x8093,
		V2F: 0x2A20,
		V3F:  0x2A21,
		C4UB_V2F:  0x2A22,
		C4UB_V3F:  0x2A23,
		C3F_V3F:  0x2A24,
		N3F_V3F:  0x2A25,
		C4F_N3F_V3F:  0x2A26,
		T2F_V3F:  0x2A27,
		T4F_V4F:  0x2A28,
		T2F_C4UB_V3F:  0x2A29,
		T2F_C3F_V3F:  0x2A2A,
		T2F_N3F_V3F:  0x2A2B,
		T2F_C4F_N3F_V3F:  0x2A2C,
		T4F_C4F_N3F_V4F:  0x2A2D,

		// Matrix Modes
		//

		MATRIX_MODE:  0x0BA0,
		MODELVIEW:  0x1700,
		PROJECTION:  0x1701,
		TEXTURE:  0x1702,

		// Points
		//

		POINT_SMOOTH:  0x0B10,
		POINT_SIZE:  0x0B11,
		POINT_SIZE_GRANULARITY :  0x0B13,
		POINT_SIZE_RANGE:  0x0B12,

		// Lines
		//

		LINE_SMOOTH:  0x0B20,
		LINE_STIPPLE:  0x0B24,
		LINE_STIPPLE_PATTERN:  0x0B25,
		LINE_STIPPLE_REPEAT:  0x0B26,
		LINE_WIDTH:  0x0B21,
		LINE_WIDTH_GRANULARITY:  0x0B23,
		LINE_WIDTH_RANGE:  0x0B22,

		// Polygons
		//

		POINT:  0x1B00,
		LINE:  0x1B01,
		FILL:  0x1B02,
		CCW:  0x0901,
		CW:  0x0900,
		FRONT:  0x0404,
		BACK:  0x0405,
		CULL_FACE:  0x0B44,
		CULL_FACE_MODE:  0x0B45,
		POLYGON_SMOOTH:  0x0B41,
		POLYGON_STIPPLE:  0x0B42,
		FRONT_FACE:  0x0B46,
		POLYGON_MODE:  0x0B40,
		POLYGON_OFFSET_FACTOR:  0x3038,
		POLYGON_OFFSET_UNITS:  0x2A00,
		POLYGON_OFFSET_POINT:  0x2A01,
		POLYGON_OFFSET_LINE:  0x2A02,
		POLYGON_OFFSET_FILL:  0x8037,

		// Display Lists
		//

		COMPILE:  0x1300,
		COMPILE_AND_EXECUTE:  0x1301,
		LIST_BASE:  0x0B32,
		LIST_INDEX:  0x0B33,
		LIST_MODE:  0x0B30,

		// Depth buffer
		//

		NEVER:  0x0200,
		LESS:  0x0201,
		GEQUAL:  0x0206,
		LEQUAL:  0x0203,
		GREATER:  0x0204,
		NOTEQUAL:  0x0205,
		EQUAL:  0x0202,
		ALWAYS:  0x0207,
		DEPTH_TEST:  0x0B71,
		DEPTH_BITS:  0x0D56,
		DEPTH_CLEAR_VALUE:  0x0B73,
		DEPTH_FUNC:  0x0B74,
		DEPTH_RANGE:  0x0B70,
		DEPTH_WRITEMASK:  0x0B72,
		DEPTH_COMPONENT:  0x1902,

		// Lighting
		//

		LIGHTING:  0x0B50,
		LIGHT0:  0x4000,
		LIGHT1:  0x4001,
		LIGHT2:  0x4002,
		LIGHT3:  0x4003,
		LIGHT4:  0x4004,
		LIGHT5:  0x4005,
		LIGHT6:  0x4006,
		LIGHT7:  0x4007,
		SPOT_EXPONENT:  0x1205,
		SPOT_CUTOFF:  0x1206,
		CONSTANT_ATTENUATION:  0x1207,
		LINEAR_ATTENUATION:  0x1208,
		QUADRATIC_ATTENUATION:  0x1209,
		AMBIENT:  0x1200,
		DIFFUSE:  0x1201,
		SPECULAR:  0x1202,
		SHININESS:  0x1601,
		EMISSION:  0x1600,
		POSITION:  0x1203,
		SPOT_DIRECTION:  0x1204,
		AMBIENT_AND_DIFFUSE:  0x1602,
		COLOR_INDEXES:  0x1603,
		LIGHT_MODEL_TWO_SIDE:  0x0B52,
		LIGHT_MODEL_LOCAL_VIEWER:  0x0B51,
		LIGHT_MODEL_AMBIENT:  0x0B53,
		FRONT_AND_BACK:  0x0408,
		SHADE_MODEL:  0x0B54,
		FLAT:  0x1D00,
		SMOOTH:  0x1D01,
		COLOR_MATERIAL:  0x0B57,
		COLOR_MATERIAL_FACE:  0x0B55,
		COLOR_MATERIAL_PARAMETER:  0x0B56,
		NORMALIZE:  0x0BA1,

		// User clipping planes
		//

		CLIP_PLANE0:  0x3000,
		CLIP_PLANE1:  0x3001,
		CLIP_PLANE2:  0x3002,
		CLIP_PLANE3:  0x3003,
		CLIP_PLANE4:  0x3004,
		CLIP_PLANE5:  0x3005,

		// Accumulation buffer
		//

		ACCUM_RED_BITS:  0x0D58,
		ACCUM_GREEN_BITS:  0x0D59,
		ACCUM_BLUE_BITS:  0x0D5A,
		ACCUM_ALPHA_BITS:  0x0D5B,
		ACCUM_CLEAR_VALUE:  0x0B80,
		ACCUM:  0x0100,
		ADD:  0x0104,
		LOAD:  0x0101,
		MULT:  0x0103,
		RETURN:  0x0102,

		// Alpha testing
		//

		ALPHA_TEST:  0x0BC0,
		ALPHA_TEST_REF:  0x0BC2,
		ALPHA_TEST_FUNC:  0x0BC1,

		// Blending
		//

		BLEND:  0x0BE2,
		BLEND_SRC:  0x0BE1,
		BLEND_DST:  0x0BE0,
		ZERO:  0,
		ONE:  1,
		SRC_COLOR:  0x0300,
		ONE_MINUS_SRC_COLOR:  0x0301,
		DST_COLOR:  0x0306,
		ONE_MINUS_DST_COLOR:  0x0307,
		SRC_ALPHA:  0x0302,
		ONE_MINUS_SRC_ALPHA:  0x0303,
		DST_ALPHA:  0x0304,
		ONE_MINUS_DST_ALPHA:  0x0305,
		SRC_ALPHA_SATURATE:  0x0308,
		CONSTANT_COLOR:  0x8001,
		ONE_MINUS_CONSTANT_COLOR:  0x8002,
		CONSTANT_ALPHA:  0x8003,
		ONE_MINUS_CONSTANT_ALPHA:  0x8004,

		// Render Mode
		//

		FEEDBACK:  0x1C01,
		RENDER:  0x1C00,
		SELECT:  0x1C02,

		// Feedback
		//

//		2D:  0x0600,
//		3D:  0x0601,
//		3D_COLOR:  0x0602,
//		3D_COLOR_TEXTURE:  0x0603,
//		4D_COLOR_TEXTURE:  0x0604,
		POINT_TOKEN:  0x0701,
		LINE_TOKEN:  0x0702,
		LINE_RESET_TOKEN:  0x0707,
		POLYGON_TOKEN:  0x0703,
		BITMAP_TOKEN:  0x0704,
		DRAW_PIXEL_TOKEN:  0x0705,
		COPY_PIXEL_TOKEN:  0x0706,
		PASS_THROUGH_TOKEN:  0x0700,

		// Fog
		//

		FOG:  0x0B60,
		FOG_MODE:  0x0B65,
		FOG_DENSITY:  0x0B62,
		FOG_COLOR:  0x0B66,
		FOG_INDEX:  0x0B61,
		FOG_START:  0x0B63,
		FOG_END:  0x0B64,
		LINEAR:  0x2601,
		EXP:  0x0800,
		EXP2:  0x0801,

		// Logic Ops
		//

		LOGIC_OP:  0x0BF1,
		LOGIC_OP_MODE:  0x0BF0,
		CLEAR:  0x1500,
		SET:  0x150F,
		COPY:  0x1503,
		COPY_INVERTED:  0x150C,
		NOOP:  0x1505,
		INVERT:  0x150A,
		AND:  0x1501,
		NAND:  0x150E,
		OR:  0x1507,
		NOR:  0x1508,
		XOR:  0x1506,
		EQUIV:  0x1509,
		AND_REVERSE:  0x1502,
		AND_INVERTED:  0x1504,
		OR_REVERSE:  0x150B,
		OR_INVERTED:  0x150D,

		// Stencil
		//

		STENCIL_TEST:  0x0B90,
		STENCIL_WRITEMASK:  0x0B98,
		STENCIL_BITS:  0x0D57,
		STENCIL_FUNC:  0x0B92,
		STENCIL_VALUE_MASK:  0x0B93,
		STENCIL_REF:  0x0B97,
		STENCIL_FAIL:  0x0B94,
		STENCIL_PASS_DEPTH_PASS:  0x0B96,
		STENCIL_PASS_DEPTH_FAIL:  0x0B95,
		STENCIL_CLEAR_VALUE:  0x0B91,
		STENCIL_INDEX:  0x1901,
		KEEP:  0x1E00,
		REPLACE:  0x1E01,
		INCR:  0x1E02,
		DECR:  0x1E03,

		// Buffers, Pixel Drawing/Reading
		//

		NONE:  0,
		LEFT:  0x0406,
		RIGHT:  0x0407,
		FRONT: 0x0404,
		BACK: 0x0405,
		FRONT_AND_BACK: 0x0408, 
		FRONT_LEFT:  0x0400,
		FRONT_RIGHT:  0x0401,
		BACK_LEFT:  0x0402,
		BACK_RIGHT:  0x0403,
		AUX0:  0x0409,
		AUX1:  0x040A,
		AUX2:  0x040B,
		AUX3:  0x040C,
		COLOR_INDEX:  0x1900,
		RED:  0x1903,
		GREEN:  0x1904,
		BLUE:  0x1905,
		ALPHA:  0x1906,
		LUMINANCE:  0x1909,
		LUMINANCE_ALPHA:  0x190A,
		ALPHA_BITS:  0x0D55,
		RED_BITS:  0x0D52,
		GREEN_BITS:  0x0D53,
		BLUE_BITS:  0x0D54,
		INDEX_BITS:  0x0D51,
		SUBPIXEL_BITS:  0x0D50,
		AUX_BUFFERS:  0x0C00,
		READ_BUFFER:  0x0C02,
		DRAW_BUFFER:  0x0C01,
		DOUBLEBUFFER:  0x0C32,
		STEREO:  0x0C33,
		BITMAP:  0x1A00,
		COLOR:  0x1800,
		DEPTH:  0x1801,
		STENCIL:  0x1802,
		DITHER:  0x0BD0,
		RGB:  0x1907,
		RGBA:  0x1908,

		// Implementation limits
		//

		MAX_LIST_NESTING:  0x0B31,
		MAX_ATTRIB_STACK_DEPTH:  0x0D35,
		MAX_MODELVIEW_STACK_DEPTH:  0x0D36,
		MAX_NAME_STACK_DEPTH:  0x0D37,
		MAX_PROJECTION_STACK_DEPTH:  0x0D38,
		MAX_TEXTURE_STACK_DEPTH:  0x0D39,
		MAX_EVAL_ORDER:  0x0D30,
		MAX_LIGHTS:  0x0D31,
		MAX_CLIP_PLANES:  0x0D32,
		MAX_TEXTURE_SIZE:  0x0D33,
		MAX_PIXEL_MAP_TABLE:  0x0D34,
		MAX_VIEWPORT_DIMS:  0x0D3A,
		MAX_CLIENT_ATTRIB_STACK_DEPTH: 0x0D3B,

		// Gets
		//

		ATTRIB_STACK_DEPTH:  0x0BB0,
		COLOR_CLEAR_VALUE:  0x0C22,
		COLOR_WRITEMASK:  0x0C23,
		CURRENT_INDEX:  0x0B01,
		CURRENT_COLOR:  0x0B00,
		CURRENT_NORMAL:  0x0B02,
		CURRENT_RASTER_COLOR:  0x0B04,
		CURRENT_RASTER_DISTANCE:  0x0B09,
		CURRENT_RASTER_INDEX:  0x0B05,
		CURRENT_RASTER_POSITION:  0x0B07,
		CURRENT_RASTER_TEXTURE_COORDS: 0x0B06,
		CURRENT_RASTER_POSITION_VALID: 0x0B08,
		CURRENT_TEXTURE_COORDS:  0x0B03,
		INDEX_CLEAR_VALUE:  0x0C20,
		INDEX_MODE:  0x0C30,
		INDEX_WRITEMASK:  0x0C21,
		MODELVIEW_MATRIX:  0x0BA6,
		MODELVIEW_STACK_DEPTH:  0x0BA3,
		NAME_STACK_DEPTH:  0x0D70,
		PROJECTION_MATRIX:  0x0BA7,
		PROJECTION_STACK_DEPTH:  0x0BA4,
		RENDER_MODE:  0x0C40,
		RGBA_MODE:  0x0C31,
		TEXTURE_MATRIX:  0x0BA8,
		TEXTURE_STACK_DEPTH:  0x0BA5,
		VIEWPORT:  0x0BA2,

		// Evaluators
		//

		AUTO_NORMAL:  0x0D80,
		MAP1_COLOR_4:  0x0D90,
		MAP1_GRID_DOMAIN:  0x0DD0,
		MAP1_GRID_SEGMENTS:  0x0DD1,
		MAP1_INDEX:  0x0D91,
		MAP1_NORMAL:  0x0D92,
		MAP1_TEXTURE_COORD_1:  0x0D93,
		MAP1_TEXTURE_COORD_2:  0x0D94,
		MAP1_TEXTURE_COORD_3:  0x0D95,
		MAP1_TEXTURE_COORD_4:  0x0D96,
		MAP1_VERTEX_3:  0x0D97,
		MAP1_VERTEX_4:  0x0D98,
		MAP2_COLOR_4:  0x0DB0,
		MAP2_GRID_DOMAIN:  0x0DD2,
		MAP2_GRID_SEGMENTS:  0x0DD3,
		MAP2_INDEX:  0x0DB1,
		MAP2_NORMAL:  0x0DB2,
		MAP2_TEXTURE_COORD_1:  0x0DB3,
		MAP2_TEXTURE_COORD_2:  0x0DB4,
		MAP2_TEXTURE_COORD_3:  0x0DB5,
		MAP2_TEXTURE_COORD_4:  0x0DB6,
		MAP2_VERTEX_3:  0x0DB7,
		MAP2_VERTEX_4:  0x0DB8,
		COEFF:  0x0A00,
		DOMAIN:  0x0A02,
		ORDER:  0x0A01,

		// Hints
		//

		FOG_HINT:  0x0C54,
		LINE_SMOOTH_HINT:  0x0C52,
		PERSPECTIVE_CORRECTION_HINT:  0x0C50,
		POINT_SMOOTH_HINT:  0x0C51,
		POLYGON_SMOOTH_HINT:  0x0C53,
		DONT_CARE:  0x1100,
		FASTEST:  0x1101,
		NICEST:  0x1102,

		// Scissor box
		//

		SCISSOR_TEST:  0x0C11,
		SCISSOR_BOX:  0x0C10,

		// Pixel Mode / Transfer
		//

		MAP_COLOR:  0x0D10,
		MAP_STENCIL:  0x0D11,
		INDEX_SHIFT:  0x0D12,
		INDEX_OFFSET:  0x0D13,
		RED_SCALE:  0x0D14,
		RED_BIAS:  0x0D15,
		GREEN_SCALE:  0x0D18,
		GREEN_BIAS:  0x0D19,
		BLUE_SCALE:  0x0D1A,
		BLUE_BIAS:  0x0D1B,
		ALPHA_SCALE:  0x0D1C,
		ALPHA_BIAS:  0x0D1D,
		DEPTH_SCALE:  0x0D1E,
		DEPTH_BIAS:  0x0D1F,
		PIXEL_MAP_S_TO_S_SIZE:  0x0CB1,
		PIXEL_MAP_I_TO_I_SIZE:  0x0CB0,
		PIXEL_MAP_I_TO_R_SIZE:  0x0CB2,
		PIXEL_MAP_I_TO_G_SIZE:  0x0CB3,
		PIXEL_MAP_I_TO_B_SIZE:  0x0CB4,
		PIXEL_MAP_I_TO_A_SIZE:  0x0CB5,
		PIXEL_MAP_R_TO_R_SIZE:  0x0CB6,
		PIXEL_MAP_G_TO_G_SIZE:  0x0CB7,
		PIXEL_MAP_B_TO_B_SIZE:  0x0CB8,
		PIXEL_MAP_A_TO_A_SIZE:  0x0CB9,
		PIXEL_MAP_S_TO_S:  0x0C71,
		PIXEL_MAP_I_TO_I:  0x0C70,
		PIXEL_MAP_I_TO_R:  0x0C72,
		PIXEL_MAP_I_TO_G:  0x0C73,
		PIXEL_MAP_I_TO_B:  0x0C74,
		PIXEL_MAP_I_TO_A:  0x0C75,
		PIXEL_MAP_R_TO_R:  0x0C76,
		PIXEL_MAP_G_TO_G:  0x0C77,
		PIXEL_MAP_B_TO_B:  0x0C78,
		PIXEL_MAP_A_TO_A:  0x0C79,
		PACK_ALIGNMENT:  0x0D05,
		PACK_LSB_FIRST:  0x0D01,
		PACK_ROW_LENGTH:  0x0D02,
		PACK_SKIP_PIXELS:  0x0D04,
		PACK_SKIP_ROWS:  0x0D03,
		PACK_SWAP_BYTES:  0x0D00,
		UNPACK_ALIGNMENT:  0x0CF5,
		UNPACK_LSB_FIRST:  0x0CF1,
		UNPACK_ROW_LENGTH:  0x0CF2,
		UNPACK_SKIP_PIXELS:  0x0CF4,
		UNPACK_SKIP_ROWS:  0x0CF3,
		UNPACK_SWAP_BYTES:  0x0CF0,
		ZOOM_X:  0x0D16,
		ZOOM_Y:  0x0D17,

		// Texture mapping
		//

		TEXTURE_ENV:  0x2300,
		TEXTURE_ENV_MODE:  0x2200,
		TEXTURE_1D:  0x0DE0,
		TEXTURE_2D:  0x0DE1,
		TEXTURE_WRAP_S:  0x2802,
		TEXTURE_WRAP_T:  0x2803,
		TEXTURE_MAG_FILTER:  0x2800,
		TEXTURE_MIN_FILTER:  0x2801,
		TEXTURE_ENV_COLOR:  0x2201,
		TEXTURE_GEN_S:  0x0C60,
		TEXTURE_GEN_T:  0x0C61,
		TEXTURE_GEN_MODE:  0x2500,
		TEXTURE_BORDER_COLOR:  0x1004,
		TEXTURE_WIDTH:  0x1000,
		TEXTURE_HEIGHT:  0x1001,
		TEXTURE_BORDER:  0x1005,
		TEXTURE_COMPONENTS:  0x1003,
		NEAREST_MIPMAP_NEAREST:  0x2700,
		NEAREST_MIPMAP_LINEAR:  0x2702,
		LINEAR_MIPMAP_NEAREST:  0x2701,
		LINEAR_MIPMAP_LINEAR:  0x2703,
		OBJECT_LINEAR:  0x2401,
		OBJECT_PLANE:  0x2501,
		EYE_LINEAR:  0x2400,
		EYE_PLANE:  0x2502,
		SPHERE_MAP:  0x2402,
		DECAL:  0x2101,
		MODULATE:  0x2100,
		NEAREST:  0x2600,
		REPEAT:  0x2901,
		CLAMP:  0x2900,
		S:  0x2000,
		T:  0x2001,
		R:  0x2002,
		Q:  0x2003,
		TEXTURE_GEN_R:  0x0C62,
		TEXTURE_GEN_Q:  0x0C63,
		PROXY_TEXTURE_1D:  0x8063,
		PROXY_TEXTURE_2D:  0x8064,
		TEXTURE_PRIORITY:  0x8066,
		TEXTURE_RESIDENT:  0x8067,
		TEXTURE_1D_BINDING:  0x8068,
		TEXTURE_2D_BINDING:  0x8069,

		// Internal texture formats
		//

		ALPHA4:  0x803B,
		ALPHA8:  0x803C,
		ALPHA12:  0x803D,
		ALPHA16:  0x803E,
		LUMINANCE4:  0x803F,
		LUMINANCE8:  0x8040,
		LUMINANCE12:  0x8041,
		LUMINANCE16:  0x8042,
		LUMINANCE4_ALPHA4:  0x8043,
		LUMINANCE6_ALPHA2:  0x8044,
		LUMINANCE8_ALPHA8:  0x8045,
		LUMINANCE12_ALPHA4:  0x8046,
		LUMINANCE12_ALPHA12:  0x8047,
		LUMINANCE16_ALPHA16:  0x8048,
		INTENSITY:  0x8049,
		INTENSITY4:  0x804A,
		INTENSITY8:  0x804B,
		INTENSITY12:  0x804C,
		INTENSITY16:  0x804D,
		R3_G3_B2:  0x2A10,
		RGB4:  0x804F,
		RGB5:  0x8050,
		RGB8:  0x8051,
		RGB10:  0x8052,
		RGB12:  0x8053,
		RGB16:  0x8054,
		RGBA2:  0x8055,
		RGBA4:  0x8056,
		RGB5_A1:  0x8057,
		RGBA8:  0x8058,
		RGB10_A2:  0x8059,
		RGBA12:  0x805A,
		RGBA16:  0x805B,

		// Utility
		//

		VENDOR:  0x1F00,
		RENDERER:  0x1F01,
		VERSION:  0x1F02,
		EXTENSIONS:  0x1F03,

		// Errors
		//

		INVALID_VALUE:  0x0501,
		INVALID_ENUM:  0x0500,
		INVALID_OPERATION:  0x0502,
		STACK_OVERFLOW:  0x0503,
		STACK_UNDERFLOW:  0x0504,
		OUT_OF_MEMORY:  0x0505,

		/*
		 * 1.0 Extensions
		 */

		// GL_EXT_blend_minmax and GL_EXT_blend_color
		//

		CONSTANT_COLOR_EXT:  0x8001,
		ONE_MINUS_CONSTANT_COLOR_EXT:  0x8002,
		CONSTANT_ALPHA_EXT:  0x8003,
		ONE_MINUS_CONSTANT_ALPHA_EXT:  0x8004,
		BLEND_EQUATION_EXT:  0x8009,
		MIN_EXT:  0x8007,
		MAX_EXT:  0x8008,
		FUNC_ADD_EXT:  0x8006,
		FUNC_SUBTRACT_EXT:  0x800A,
		FUNC_REVERSE_SUBTRACT_EXT:  0x800B,
		BLEND_COLOR_EXT:  0x8005,

		// GL_EXT_polygon_offset
		//

		POLYGON_OFFSET_EXT: 0x8037,
		POLYGON_OFFSET_FACTOR_EXT: 0x8038,
		POLYGON_OFFSET_BIAS_EXT: 0x8039,

		// GL_EXT_vertex_array
		//

		VERTEX_ARRAY_EXT:  0x8074,
		NORMAL_ARRAY_EXT:  0x8075,
		COLOR_ARRAY_EXT:  0x8076,
		INDEX_ARRAY_EXT:  0x8077,
		TEXTURE_COORD_ARRAY_EXT:  0x8078,
		EDGE_FLAG_ARRAY_EXT:  0x8079,
		VERTEX_ARRAY_SIZE_EXT:  0x807A,
		VERTEX_ARRAY_TYPE_EXT:  0x807B,
		VERTEX_ARRAY_STRIDE_EXT:  0x807C,
		VERTEX_ARRAY_COUNT_EXT:  0x807D,
		NORMAL_ARRAY_TYPE_EXT:  0x807E,
		NORMAL_ARRAY_STRIDE_EXT:  0x807F,
		NORMAL_ARRAY_COUNT_EXT:  0x8080,
		COLOR_ARRAY_SIZE_EXT:  0x8081,
		COLOR_ARRAY_TYPE_EXT:  0x8082,
		COLOR_ARRAY_STRIDE_EXT:  0x8083,
		COLOR_ARRAY_COUNT_EXT:  0x8084,
		INDEX_ARRAY_TYPE_EXT:  0x8085,
		INDEX_ARRAY_STRIDE_EXT:  0x8086,
		INDEX_ARRAY_COUNT_EXT:  0x8087,
		TEXTURE_COORD_ARRAY_SIZE_EXT:  0x8088,
		TEXTURE_COORD_ARRAY_TYPE_EXT:  0x8089,
		TEXTURE_COORD_ARRAY_STRIDE_EXT: 0x808A,
		TEXTURE_COORD_ARRAY_COUNT_EXT: 0x808B,
		EDGE_FLAG_ARRAY_STRIDE_EXT:  0x808C,
		EDGE_FLAG_ARRAY_COUNT_EXT:  0x808D,
		VERTEX_ARRAY_POINTER_EXT:  0x808E,
		NORMAL_ARRAY_POINTER_EXT:  0x808F,
		COLOR_ARRAY_POINTER_EXT:  0x8090,
		INDEX_ARRAY_POINTER_EXT:  0x8091,
		TEXTURE_COORD_ARRAY_POINTER_EXT: 0x8092,
		EDGE_FLAG_ARRAY_POINTER_EXT:  0x8093, 

		CURRENT_BIT:  0x00000001,
		POINT_BIT:  0x00000002,
		LINE_BIT:  0x00000004,
		POLYGON_BIT:  0x00000008,
		POLYGON_STIPPLE_BIT:  0x00000010,
		PIXEL_MODE_BIT:  0x00000020,
		LIGHTING_BIT:  0x00000040,
		FOG_BIT:  0x00000080,
		DEPTH_BUFFER_BIT:  0x00000100,
		ACCUM_BUFFER_BIT:  0x00000200,
		STENCIL_BUFFER_BIT:  0x00000400,
		VIEWPORT_BIT:  0x00000800,
		TRANSFORM_BIT:  0x00001000,
		ENABLE_BIT:  0x00002000,
		COLOR_BUFFER_BIT:  0x00004000,
		HINT_BIT:  0x00008000,
		EVAL_BIT:  0x00010000,
		LIST_BIT:  0x00020000,
		TEXTURE_BIT:  0x00040000,
		SCISSOR_BIT:  0x00080000,
		ALL_ATTRIB_BITS:  0x000FFFFF, 

		/*
		 * TinyGL.js specific
		 */

		UNPACK_FLIP_Y_TINYGL:  0x9240, 

		/* 
		 * Functions
		 */

		enable: function(code) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEnable(code);
		}, 

		disable: function(code) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDisable(code);
		}, 

		shadeModel: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glShadeModel(mode);
		}, 

		cullFace: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glCullFace(mode);
		}, 

		polygonMode: function(face, mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPolygonMode(face, mode);
		}, 

		begin: function(type) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glBegin(type);
		}, 

		end: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEnd();
		}, 

		vertex2f: function(x, y) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex2f(x, y);
		}, 

		vertex2d: function(x, y) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex2f(x, y);
		}, 

		vertex2fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex2f.apply(null, v);
		}, 

		vertex2dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex2f.apply(null, v);
		}, 

		vertex3f: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex3f(x, y, z);
		}, 

		vertex3d: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex3f(x, y, z);
		}, 

		vertex3fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex3f.apply(null, v);
		}, 

		vertex3dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex3f.apply(null, v);
		}, 

		vertex4f: function(x, y, z, w) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex4f(x, y, z, w);
		}, 

		vertex4d: function(x, y, z, w) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex4f(x, y, z, w);
		}, 

		vertex4fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex4f.apply(null, v);
		}, 

		vertex4dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glVertex4f.apply(null, v);
		}, 

		color3f: function(r, g, b) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor3f(r, g, b);
		}, 

		color3d: function(r, g, b) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor3f(r, g, b);
		}, 

		color3fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor3f.apply(null, v);
		}, 

		color3dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor3f.apply(null, v);
		}, 

		color4f: function(r, g, b, a) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor4f(r, g, b, a);
		}, 

		color4d: function(r, g, b, a) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor4f(r, g, b, a);
		}, 

		color4fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor4f.apply(null, v);
		}, 

		color4dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColor4f.apply(null, v);
		}, 

		normal3f: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glNormal3f(x, y, z);
		}, 

		normal3d: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glNormal3f(x, y, z);
		}, 

		normal3fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glNormal3f.apply(null, v);
		}, 

		normal3dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glNormal3f.apply(null, v);
		}, 

		texCoord1f: function(s) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord1d: function(s) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord1fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord1dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord2f: function(s, t) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord2f(s, t);
		}, 

		texCoord2d: function(s, t) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord2f(s, t);
		}, 

		texCoord2fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord2f.apply(null, v);
		}, 

		texCoord2dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord2f.apply(null, v);
		},

		texCoord3f: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord3d: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord3fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord3d: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented
		}, 

		texCoord4f: function(s, t, r, q) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord4f(s, t, r, q);
		}, 

		texCoord4d: function(s, t, r, q) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord4f(s, t, r, q);
		}, 

		texCoord4fv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord4f.apply(null, v);
		}, 

		texCoord4dv: function(v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexCoord4f.apply(null, v);
		}, 

		edgeFlag: function(flag) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEdgeFlag(flag);
		}, 

		// Matrices
		//

		matrixMode: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glMatrixMode(mode);
		}, 

		loadIdentity: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLoadIdentity();
		}, 

		loadMatrixf: function(m) {
			var buf_ptr = Module._malloc(m.length * BYTES_PER_FLOAT32);
			Module.HEAPF32.set(m, buf_ptr / BYTES_PER_FLOAT32);
			//console.info(new Float32Array(Module.HEAPF32.subarray(buf_ptr >> 2, (buf_ptr >> 2) + 16)));
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLoadMatrixf(buf_ptr);
			Module._free(buf_ptr);
		}, 

		multMatrixf: function(m) {
			var buf_ptr = Module._malloc(m.length * BYTES_PER_FLOAT32);
			Module.HEAPF32.set(m, buf_ptr / BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glMultMatrixf(buf_ptr);
			Module._free(buf_ptr);
		}, 

		pushMatrix: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPushMatrix();
		}, 

		popMatrix: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPopMatrix();
		}, 

		rotatef: function(angle, x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glRotatef(angle, x, y, z);
		}, 

		translatef: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTranslatef(x, y, z);
		}, 

		scalef: function(x, y, z) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glScalef(x, y, z);
		}, 

		viewport: function(x, y, width, height) {
			_ostgl_make_current(this._tgl_ctx, 0);

			// calculate new framebuffer dimensions from the given viewport
			var req_framebuf_width  = calcAdjustedWidth(x + width);
			var req_framebuf_height = y + height;

			// resize and reallocate framebuffer if necessary
			if( req_framebuf_width != this._frame_buf_width || 
				req_framebuf_height != this._frame_buf_height ) {
				this._frame_buf_ptr = reallocateFramebuffer(req_framebuf_width, req_framebuf_height, this._frame_buf_ptr);
				this._frame_buf_width = req_framebuf_width;
				this._frame_buf_height = req_framebuf_height;

				var framebuf_ptr_arr_ptr = Module._malloc(BYTES_PER_UINT32);
				Module.setValue(framebuf_ptr_arr_ptr, this._frame_buf_ptr, 'i32');
				_ostgl_resize(this._tgl_ctx, req_framebuf_width, req_framebuf_height, framebuf_ptr_arr_ptr);
				Module._free(framebuf_ptr_arr_ptr);
			}

			// calculate the adjusted width and height of the viewport
			width  = req_framebuf_width - x;
			height = req_framebuf_height - y;

			// cache the new viewport locally
			this._vp = {
				x: x, 
				y: y, 
				w: width, 
				h: height, 
				W: req_framebuf_width, 
				H: req_framebuf_height
			};

			_glViewport(x, y, width, height);
		}, 

		frustum: function(left, right, bottom, top, near, far) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glFrustum(left, right, bottom, top, near, far);
		}, 

		// Lists
		//
		//TODO: consider wrapping lists as objects

		genLists: function(range) {
			_ostgl_make_current(this._tgl_ctx, 0);
			return _glGenLists(range);
		}, 

		isList: function(list) {
			_ostgl_make_current(this._tgl_ctx, 0);
			return _glIsList(list);
		}, 

		newList: function(list, mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glNewList(list, mode);
		}, 

		endList: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEndList();
		}, 

		callList: function(list) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glCallList(list);
		}, 

		// Clear
		//

		clear: function(mask) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glClear(mask);
		}, 

		clearColor: function(r, g, b, a) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glClearColor(r, g, b, a);
		}, 

		clearDepth: function(depth) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glClearDepth(depth);
		}, 

		// Selection
		//

		renderMode: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			var result = _glRenderMode(mode);

			switch (mode) {
			case this.SELECT:
				this._is_select_mode = true;
				break;
			case this.RENDER:
				// copy selection results from heap memory to output buffer on exit of selection mode
				if (this._is_select_mode) {
					for (var i=0, ptr=this._select_internal_buf_ptr; i<this._select_buf_length; i++, ptr+=BYTES_PER_UINT32) {
						this._select_output_buf[i] = Module.getValue(ptr, 'i32');
					}
				}
				// falls down
			default:
				this._is_select_mode = false;
				break;
			}

			return result;
		}, 

		selectBuffer: function(size, buf) {
			// reallocate heap memory to store selection results
			if (this._select_internal_buf_ptr)
				Module._free(this._select_internal_buf_ptr);
			this._select_internal_buf_ptr = Module._malloc(size * BYTES_PER_UINT32);
			// clear memory block
			Module._memset(this._select_internal_buf_ptr, 0, size * BYTES_PER_UINT32);

			_ostgl_make_current(this._tgl_ctx, 0);
			_glSelectBuffer(size, this._select_internal_buf_ptr);

			// The results will be copied to the given array on next call 
			// of renderMode() method with mode GL_RENDER.
			this._select_output_buf = buf;
			this._select_buf_length = size;
		}, 

		initNames: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glInitNames();
		}, 

		pushName: function(name) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPushName(name);
		}, 

		popName: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPopName();
		}, 

		loadName: function(name) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLoadName(name);
		}, 

		// Textures
		//
		//TODO: consider wrapping textures as objects like that in WebGL implementation

		genTextures: function(num, ids) {
			ids = ids || new Uint32Array(num);
			var buf_ptr = Module._malloc(num * BYTES_PER_UINT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glGenTextures(num, buf_ptr);
			for (var i=0, ptr=buf_ptr; i<num; i++, ptr+=BYTES_PER_UINT32) {
				ids[i] = Module.getValue(ptr, 'i32');
			}
			Module._free(buf_ptr);
			return ids;
		}, 

		deleteTextures: function(num, ids) {
			var buf_ptr = Module._malloc(num * BYTES_PER_UINT32);
			Module.HEAPU32.set(ids, buf_ptr / BYTES_PER_UINT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDeleteTextures(num, buf_ptr);
			Module._free(buf_ptr);
		}, 

		bindTexture: function(target, texture) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glBindTexture(target, texture);
		}, 
		
		texImage2D: function(target, level, components, width, height, border, format, type, pixels) {
			_ostgl_make_current(this._tgl_ctx, 0);

			if (arguments.length == 9) {
				/*
				 * Signature 1: 
				 *
				 *   texImage2D(target, level, components, width, height, border, format, type, pixels)
				 *
				 * where pixels can be an array or a typed array.
				 */
				if ((typeof pixels.buffer) != 'undefined')
					pixels = new Uint8Array(pixels.buffer);
				if (this._attribs.flipTextureY || this._pixelStoreFlipY)
					pixels = flipPixelsY(pixels, pixels.length, true);
				if ((typeof pixels.buffer) != 'undefined')
					pixels = new Uint8Array(pixels.buffer);

				var buf_ptr = Module._malloc(pixels.length);
				Module.HEAPU8.set(pixels, buf_ptr);
				_glTexImage2D(target, level, components, width, height, border, format, type, buf_ptr);
				Module._free(buf_ptr);
			} else if (arguments.length == 6) {
				/*
				 * Signature 2: 
				 *
				 *   texImage2D(target, level, components, format, type, domElement)
				 * 
				 * where domElement can be either <img>, <video> or <canvas>.
				 */
				var domElement = arguments[5];
				var elem_type = '';
				if ((typeof HTMLImageElement) != 'undefined' && (domElement instanceof HTMLImageElement)) {
					elem_type = 'image';
				} else if ((typeof HTMLVideoElement) != 'undefined' && (domElement instanceof HTMLVideoElement)) {
					elem_type = 'video';
				} else if ((typeof HTMLCanvasElement) != 'undefined' && (domElement instanceof HTMLCanvasElement)) {
					elem_type = 'canvas';
				}

				var cv = null;
				switch (elem_type) {
				case 'image':
				case 'video':
					cv = getUtilCanvas(/*domElement.width, domElement.height*/ 256, 256);
					var ctx2d = cv.getContext('2d');
					ctx2d.drawImage(domElement, 0, 0, cv.width, cv.height);
					break;
				case 'canvas':
					cv = domElement;
					break;
				default:
					//TODO: log warnings for the wrong input?
					return;
				}

				var pixels = grabPixelsRGBToUint8Array(cv);
				if (this._attribs.flipTextureY || this._pixelStoreFlipY)
					flipPixelsY(pixels, 3/* RGB */ * cv.width);

				var buf_ptr = Module._malloc(pixels.length);
				Module.HEAPU8.set(pixels, buf_ptr);
				_glTexImage2D(target, level, 3, cv.width, cv.height, 0, gl.RGB, gl.UNSIGNED_BYTE, buf_ptr);
				Module._free(buf_ptr);
			}
		}, 

		texEnvi: function(target, pname, param) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexEnvi(target, pname, param);
		}, 

		texParameteri: function(target, pname, param) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glTexParameteri(target, pname, param);
		}, 

		pixelStorei: function(pname, param) {
			_ostgl_make_current(this._tgl_ctx, 0);
			switch (pname) {
			case this.UNPACK_FLIP_Y_TINYGL:
				// we implement the non-standard parameter UNPACK_FLIP_Y_TINYGL 
				// in the wrapper layer rather than in TinyGL
				this._pixelStoreFlipY = !!param;
				break;
			default:
				_glPixelStorei(pname, param);
				break;
			}
		}, 

		// Lighting
		//

		materialf: function(mode, type, v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glMaterialf(mode, type, v);
		}, 

		materialfv: function(mode, type, v) {
			var buf_ptr = Module._malloc(v.length * BYTES_PER_FLOAT32);
			Module.HEAPF32.set(v, buf_ptr / BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glMaterialfv(mode, type, buf_ptr);
			Module._free(buf_ptr);
		}, 

		colorMaterial: function(mode, type) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glColorMaterial(mode, type);
		}, 

		lightf: function(light, type, v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLightf(light, type, v);
		}, 

		lightfv: function(light, type, v) {
			var buf_ptr = Module._malloc(v.length * BYTES_PER_FLOAT32);
			Module.HEAPF32.set(v, buf_ptr / BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLightfv(light, type, buf_ptr);
			Module._free(buf_ptr);
		}, 

		lightModeli: function(pname, v) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLightModeli(pname, v);
		}, 

		lightModelfv: function(pname, v) {
			var buf_ptr = Module._malloc(v.length * BYTES_PER_FLOAT32);
			Module.HEAPF32.set(v, buf_ptr / BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glLightModelfv(pname, buf_ptr);
			Module._free(buf_ptr);
		}, 

		// Misc
		//

		flush: function() {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glFlush();
		}, 

		hint: function(target, mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glHint(target, mode);
		}, 

		getIntegerv: function(pname, v) {
			v = v || new Int32Array(4);
			var buf_ptr = Module._malloc(v.length * Int32Array.prototype.BYTES_PER_ELEMENT);
			Module._memset(buf_ptr, 0, v.length * Int32Array.prototype.BYTES_PER_ELEMENT);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glGetIntegerv(pname, buf_ptr);
			for (var i=0, ptr=buf_ptr; i<v.length; i++, ptr+=Int32Array.prototype.BYTES_PER_ELEMENT) {
				v[i] = Module.getValue(ptr, 'i32');
			}
			Module._free(buf_ptr);
			return v;
		}, 

		getFloatv: function(pname, v) {
			v = v || new Float32Array(16);
			var buf_ptr = Module._malloc(v.length * BYTES_PER_FLOAT32);
			Module._memset(buf_ptr, 0, v.length * BYTES_PER_FLOAT32);
			_ostgl_make_current(this._tgl_ctx, 0);
			_glGetFloatv(pname, buf_ptr);
			for (var i=0, ptr=buf_ptr; i<v.length; i++, ptr+=BYTES_PER_FLOAT32) {
				v[i] = Module.getValue(ptr, 'float');
			}
			Module._free(buf_ptr);
			return v;
		}, 

		frontFace: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glFrontFace(mode);
		}, 

		// opengl 1.2 arrays
		//

		enableClientState: function(array) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glEnableClientState(array);
		}, 

		disableClientState: function(array) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDisableClientState(array);
		}, 

		arrayElement: function(i) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glArrayElement(i);
		}, 

		vertexPointer: function(size, type, stride, pointer) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented yet
		}, 

		colorPointer: function(size, type, stride, pointer) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented yet
		}, 

		normalPointer: function(size, type, stride, pointer) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented yet
		}, 

		texCoordPointer: function(size, type, stride, pointer) {
			_ostgl_make_current(this._tgl_ctx, 0);
			//not implemented yet
		}, 

		// opengl 1.2 polygon offset
		//
		polygonOffset: function(factor, units) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glPolygonOffset(factor, units);
		}, 

		// Non-compatible functions
		//

		debug: function(mode) {
			_ostgl_make_current(this._tgl_ctx, 0);
			_glDebug(mode);
		}, 

		swapBuffers: function() {
			var frame_buf_size = this._frame_buf_width * this._frame_buf_height * BYTES_PER_UINT32;
			var frame_buf = Module.HEAPU8.subarray(this._frame_buf_ptr, this._frame_buf_ptr + frame_buf_size);
			this._driver.deliver(this._vp, frame_buf);
		}

	};


	/*
	 * Replace the default HTMLCanvasElement.prototype.getContext() method with our homemade 
	 * implementation, so that a TinyGL rendering context can be fetched using the following 
	 * semantics: 
	 *
	 *   var canvas = document.getElementById(canvas_id);
	 *   var gl = canvas.getContext('experimental-tinygl');
	 *   ...
	 *
	 * just as what we do when requiring a canvas2D or a WebGL context.
	 */
	if ((typeof HTMLCanvasElement) != 'undefined') {
		try {
			var default_get_context_func = HTMLCanvasElement.prototype.getContext;
			HTMLCanvasElement.prototype.getContext = function() {
				if (arguments[0] == 'experimental-tinygl') {
					try {
						return new TinyGLRenderingContextCtor(this, arguments[1]);
					} catch (e) {
						return null;
					}
					
				}
				return default_get_context_func.apply(this, arguments);
			};
		} catch (e) {
		}
	}


	return TinyGLRenderingContextCtor;

}) ();