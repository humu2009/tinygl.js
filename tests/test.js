const createCtx = importModule("TinyGL");
const BMPEncode = importModule("BMP");
let lastRendertime = Date.now();

let w = 1024,
    h = 768;
let gl = createCtx(w, h);
let fc = 1;
let frames = [];

function encodeBMP(rgbaData, w, h)
{  
  return bmpEncode({width: w, height: h, data: rgbaData}).data;
};

// https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string

function Uint8ToString(u8a){
  var CHUNK_SZ = 0x8000;
  var c = [];
  for (var i=0; i < u8a.length; i+=CHUNK_SZ) {
    c.push(String.fromCharCode.apply(null, u8a.subarray(i, i+CHUNK_SZ)));
  }
  return c.join("");
}

function stringToBuffer(str) {
  'use strict'
  let Len = str.length,
    resPos = -1
  // The Uint8Array's length must be at least 3x the length of the string because an invalid UTF-16
  //  takes up the equivalent space of 3 UTF-8 characters to encode it properly.
  let resArr = new Uint8Array(Len * 3)
  for (let point = 0, nextcode = 0, i = 0; i !== Len; ) {
    point = str.charCodeAt(i)
    i += 1
    if (point >= 0xd800 && point <= 0xdbff) {
      if (i === Len) {
        resArr[(resPos += 1)] = 0xef /*0b11101111*/
        resArr[(resPos += 1)] = 0xbf /*0b10111111*/
        resArr[(resPos += 1)] = 0xbd /*0b10111101*/
        break
      }
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      nextcode = str.charCodeAt(i)
      if (nextcode >= 0xdc00 && nextcode <= 0xdfff) {
        point = (point - 0xd800) * 0x400 + nextcode - 0xdc00 + 0x10000
        i += 1
        if (point > 0xffff) {
          resArr[(resPos += 1)] = (0x1e /*0b11110*/ << 3) | (point >>> 18)
          resArr[(resPos += 1)] =
            (0x2 /*0b10*/ << 6) | ((point >>> 12) & 0x3f) /*0b00111111*/
          resArr[(resPos += 1)] =
            (0x2 /*0b10*/ << 6) | ((point >>> 6) & 0x3f) /*0b00111111*/
          resArr[(resPos += 1)] =
            (0x2 /*0b10*/ << 6) | (point & 0x3f) /*0b00111111*/
          continue
        }
      } else {
        resArr[(resPos += 1)] = 0xef /*0b11101111*/
        resArr[(resPos += 1)] = 0xbf /*0b10111111*/
        resArr[(resPos += 1)] = 0xbd /*0b10111101*/
        continue
      }
    }
    if (point <= 0x007f) {
      resArr[(resPos += 1)] = (0x0 /*0b0*/ << 7) | point
    } else if (point <= 0x07ff) {
      resArr[(resPos += 1)] = (0x6 /*0b110*/ << 5) | (point >>> 6)
      resArr[(resPos += 1)] =
        (0x2 /*0b10*/ << 6) | (point & 0x3f) /*0b00111111*/
    } else {
      resArr[(resPos += 1)] = (0xe /*0b1110*/ << 4) | (point >>> 12)
      resArr[(resPos += 1)] =
        (0x2 /*0b10*/ << 6) | ((point >>> 6) & 0x3f) /*0b00111111*/
      resArr[(resPos += 1)] =
        (0x2 /*0b10*/ << 6) | (point & 0x3f) /*0b00111111*/
    }
  }
  return resArr.subarray(0, resPos + 1)
}

function showFrames() 
{
  console.log("Processing frames...");
  let cd = FileManager.local().documentsDirectory();
  let fm = FileManager.local();
  let i = 0;
  for(const frame of frames)
    fm.write(cd + `/frame${++i}_${(Math.round(Math.round(Math.random() * 256) + (Math.round(Math.random() * 256) % Math.random()))).toString(16).padStart(2, "0")}${(Math.round(Math.round(Math.random() * 256) + (Math.round(Math.random() * 256) % Math.random()))).toString(16).padStart(2, "0")}${(Math.round(Math.round(Math.random() * 256) + (Math.round(Math.random() * 256) % Math.random()))).toString(16).padStart(2, "0")}${(Math.round(Math.round(Math.random() * 256) + (Math.round(Math.random() * 256) % Math.random()))).toString(16).padStart(2, "0")}.bmp`, Data.fromString(Uint8ToString(BMPEncode(frame))));
  console.log(`Frames written to: ${cd}`);
}
  
var rotate_x = 5;

function display() 
 {
  console.log(`Drawing frame ${fc++}`);
  
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
  gl.translatef(1.5, 0.0, -7.0);  // Move right and into the screen
  
  gl.begin(gl.QUADS);                // Begin drawing the color cube with 6 quads
                                    // Top face (y = 1.0f)
                                    // Define vertices in counter-clockwise (CCW) order with normal pointing out
  gl.color3f(0.0, 1.0, 0.0);     // Green
  gl.vertex3f(1.0, 1.0, -1.0);
  gl.vertex3f(-1.0, 1.0, -1.0);
  gl.vertex3f(-1.0, 1.0, 1.0);
  gl.vertex3f(1.0, 1.0, 1.0);
  
  // Bottom face (y = -1.0f)
  gl.color3f(1.0, 0.5, 0.0);     // Orange
  gl.vertex3f(1.0, -1.0, 1.0);
  gl.vertex3f(-1.0, -1.0, 1.0);
  gl.vertex3f(-1.0, -1.0, -1.0);
  gl.vertex3f(1.0, -1.0, -1.0);
  
  // Front face  (z = 1.0f)
  gl.color3f(1.0, 0.0, 0.0);     // Red
  gl.vertex3f(1.0, 1.0, 1.0);
  gl.vertex3f(-1.0, 1.0, 1.0);
  gl.vertex3f(-1.0, -1.0, 1.0);
  gl.vertex3f(1.0, -1.0, 1.0);
  
  // Back face (z = -1.0f)
  gl.color3f(1.0, 1.0, 0.0);     // Yellow
  gl.vertex3f(1.0, -1.0, -1.0);
  gl.vertex3f(-1.0, -1.0, -1.0);
  gl.vertex3f(-1.0, 1.0, -1.0);
  gl.vertex3f(1.0, 1.0, -1.0);
  
  // Left face (x = -1.0f)
  gl.color3f(0.0, 0.0, 1.0);     // Blue
  gl.vertex3f(-1.0, 1.0, 1.0);
  gl.vertex3f(-1.0, 1.0, -1.0);
  gl.vertex3f(-1.0, -1.0, -1.0);
  gl.vertex3f(-1.0, -1.0, 1.0);
  
  // Right face (x = 1.0f)
  gl.color3f(1.0, 0.0, 1.0);     // Magenta
  gl.vertex3f(1.0, 1.0, -1.0);
  gl.vertex3f(1.0, 1.0, 1.0);
  gl.vertex3f(1.0, -1.0, 1.0);
  gl.vertex3f(1.0, -1.0, -1.0);
  gl.end();  // End of drawing color-cube
  
  gl.loadIdentity();

  // Rotate when user changes rotate_x and rotate_y
  gl.rotatef( rotate_x, 1.0, 0.0, 0.0 );
  
  rotate_x -= 15;
  
  gl.flush();    
  gl.swapBuffers();
  let time = Date.now();
  console.log(`Frame render time: ${Date.now() - lastRendertime} ms`); // On my machine average is 11.7647058824 fps
  lastRendertime = time;
  if(fc == 601) 
  {
    globalThis.timer.invalidate();
    showFrames();
  };
}

gl.enable(gl.DEPTH_TEST);
gl.matrixMode(gl.MODELVIEW);
gl.loadIdentity();

globalThis.timer = new Timer();
timer.timeInterval = 0;
timer.repeats = true;
timer.schedule(display);
