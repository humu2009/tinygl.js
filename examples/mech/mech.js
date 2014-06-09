
/* start of display list definitions */
const SOLID_MECH_TORSO = 1
const SOLID_MECH_HIP = 2
const SOLID_MECH_SHOULDER = 3
const SOLID_MECH_UPPER_ARM = 4
const SOLID_MECH_FOREARM = 5
const SOLID_MECH_UPPER_LEG = 6
const SOLID_MECH_FOOT = 7
const SOLID_MECH_ROCKET = 8
const SOLID_MECH_VULCAN = 9
const SOLID_ENVIRO = 10
/* end of display list definitions */

/* start of motion rate variables */
const ANKLE_RATE = 3
const HEEL_RATE = 3
const ROTATE_RATE = 10
const TILT_RATE = 10
const ELBOW_RATE = 2
const SHOULDER_RATE = 5
const LAT_RATE = 5
const CANNON_RATE = 40
const UPPER_LEG_RATE = 3
const UPPER_LEG_RATE_GROIN = 10
const LIGHT_TURN_RATE = 10
const VIEW_TURN_RATE = 10
/* end of motion rate variables */

/* start of motion  variables */
var leg = 0;

var shoulder1 = 0, shoulder2 = 0, shoulder3 = 0, shoulder4 = 0, lat1 = 20, lat2 = 20,
  elbow1 = 0, elbow2 = 0, pivot = 0, tilt = 10, ankle1 = 0, ankle2 = 0, heel1 = 0,
  heel2 = 0, hip11 = 0, hip12 = 10, hip21 = 0, hip22 = 10, fire = 0, solid_part = 0,
  anim = 0, turn = 0, turn1 = 0, lightturn = 0, lightturn1 = 0;

var elevation = 0.0, distance = 0.0, frame = 3.0
/* end of motion variables */

/* start of material definitions */
var mat_specular =
[0.628281, 0.555802, 0.366065, 1.0];
var mat_ambient =
[0.24725, 0.1995, 0.0745, 1.0];
var mat_diffuse =
[0.75164, 0.60648, 0.22648, 1.0];
var mat_shininess =
[128.0 * 0.4];

var mat_specular2 =
[0.508273, 0.508273, 0.508373, 1.0];
var mat_ambient2 =
[0.19225, 0.19225, 0.19225, 1.0];
var mat_diffuse2 =
[0.50754, 0.50754, 0.50754, 1.0];
var mat_shininess2 =
[128.0 * 0.6];

var mat_specular3 =
[0.296648, 0.296648, 0.296648, 1.0];
var mat_ambient3 =
[0.25, 0.20725, 0.20725, 1.0];
var mat_diffuse3 =
[1, 0.829, 0.829, 1.0];
var mat_shininess3 =
[128.0 * 0.088];

var mat_specular4 =
[0.633, 0.727811, 0.633, 1.0];
var mat_ambient4 =
[0.0215, 0.1745, 0.0215, 1.0];
var mat_diffuse4 =
[0.07568, 0.61424, 0.07568, 1.0];
var mat_shininess4 =
[128 * 0.6];

var mat_specular5 =
[0.60, 0.60, 0.50, 1.0];
var mat_ambient5 =
[0.0, 0.0, 0.0, 1.0];
var mat_diffuse5 =
[0.5, 0.5, 0.0, 1.0];
var mat_shininess5 =
[128.0 * 0.25];
/* end of material definitions */

/* start of the body motion functions */

function Heel1Add()
{
  heel1 = (heel1 + HEEL_RATE) % 360;
}


function Heel1Subtract()
{
  heel1 = (heel1 - HEEL_RATE) % 360;
}


function Heel2Add()
{
  heel2 = (heel2 + HEEL_RATE) % 360;
}


function Heel2Subtract()
{
  heel2 = (heel2 - HEEL_RATE) % 360;
}


function Ankle1Add()
{
  ankle1 = (ankle1 + ANKLE_RATE) % 360;
}


function Ankle1Subtract()
{
  ankle1 = (ankle1 - ANKLE_RATE) % 360;
}


function Ankle2Add()
{
  ankle2 = (ankle2 + ANKLE_RATE) % 360;
}


function Ankle2Subtract()
{
  ankle2 = (ankle2 - ANKLE_RATE) % 360;
}


function RotateAdd()
{
  pivot = (pivot + ROTATE_RATE) % 360;
}


function RotateSubtract()
{
  pivot = (pivot - ROTATE_RATE) % 360;
}


function MechTiltSubtract()
{
  tilt = (tilt - TILT_RATE) % 360;
}


function MechTiltAdd()
{
  tilt = (tilt + TILT_RATE) % 360;
}


function elbow1Add()
{
  elbow1 = (elbow1 + ELBOW_RATE) % 360;
}


function elbow1Subtract()
{
  elbow1 = (elbow1 - ELBOW_RATE) % 360;
}


function elbow2Add()
{
  elbow2 = (elbow2 + ELBOW_RATE) % 360;
}


function elbow2Subtract()
{
  elbow2 = (elbow2 - ELBOW_RATE) % 360;
}


function shoulder1Add()
{
  shoulder1 = (shoulder1 + SHOULDER_RATE) % 360;
}


function shoulder1Subtract()
{
  shoulder1 = (shoulder1 - SHOULDER_RATE) % 360;
}


function shoulder2Add()
{
  shoulder2 = (shoulder2 + SHOULDER_RATE) % 360;
}


function shoulder2Subtract()
{
  shoulder2 = (shoulder2 - SHOULDER_RATE) % 360;
}


function shoulder3Add()
{
  shoulder3 = (shoulder3 + SHOULDER_RATE) % 360;
}


function shoulder3Subtract()
{
  shoulder3 = (shoulder3 - SHOULDER_RATE) % 360;
}


function shoulder4Add()
{
  shoulder4 = (shoulder4 + SHOULDER_RATE) % 360;
}


function shoulder4Subtract()
{
  shoulder4 = (shoulder4 - SHOULDER_RATE) % 360;
}


function lat1Raise()
{
  lat1 = (lat1 + LAT_RATE) % 360;
}


function lat1Lower()
{
  lat1 = (lat1 - LAT_RATE) % 360;
}


function lat2Raise()
{
  lat2 = (lat2 + LAT_RATE) % 360;
}


function lat2Lower()
{
  lat2 = (lat2 - LAT_RATE) % 360;
}


function FireCannon()
{
  fire = (fire + CANNON_RATE) % 360;
}


function RaiseLeg1Forward()
{
  hip11 = (hip11 + UPPER_LEG_RATE) % 360;
}


function LowerLeg1Backwards()
{
  hip11 = (hip11 - UPPER_LEG_RATE) % 360;
}


function RaiseLeg1Outwards()
{
  hip12 = (hip12 + UPPER_LEG_RATE_GROIN) % 360;
}


function LowerLeg1Inwards()
{
  hip12 = (hip12 - UPPER_LEG_RATE_GROIN) % 360;
}


function RaiseLeg2Forward()
{
  hip21 = (hip21 + UPPER_LEG_RATE) % 360;
}


function LowerLeg2Backwards()
{
  hip21 = (hip21 - UPPER_LEG_RATE) % 360;
}


function RaiseLeg2Outwards()
{
  hip22 = (hip22 + UPPER_LEG_RATE_GROIN) % 360;
}


function LowerLeg2Inwards()
{
  hip22 = (hip22 - UPPER_LEG_RATE_GROIN) % 360;
}

/* end of body motion functions */

/* start of light source position functions */

function TurnRight()
{
  turn = (turn - VIEW_TURN_RATE) % 360;
}


function TurnLeft()
{
  turn = (turn + VIEW_TURN_RATE) % 360;
}


function TurnForwards()
{
  turn1 = (turn1 - VIEW_TURN_RATE) % 360;
}


function TurnBackwards()
{
  turn1 = (turn1 + VIEW_TURN_RATE) % 360;
}


function LightTurnRight()
{
  lightturn = (lightturn + LIGHT_TURN_RATE) % 360;
}


function LightTurnLeft()
{
  lightturn = (lightturn - LIGHT_TURN_RATE) % 360;
}


function LightForwards()
{
  lightturn1 = (lightturn1 + LIGHT_TURN_RATE) % 360;
}


function LightBackwards()
{
  lightturn1 = (lightturn1 - LIGHT_TURN_RATE) % 360;
}

/* end of light source position functions */

/* start of geometric shape functions */

function Box(gl, width, height, depth, solid)
{
  var i, j = 0;
  var x = width / 2.0, y = height / 2.0, z = depth / 2.0;

  for (i = 0; i < 4; i++) {
    gl.rotatef(90.0, 0.0, 0.0, 1.0);
    if (j) {
      if (!solid)
        gl.begin(gl.LINE_LOOP);
      else
        gl.begin(gl.QUADS);
      gl.normal3f(-1.0, 0.0, 0.0);
      gl.vertex3f(-x, y, z);
      gl.vertex3f(-x, -y, z);
      gl.vertex3f(-x, -y, -z);
      gl.vertex3f(-x, y, -z);
      gl.end();
      if (solid) {
        gl.begin(gl.TRIANGLES);
        gl.normal3f(0.0, 0.0, 1.0);
        gl.vertex3f(0.0, 0.0, z);
        gl.vertex3f(-x, y, z);
        gl.vertex3f(-x, -y, z);
        gl.normal3f(0.0, 0.0, -1.0);
        gl.vertex3f(0.0, 0.0, -z);
        gl.vertex3f(-x, -y, -z);
        gl.vertex3f(-x, y, -z);
        gl.end();
      }
      j = 0;
    } else {
      if (!solid)
        gl.begin(gl.LINE_LOOP);
      else
        gl.begin(gl.QUADS);
      gl.normal3f(-1.0, 0.0, 0.0);
      gl.vertex3f(-y, x, z);
      gl.vertex3f(-y, -x, z);
      gl.vertex3f(-y, -x, -z);
      gl.vertex3f(-y, x, -z);
      gl.end();
      if (solid) {
        gl.begin(gl.TRIANGLES);
        gl.normal3f(0.0, 0.0, 1.0);
        gl.vertex3f(0.0, 0.0, z);
        gl.vertex3f(-y, x, z);
        gl.vertex3f(-y, -x, z);
        gl.normal3f(0.0, 0.0, -1.0);
        gl.vertex3f(0.0, 0.0, -z);
        gl.vertex3f(-y, -x, -z);
        gl.vertex3f(-y, x, -z);
        gl.end();
      }
      j = 1;
    }
  }
}


function Octagon(gl, side, height, solid)
{
  var j;
  var x = Math.sin(0.785398163) * side, y = side / 2.0, z = height / 2.0, c;

  c = x + y;
  for (j = 0; j < 8; j++) {
    gl.translatef(-c, 0.0, 0.0);
    if (!solid)
      gl.begin(gl.LINE_LOOP);
    else
      gl.begin(gl.QUADS);
    gl.normal3f(-1.0, 0.0, 0.0);
    gl.vertex3f(0.0, -y, z);
    gl.vertex3f(0.0, y, z);
    gl.vertex3f(0.0, y, -z);
    gl.vertex3f(0.0, -y, -z);
    gl.end();
    gl.translatef(c, 0.0, 0.0);
    if (solid) {
      gl.begin(gl.TRIANGLES);
      gl.normal3f(0.0, 0.0, 1.0);
      gl.vertex3f(0.0, 0.0, z);
      gl.vertex3f(-c, -y, z);
      gl.vertex3f(-c, y, z);
      gl.normal3f(0.0, 0.0, -1.0);
      gl.vertex3f(0.0, 0.0, -z);
      gl.vertex3f(-c, y, -z);
      gl.vertex3f(-c, -y, -z);
      gl.end();
    }
    gl.rotatef(45.0, 0.0, 0.0, 1.0);
  }
}

/* end of geometric shape functions */


function SetMaterial(gl, spec, amb, diff, shin)
{

  gl.materialfv(gl.FRONT, gl.SPECULAR, spec);
  gl.materialfv(gl.FRONT, gl.SHININESS, shin);
  gl.materialfv(gl.FRONT, gl.AMBIENT, amb);
  gl.materialfv(gl.FRONT, gl.DIFFUSE, diff);
}


function MechTorso(gl, solid)
{
  gl.newList(SOLID_MECH_TORSO, gl.COMPILE);
  SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
  gl.color3f(1.0, 1.0, 0.0);
  Box(gl, 1.0, 1.0, 3.0, solid);
  gl.translatef(0.75, 0.0, 0.0);
  SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
  gl.color3f(0.5, 0.5, 0.5);
  Box(gl, 0.5, 0.6, 2.0, solid);
  gl.translatef(-1.5, 0.0, 0.0);
  Box(gl, 0.5, 0.6, 2.0, solid);
  gl.translatef(0.75, 0.0, 0.0);
  gl.endList();
}


function MechHip(gl, solid)
{
  gl.newList(SOLID_MECH_HIP, gl.COMPILE);
  SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
  gl.color3f(1.0, 1.0, 0.0);
  Octagon(gl, 0.7, 0.5, solid);
  for (var i = 0; i < 2; i++) {
    if (i)
      gl.scalef(-1.0, 1.0, 1.0);
    gl.translatef(1.0, 0.0, 0.0);
    SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
    gl.color3f(0.5, 0.5, 0.5);
    sphere(gl, 0.2, 6, 6);
    gl.translatef(-1.0, 0.0, 0.0);
  }
  gl.scalef(-1.0, 1.0, 1.0);
  gl.endList();
}


function Shoulder(gl, solid)
{
  gl.newList(SOLID_MECH_SHOULDER, gl.COMPILE);
  SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
  gl.color3f(1.0, 1.0, 0.0);
  Box(gl, 1.0, 0.5, 0.5, solid);
  gl.translatef(0.9, 0.0, 0.0);
  SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
  gl.color3f(0.5, 0.5, 0.5);
  sphere(gl, 0.6, 10, 10);
  gl.translatef(-0.9, 0.0, 0.0);
  gl.endList();
}


function UpperArm(gl, solid)
{
  gl.newList(SOLID_MECH_UPPER_ARM, gl.COMPILE);
  SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
  gl.color3f(1.0, 1.0, 0.0);
  Box(gl, 1.0, 2.0, 1.0, solid);
  gl.translatef(0.0, -0.95, 0.0);
  gl.rotatef(90.0, 1.0, 0.0, 0.0);
  SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
  gl.color3f(0.5, 0.5, 0.5);
  cylinder(gl, 0.4, 0.4, 1.5, 6, 3);
  SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
  gl.color3f(1.0, 1.0, 0.0);
  gl.rotatef(-90.0, 1.0, 0.0, 0.0);
  gl.translatef(-0.4, -1.85, 0.0);
  gl.rotatef(90.0, 0.0, 1.0, 0.0);
  for (var i = 0; i < 2; i++) {
    if (i)
      cylinder(gl, 0.5, 0.5, 0.8, 6, 3);
    else
      cylinder(gl, 0.2, 0.2, 0.8, 6, 3);
  }
  for (var i = 0; i < 2; i++) {
    if (i)
      gl.scalef(-1.0, 1.0, 1.0);
    if (i)
      gl.translatef(0.0, 0.0, 0.8);
    disk(gl, 0.2, 0.5, 6, 5);
    if (i)
      gl.translatef(0.0, 0.0, -0.8);
  }
  gl.scalef(-1.0, 1.0, 1.0);
  gl.rotatef(-90.0, 0.0, 1.0, 0.0);
  gl.translatef(0.4, 2.9, 0.0);
  gl.endList();
}


function VulcanGun(gl, solid)
{
  gl.newList(SOLID_MECH_VULCAN, gl.COMPILE);

  SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
  gl.color3f(0.5, 0.5, 0.5);

  cylinder(gl, 0.5, 0.5, 0.5, 6, 3);
  gl.translatef(0.0, 0.0, 0.5);
  disk(gl, 0.0, 0.5, 6, 5);

  for (var i = 0; i < 5; i++) {
    gl.rotatef(72.0, 0.0, 0.0, 1.0);
    gl.translatef(0.0, 0.3, 0.0);
    cylinder(gl, 0.15, 0.15, 2.0, 6, 3);
    cylinder(gl, 0.06, 0.06, 2.0, 6, 3);
    gl.translatef(0.0, 0.0, 2.0);
    disk(gl, 0.1, 0.15, 6, 5);
    cylinder(gl, 0.1, 0.1, 0.1, 6, 3);
    gl.translatef(0.0, 0.0, 0.1);
    disk(gl, 0.06, 0.1, 6, 5);
    gl.translatef(0.0, -0.3, -2.1);
  }
  gl.endList();
}


function ForeArm(gl, solid)
{
  gl.newList(SOLID_MECH_FOREARM, gl.COMPILE);
  SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
  gl.color3f(1.0, 1.0, 0.0);
  for (var i = 0; i < 5; i++) {
    gl.translatef(0.0, -0.1, -0.15);
    Box(gl, 0.6, 0.8, 0.2, solid);
    gl.translatef(0.0, 0.1, -0.15);
    Box(gl, 0.4, 0.6, 0.1, solid);
  }
  gl.translatef(0.0, 0.0, 2.45);
  Box(gl, 1.0, 1.0, 2.0, solid);
  gl.translatef(0.0, 0.0, -1.0);
  gl.endList();
}


function UpperLeg(gl, solid)
{
  gl.newList(SOLID_MECH_UPPER_LEG, gl.COMPILE);
  SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
  gl.color3f(1.0, 1.0, 0.0);
  gl.translatef(0.0, -1.0, 0.0);
  Box(gl, 0.4, 1.0, 0.7, solid);
  gl.translatef(0.0, -0.65, 0.0);
  for (var i = 0; i < 5; i++) {
    Box(gl, 1.2, 0.3, 1.2, solid);
    gl.translatef(0.0, -0.2, 0.0);
    Box(gl, 1.0, 0.1, 1.0, solid);
    gl.translatef(0.0, -0.2, 0.0);
  }
  gl.translatef(0.0, -0.15, -0.4);
  Box(gl, 2.0, 0.5, 2.0, solid);
  gl.translatef(0.0, -0.3, -0.2);
  gl.rotatef(90.0, 1.0, 0.0, 0.0);
  SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
  gl.color3f(0.5, 0.5, 0.5);
  cylinder(gl, 0.6, 0.6, 3.0, 6, 3);
  SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
  gl.color3f(1.0, 1.0, 0.0);
  gl.rotatef(-90.0, 1.0, 0.0, 0.0);
  gl.translatef(0.0, -1.5, 1.0);
  Box(gl, 1.5, 3.0, 0.5, solid);
  gl.translatef(0.0, -1.75, -0.8);
  Box(gl, 2.0, 0.5, 2.0, solid);
  gl.translatef(0.0, -0.9, -0.85);
  SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
  gl.color3f(0.5, 0.5, 0.5);
  cylinder(gl, 0.8, 0.8, 1.8, 6, 3);
  for (var i = 0; i < 2; i++) {
    if (i)
      gl.scalef(-1.0, 1.0, 1.0);
    if (i)
      gl.translatef(0.0, 0.0, 1.8);
    disk(gl, 0.0, 0.8, 6, 5);
    if (i)
      gl.translatef(0.0, 0.0, -1.8);
  }
  gl.scalef(-1.0, 1.0, 1.0);
  gl.endList();
}


function Foot(gl, solid)
{

  gl.newList(SOLID_MECH_FOOT, gl.COMPILE);
  SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
  gl.color3f(0.5, 0.5, 0.5);
  gl.rotatef(90.0, 1.0, 0.0, 0.0);
  Octagon(gl, 1.5, 0.6, solid);
  gl.rotatef(-90.0, 1.0, 0.0, 0.0);
  gl.endList();
}


function LowerLeg(gl, solid)
{
  SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
  gl.color3f(1.0, 1.0, 0.0);
  for (var k = 0.0; k < 2.0; k++) {
    for (var l = 0.0; l < 2.0; l++) {
      gl.pushMatrix();
      gl.translatef(k, 0.0, l);
      SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
      gl.color3f(1.0, 1.0, 0.0);
      Box(gl, 1.0, 0.5, 1.0, solid);
      gl.translatef(0.0, -0.45, 0.0);
      SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
      gl.color3f(0.5, 0.5, 0.5);
      sphere(gl, 0.2, 6, 6); 
      if (leg)
        gl.rotatef(heel1, 1.0, 0.0, 0.0);
      else
        gl.rotatef(heel2, 1.0, 0.0, 0.0);
      /* gl.translatef(0.0, -0.2, 0.0); */
      gl.translatef(0.0, -1.7, 0.0);
      SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
      gl.color3f(1.0, 1.0, 0.0);
      Box(gl, 0.25, 3.0, 0.25, solid);
      gl.translatef(0.0, -1.7, 0.0);
      SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
      gl.color3f(0.5, 0.5, 0.5);
      sphere(gl, 0.2, 6, 6);
      if (leg)
        gl.rotatef(-heel1, 1.0, 0.0, 0.0);
      else
        gl.rotatef(-heel2, 1.0, 0.0, 0.0);
      gl.translatef(0.0, -0.45, 0.0);
      SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
      gl.color3f(1.0, 1.0, 0.0);
      Box(gl, 1.0, 0.5, 1.0, solid);
      if (!k && !l) {
        gl.translatef(-0.4, -0.8, 0.5);
        if (leg)
          gl.rotatef(ankle1, 1.0, 0.0, 0.0);
        else
          gl.rotatef(ankle2, 1.0, 0.0, 0.0);
        gl.rotatef(90.0, 0.0, 1.0, 0.0);
        cylinder(gl, 0.8, 0.8, 1.8, 6, 3);
        for (var j = 0; j < 2; j++) {
          if (j) {
            gl.scalef(-1.0, 1.0, 1.0);
            gl.translatef(0.0, 0.0, 1.8);
          }
          disk(gl, 0.0, 0.8, 6, 5);
          if (j)
            gl.translatef(0.0, 0.0, -1.8);
        }
        gl.scalef(-1.0, 1.0, 1.0);
        gl.rotatef(-90.0, 0.0, 1.0, 0.0);
        gl.translatef(0.95, -0.8, 0.0);
        gl.callList(SOLID_MECH_FOOT);
      }
      gl.popMatrix();
    }
  }
}


function RocketPod(gl, solid)
{

  var k = 0;

  gl.newList(SOLID_MECH_ROCKET, gl.COMPILE);
  SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
  gl.color3f(0.5, 0.5, 0.5);
  gl.scalef(0.4, 0.4, 0.4);
  gl.rotatef(45.0, 0.0, 0.0, 1.0);
  gl.translatef(1.0, 0.0, 0.0);
  Box(gl, 2.0, 0.5, 3.0, solid);
  gl.translatef(1.0, 0.0, 0.0);
  gl.rotatef(45.0, 0.0, 0.0, 1.0);
  gl.translatef(0.5, 0.0, 0.0);
  Box(gl, 1.2, 0.5, 3.0, solid);
  gl.translatef(2.1, 0.0, 0.0);
  gl.rotatef(-90.0, 0.0, 0.0, 1.0);
  SetMaterial(gl, mat_specular, mat_ambient, mat_diffuse, mat_shininess);
  gl.color3f(1.0, 1.0, 0.0);
  Box(gl, 2.0, 3.0, 4.0, solid);
  gl.translatef(-0.5, -1.0, 1.3);
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
      gl.translatef(i, j, 0.6);
      SetMaterial(gl, mat_specular3, mat_ambient3, mat_diffuse3, mat_shininess3);
      gl.color3f(1.0, 1.0, 1.0);
      cylinder(gl, 0.4, 0.4, 0.3, 6, 3);
      gl.translatef(0.0, 0.0, 0.3);
      SetMaterial(gl, mat_specular4, mat_ambient4, mat_diffuse4, mat_shininess4);
      gl.color3f(0.0, 1.0, 0.0);
      cylinder(gl, 0.4, 0.0, 0.5, 6, 3);
      k++;
      gl.translatef(-i, -j, -0.9);
    }
  }
  gl.endList();
}


function Enviro(gl, solid)
{
  gl.newList(SOLID_ENVIRO, gl.COMPILE);
  SetMaterial(gl, mat_specular4, mat_ambient4, mat_diffuse4, mat_shininess4);
  gl.color3f(0.0, 1.0, 0.0);
  Box(gl, 20.0, 0.5, 30.0, solid);

  SetMaterial(gl, mat_specular4, mat_ambient3, mat_diffuse2, mat_shininess);
  gl.color3f(0.6, 0.6, 0.6);
  gl.translatef(0.0, 0.0, -10.0);
  for (var j = 0; j < 6; j++) {
    for (var i = 0; i < 2; i++) {
      if (i)
        gl.scalef(-1.0, 1.0, 1.0);
      gl.translatef(10.0, 4.0, 0.0);
      Box(gl, 4.0, 8.0, 2.0, solid);
      gl.translatef(0.0, -1.0, -3.0);
      Box(gl, 4.0, 6.0, 2.0, solid);
      gl.translatef(-10.0, -3.0, 3.0);
    }
    gl.scalef(-1.0, 1.0, 1.0);
    gl.translatef(0.0, 0.0, 5.0);
  }

  gl.endList();
}


function Toggle()
{
  if (solid_part)
    solid_part = 0;
  else
    solid_part = 1;
}


function Disable(gl)
{
  gl.disable(gl.LIGHTING);
  gl.disable(gl.DEPTH_TEST);
  gl.disable(gl.NORMALIZE);
  gl.polygonMode(gl.FRONT_AND_BACK, gl.LINE);
}


function Lighting(gl)
{
  var position =
  [0.0, 0.0, 2.0, 1.0];

  gl.rotatef(lightturn1, 1.0, 0.0, 0.0);
  gl.rotatef(lightturn, 0.0, 1.0, 0.0);
  gl.rotatef(0.0, 1.0, 0.0, 0.0);
  gl.enable(gl.LIGHTING);
  gl.enable(gl.LIGHT0);
  gl.enable(gl.NORMALIZE);
  /* gl.enable(gl.FLAT); */
  gl.polygonMode(gl.FRONT_AND_BACK, gl.FILL);

  gl.lightfv(gl.LIGHT0, gl.POSITION, position);
  gl.lightf(gl.LIGHT0, gl.SPOT_CUTOFF, 80.0);

  gl.translatef(0.0, 0.0, 2.0);
  gl.disable(gl.LIGHTING);
  Box(gl, 0.1, 0.1, 0.1, 0);
  gl.enable(gl.LIGHTING);
  /* gl.enable(gl.CULL_FACE); */
}


function DrawMech(gl)
{
  gl.scalef(0.5, 0.5, 0.5);
  gl.pushMatrix();
  gl.translatef(0.0, -0.75, 0.0);
  gl.rotatef(tilt, 1.0, 0.0, 0.0);

  gl.rotatef(90.0, 1.0, 0.0, 0.0);
  gl.callList(SOLID_MECH_HIP);
  gl.rotatef(-90.0, 1.0, 0.0, 0.0);

  gl.translatef(0.0, 0.75, 0.0);
  gl.pushMatrix();
  gl.rotatef(pivot, 0.0, 1.0, 0.0);
  gl.pushMatrix();
  gl.callList(SOLID_MECH_TORSO);
  gl.popMatrix();
  gl.pushMatrix();
  gl.translatef(0.5, 0.5, 0.0);
  gl.callList(SOLID_MECH_ROCKET);
  gl.popMatrix();
  for (var i = 0; i < 2; i++) {
    gl.pushMatrix();
    if (i)
      gl.scalef(-1.0, 1.0, 1.0);
    gl.translatef(1.5, 0.0, 0.0);
    gl.callList(SOLID_MECH_SHOULDER);
    gl.translatef(0.9, 0.0, 0.0);
    if (i) {
      gl.rotatef(lat1, 0.0, 0.0, 1.0);
      gl.rotatef(shoulder1, 1.0, 0.0, 0.0);
      gl.rotatef(shoulder3, 0.0, 1.0, 0.0);
    } else {
      gl.rotatef(lat2, 0.0, 0.0, 1.0);
      gl.rotatef(shoulder2, 1.0, 0.0, 0.0);
      gl.rotatef(shoulder4, 0.0, 1.0, 0.0);
    }
    gl.translatef(0.0, -1.4, 0.0);
    gl.callList(SOLID_MECH_UPPER_ARM);
    gl.translatef(0.0, -2.9, 0.0);
    if (i)
      gl.rotatef(elbow1, 1.0, 0.0, 0.0);
    else
      gl.rotatef(elbow2, 1.0, 0.0, 0.0);
    gl.translatef(0.0, -0.9, -0.2);
    gl.callList(SOLID_MECH_FOREARM);
    gl.pushMatrix();
    gl.translatef(0.0, 0.0, 2.0);
    gl.rotatef(fire, 0.0, 0.0, 1.0);
    gl.callList(SOLID_MECH_VULCAN);
    gl.popMatrix();
    gl.popMatrix();
  }
  gl.popMatrix();

  gl.popMatrix();

  for (var j = 0; j < 2; j++) {
    gl.pushMatrix();
    if (j) {
      gl.scalef(-0.5, 0.5, 0.5);
      leg = 1;
    } else {
      gl.scalef(0.5, 0.5, 0.5);
      leg = 0;
    }
    gl.translatef(2.0, -1.5, 0.0);
    if (j) {
      gl.rotatef(hip11, 1.0, 0.0, 0.0);
      gl.rotatef(hip12, 0.0, 0.0, 1.0);
    } else {
      gl.rotatef(hip21, 1.0, 0.0, 0.0);
      gl.rotatef(hip22, 0.0, 0.0, 1.0);
    }
    gl.translatef(0.0, 0.3, 0.0);
    gl.pushMatrix();
    gl.callList(SOLID_MECH_UPPER_LEG);
    gl.popMatrix();
    gl.translatef(0.0, -8.3, -0.4);
    if (j)
      gl.rotatef(- hip12, 0.0, 0.0, 1.0);
    else
      gl.rotatef(- hip22, 0.0, 0.0, 1.0);
    gl.translatef(-0.5, -0.85, -0.5);
    LowerLeg(gl, 1);
    gl.popMatrix();
  }
}


function display(gl)
{
  gl.clearColor(0.0, 0.0, 0.0, 0.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);

  gl.pushMatrix();
  gl.rotatef(turn, 0.0, 1.0, 0.0);
  gl.rotatef(turn1, 1.0, 0.0, 0.0);
  if (solid_part) {
    gl.pushMatrix();
    Lighting(gl);
    gl.popMatrix();
  } else
    Disable(gl);
  gl.pushMatrix();
  gl.translatef(0.0, elevation, 0.0);
  DrawMech(gl);
  gl.popMatrix();
  gl.pushMatrix();
  if (distance >= 20.136)
    distance = 0.0;
  gl.translatef(0.0, -5.0, -distance);
  gl.callList(SOLID_ENVIRO);
  gl.translatef(0.0, 0.0, 10.0);
  gl.callList(SOLID_ENVIRO);
  gl.popMatrix();
  gl.popMatrix();

  gl.flush();
  gl.swapBuffers();
}


function init(gl)
{
  var i = 1;

  SetMaterial(gl, mat_specular2, mat_ambient2, mat_diffuse2, mat_shininess2);
  gl.enable(gl.DEPTH_TEST);
  MechTorso(gl, i);
  MechHip(gl, i);
  Shoulder(gl, i);
  RocketPod(gl, i);
  UpperArm(gl, i);
  ForeArm(gl, i);
  UpperLeg(gl, i);
  Foot(gl, i);
  VulcanGun(gl, i);
  Enviro(gl, i);
}


function reshape(gl, w, h)
{
  gl.viewport(0, 0, w, h);
  gl.matrixMode(gl.PROJECTION);
  gl.loadIdentity();
  perspective(gl, 65.0, w / h, 1.0, 20.0);
  gl.matrixMode(gl.MODELVIEW);
  gl.loadIdentity();
  gl.translatef(0.0, 1.2, -5.5);  /* viewing transform  */
}


var step = 0;
function animation_walk()
{
  var angle;

  if (step == 0 || step == 2) {
    /* for(frame=3.0; frame<=21.0; frame=frame+3.0){ */
    if (frame >= 0.0 && frame <= 21.0) {
      if (frame == 0.0)
        frame = 3.0;
      angle = (180 / Math.PI) * (Math.acos(((Math.cos((Math.PI / 180) * frame) * 2.043) + 1.1625) / 3.2059));
      if (frame > 0) {
        elevation = -(3.2055 - (Math.cos((Math.PI / 180) * angle) * 3.2055));
      } else
        elevation = 0.0;
      if (step == 0) {
        hip11 = -(frame * 1.7);
        if (1.7 * frame > 15)
          heel1 = frame * 1.7;
        heel2 = 0;
        ankle1 = frame * 1.7;
        if (frame > 0)
          hip21 = angle;
        else
          hip21 = 0;
        ankle2 = -hip21;
        shoulder1 = frame * 1.5;
        shoulder2 = -frame * 1.5;
        elbow1 = frame;
        elbow2 = -frame;
      } else {
        hip21 = -(frame * 1.7);
        if (1.7 * frame > 15)
          heel2 = frame * 1.7;
        heel1 = 0;
        ankle2 = frame * 1.7;
        if (frame > 0)
          hip11 = angle;
        else
          hip11 = 0;
        ankle1 = -hip11;
        shoulder1 = -frame * 1.5;
        shoulder2 = frame * 1.5;
        elbow1 = -frame;
        elbow2 = frame;
      }
      if (frame == 21)
        step++;
      if (frame < 21)
        frame = frame + 3.0;
    }
  }
  if (step == 1 || step == 3) {
    /* for(x=21.0; x>=0.0; x=x-3.0){ */
    if (frame <= 21.0 && frame >= 0.0) {
      angle = (180 / Math.PI) * (Math.acos(((Math.cos((Math.PI / 180) * frame) * 2.043) + 1.1625) / 3.2029));
      if (frame > 0)
        elevation = -(3.2055 - (Math.cos((Math.PI / 180) * angle) * 3.2055));
      else
        elevation = 0.0;
      if (step == 1) {
        elbow2 = hip11 = -frame;
        elbow1 = heel1 = frame;
        heel2 = 15;
        ankle1 = frame;
        if (frame > 0)
          hip21 = angle;
        else
          hip21 = 0;
        ankle2 = -hip21;
        shoulder1 = 1.5 * frame;
        shoulder2 = -frame * 1.5;
      } else {
        elbow1 = hip21 = -frame;
        elbow2 = heel2 = frame;
        heel1 = 15;
        ankle2 = frame;
        if (frame > 0)
          hip11 = angle;
        else
          hip11 = 0;
        ankle1 = -hip11;
        shoulder1 = -frame * 1.5;
        shoulder2 = frame * 1.5;
      }
      if (frame == 0.0)
        step++;
      if (frame > 0)
        frame = frame - 3.0;
    }
  }
  if (step == 4)
    step = 0;
  distance += 0.1678;
}


function animation()
{
  animation_walk();
}

function keydown(key)
{

  var i = 0;

  switch (key) {
    /* start arm control functions */
  case 'q':{
      shoulder2Subtract();
      i++;
    }
    break;
  case 'a':{
      shoulder2Add();
      i++;
    }
    break;
  case 'w':{
      shoulder1Subtract();
      i++;
    }
    break;
  case 's':{
      shoulder1Add();
      i++;
    }
    break;
  case '2':{
      shoulder3Add();
      i++;
    }
    break;
  case '1':{
      shoulder4Add();
      i++;
    }
    break;
  case '4':{
      shoulder3Subtract();
      i++;
    }
    break;
  case '3':{
      shoulder4Subtract();
      i++;
    }
    break;

  case 'z':{
      lat2Raise();
      i++;
    }
    break;
  case 'Z':{
      lat2Lower();
      i++;
    }
    break;
  case 'x':{
      lat1Raise();
      i++;
    }
    break;
  case 'X':{
      lat1Lower();
      i++;
    }
    break;

  case 'A':{
      elbow2Add();
      i++;
    }
    break;
  case 'Q':{
      elbow2Subtract();
      i++;
    }
    break;
  case 'S':{
      elbow1Add();
      i++;
    }
    break;
  case 'W':{
      elbow1Subtract();
      i++;
    }
    break;
    /* end of arm control functions */

    /* start of torso control functions */
  case 'd':{
      RotateAdd();
      i++;
    }
    break;
  case 'g':{
      RotateSubtract();
      i++;
    }
    break;
  case 'r':{
      MechTiltAdd();
      i++;
    }
    break;
  case 'f':{
      MechTiltSubtract();
      i++;
    }
    break;
    /* end of torso control functions */

    /* start of leg control functions */
  case 'h':{
      RaiseLeg2Forward();
      i++;
    }
    break;
  case 'y':{
      LowerLeg2Backwards();
      i++;
    }
    break;
  case 'Y':{
      RaiseLeg2Outwards();
      i++;
    }
    break;
  case 'H':{
      LowerLeg2Inwards();
      i++;
    }
    break;

  case 'j':{
      RaiseLeg1Forward();
      i++;
    }
    break;
  case 'u':{
      LowerLeg1Backwards();
      i++;
    }
    break;
  case 'U':{
      RaiseLeg1Outwards();
      i++;
    }
    break;
  case 'J':{
      LowerLeg1Inwards();
      i++;
    }
    break;

  case 'N':{
      Heel2Add();
      i++;
    }
    break;
  case 'n':{
      Heel2Subtract();
      i++;
    }
    break;
  case 'M':{
      Heel1Add();
      i++;
    }
    break;
  case 'm':{
      Heel1Subtract();
      i++;
    }
    break;

  case 'k':{
      Ankle2Add();
      i++;
    }
    break;
  case 'K':{
      Ankle2Subtract();
      i++;
    }
    break;
  case 'l':{
      Ankle1Add();
      i++;
    }
    break;
  case 'L':{
      Ankle1Subtract();
      i++;
    }
    break;
    /* end of leg control functions */

    /* start of light source position functions */
  case 'p':{
      LightTurnRight();
      i++;
    }
    break;
  case 'i':{
      LightTurnLeft();
      i++;
    }
    break;
  case 'o':{
      LightForwards();
      i++;
    }
    break;
  case '9':{
      LightBackwards();
      i++;
    }
    break;
    /* end of light source position functions */

    /* start of misc functions */
  case 't':
    Toggle();
    break;

  case 37:
      TurnLeft();
      break;
  case 39:
      TurnRight();
      break;
  case 38:
      TurnBackwards();
      break;
  case 40:
      TurnForwards();
      break;
      
  case 32:
      FireCannon();
  }
  return 0;
}

function printHelp()
{
  console.info("at the shoulders:");
  console.info("forward       : q,w");
  console.info("backwards     : a,s");
  console.info("outwards      : z,x");
  console.info("inwards       : Z,X");
/*
  console.info("upwards       : Q,W");
  console.info("downwards     : A,S");
  console.info("outwards      : 1,2");
  console.info("inwards       : 3,4");

  console.info("forward       : y,u");
  console.info("backwards     : h.j");
  console.info("outwards      : Y,U");
  console.info("inwards       : H,J");

  console.info("forward       : n,m");
  console.info("backwards     : N,M");

  console.info("forward       : n,m");
  console.info("backwards     : N,M");

  console.info("toes up       : K,L");
  console.info("toes down     : k,l");
*/
  console.info("rotate camera around:");
  console.info("right         : right arrow");
  console.info("left          : left arrow");
  console.info("down          : up arrow");
  console.info("up            : down arrow");
/*
  console.info("right         : p");
  console.info("left          : i");
  console.info("up            : 9");
  console.info("down          : o");

  console.info("turn left     : d");
  console.info("turn right    : g");

  console.info("tilt backwards : f");
  console.info("tilt forwards  : r");
*/
  console.info("toggle wireframe:");
  console.info("toggle        : t");
}

function idle(gl)
{
    /* animate the mech */
    animation();

    /* draw the Mech */
    display(gl);
}


function handle_keydown() {
	document.addEventListener('keydown', function(evt) {
		var keyCode = evt.keyCode;
		if (keyCode >= 65 && keyCode <= 90)
		{
			if (!evt.shiftKey)
				keyCode += 32;
			keydown(String.fromCharCode(keyCode));
		}
		else
			keydown(evt.keyCode);
	});
}


function loop(gl, fps)
{
	tick(gl, fps);
}


function tick(gl, fps)
{
	stats.begin();
	idle(gl);
	stats.end();

	setTimeout(function(){
		tick(gl, fps);
	}, 1000.0 / 30);
}


function mech_main(canvas, fps)
{
  var gl = canvas.getContext('experimental-tinygl');
  
  printHelp();
  handle_keydown();

  setTimeout(Toggle, 6000);

  init(gl);
  reshape(gl, canvas.width, canvas.height);

  loop(gl, fps);  
}
