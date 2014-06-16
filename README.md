TinyGL.js
=========

TinyGL.js is a JavaScript library providing a tiny subset of OpenGL 1.1 compatible API, which can be used to make 3D graphics on canvas. TinyGL.js is based upon TinyGL's implementation written in C and compiled to JavaScript via Emscripten. It only uses software rasterization and does not require WebGL to run.

Current implementation is based on a bug-fixed branch of TinyGL 0.4.

Getting Started
---------------

This library is in a single JavaScript source file `tinygl.js`. It should be included first:

```html
<script type="text/javascript" src="tinygl.js"></script>
```

Then, assuming a canvas element is already declared in the HTML, we get TinyGL.js's rendering context using the keyword `experimental-tinygl`:

```js
var canvas = document.getElementById(canvas_id);
var gl = canvas.getContext('experimental-tinygl');
```

The semantics is almost the same with what we do for a Canvas2D or WebGL context.  Alternatively, the following code produces the same result:

```js
var canvas = document.getElementById(canvas_id);
var gl = new TinyGLRenderingContext(canvas);
```

Now that we have the rendering context, let's begin with some basic primitives:

```js
gl.viewport(0, 0, canvas.width, canvas.height);

gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.matrixMode(gl.PROJECTION);
gl.loadIdentity();
gl.frustum(-2.0, 2.0, -2.0, 2.0, 6.0, 20.0);
gl.matrixMode(gl.MODELVIEW);
gl.loadIdentity();
gl.translatef(0.0, 0.0, -16.0);

gl.color3f(1, 0, 0);
gl.begin(gl.POLYGON);
  gl.vertex3f(-1, -1, 0);
  gl.vertex3f( 1, -1, 0);
  gl.vertex3f( 1,  1, 0);
  gl.vertex3f(-1,  1, 0);
gl.end();

gl.flush();
gl.swapBuffers();
```

This is our first polygon with TinyGL.js:-)  See what it outputs [here](http://humu2009.github.io/tinygl.js/examples/my_first_polygon.html).

Examples
--------

[![textures example](http://humu2009.github.io/tinygl.js/screenshots/textures.jpg)](http://humu2009.github.io/tinygl.js/examples/textures.html)
[![gears example](http://humu2009.github.io/tinygl.js/screenshots/gears.jpg)](http://humu2009.github.io/tinygl.js/examples/gears.html)
[![atlantis example](http://humu2009.github.io/tinygl.js/screenshots/atlantis.jpg)](http://humu2009.github.io/tinygl.js/examples/atlantis.html)
[![mech example](http://humu2009.github.io/tinygl.js/screenshots/mech.jpg)](http://humu2009.github.io/tinygl.js/examples/mech.html)

Browser Requirements
--------------------

TinyGL.js depends on [Canvas](http://caniuse.com/#feat=canvas) and  [Typed Arrays](http://caniuse.com/#feat=typedarrays). Make sure your browser supports these features to run codes with TinyGL.js.

Known Issues
------------

* Canvas width must be multiples of 4 according to TinyGL's restriction. Otherwise, there may be some columns not refreshed.
