let createContext = importModule("TinyGL");
let gl = createContext(1024, 768);

let start = Date.now();

gl.enable(gl.DEPTH_TEST);

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
gl.matrixMode(gl.MODELVIEW);
gl.loadIdentity();

gl.translatef(1.5, 0.0, -7.0);  // Move right and into the screen

gl.begin(gl.QUADS);                // Begin drawing the color cube with 6 quads
                                  // Top face (y = 1.0)
                                  // Define vertices in counter-clockwise (CCW) order with normal pointing out
gl.color3f(0.0, 1.0, 0.0);     // Green
gl.vertex3f(1.0, 1.0, -1.0);
gl.vertex3f(-1.0, 1.0, -1.0);
gl.vertex3f(-1.0, 1.0, 1.0);
gl.vertex3f(1.0, 1.0, 1.0);

// Bottom face (y = -1.0)
gl.color3f(1.0, 0.5, 0.0);     // Orange
gl.vertex3f(1.0, -1.0, 1.0);
gl.vertex3f(-1.0, -1.0, 1.0);
gl.vertex3f(-1.0, -1.0, -1.0);
gl.vertex3f(1.0, -1.0, -1.0);

// Front face  (z = 1.0)
gl.color3f(1.0, 0.0, 0.0);     // Red
gl.vertex3f(1.0, 1.0, 1.0);
gl.vertex3f(-1.0, 1.0, 1.0);
gl.vertex3f(-1.0, -1.0, 1.0);
gl.vertex3f(1.0, -1.0, 1.0);

// Back face (z = -1.0)
gl.color3f(1.0, 1.0, 0.0);     // Yellow
gl.vertex3f(1.0, -1.0, -1.0);
gl.vertex3f(-1.0, -1.0, -1.0);
gl.vertex3f(-1.0, 1.0, -1.0);
gl.vertex3f(1.0, 1.0, -1.0);

// Left face (x = -1.0)
gl.color3f(0.0, 0.0, 1.0);     // Blue
gl.vertex3f(-1.0, 1.0, 1.0);
gl.vertex3f(-1.0, 1.0, -1.0);
gl.vertex3f(-1.0, -1.0, -1.0);
gl.vertex3f(-1.0, -1.0, 1.0);

// Right face (x = 1.0)
gl.color3f(1.0, 0.0, 1.0);     // Magenta
gl.vertex3f(1.0, 1.0, -1.0);
gl.vertex3f(1.0, 1.0, 1.0);
gl.vertex3f(1.0, -1.0, 1.0);
gl.vertex3f(1.0, -1.0, -1.0);
gl.end();  // End of drawing color-cube

gl.flush(); 

let end = Date.now();
console.log(end - start.toString() + "ms to draw frame");

start = Date.now();

gl.swapBuffers();

end = Date.now();
console.log(end - start.toString() + "ms to swap buffers");

let frame = gl._driver._ctx2d.data;
