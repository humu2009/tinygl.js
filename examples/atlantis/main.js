/**
 * (c) Copyright 1993, 1994, Silicon Graphics, Inc.
 * ALL RIGHTS RESERVED
 * Permission to use, copy, modify, and distribute this software for
 * any purpose and without fee is hereby granted, provided that the above
 * copyright notice appear in all copies and that both the copyright notice
 * and this permission notice appear in supporting documentation, and that
 * the name of Silicon Graphics, Inc. not be used in advertising
 * or publicity pertaining to distribution of the software without specific,
 * written prior permission.
 *
 * THE MATERIAL EMBODIED ON THIS SOFTWARE IS PROVIDED TO YOU "AS-IS"
 * AND WITHOUT WARRANTY OF ANY KIND, EXPRESS, IMPLIED OR OTHERWISE,
 * INCLUDING WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY OR
 * FITNESS FOR A PARTICULAR PURPOSE.  IN NO EVENT SHALL SILICON
 * GRAPHICS, INC.  BE LIABLE TO YOU OR ANYONE ELSE FOR ANY DIRECT,
 * SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY
 * KIND, OR ANY DAMAGES WHATSOEVER, INCLUDING WITHOUT LIMITATION,
 * LOSS OF PROFIT, LOSS OF USE, SAVINGS OR REVENUE, OR THE CLAIMS OF
 * THIRD PARTIES, WHETHER OR NOT SILICON GRAPHICS, INC.  HAS BEEN
 * ADVISED OF THE POSSIBILITY OF SUCH LOSS, HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, ARISING OUT OF OR IN CONNECTION WITH THE
 * POSSESSION, USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * US Government Users Restricted Rights
 * Use, duplication, or disclosure by the Government is subject to
 * restrictions set forth in FAR 52.227.19(c)(2) or subparagraph
 * (c)(1)(ii) of the Rights in Technical Data and Computer Software
 * clause at DFARS 252.227-7013 and/or in similar or successor
 * clauses in the FAR or the DOD or NASA FAR Supplement.
 * Unpublished-- rights reserved under the copyright laws of the
 * United States.  Contractor/manufacturer is Silicon Graphics,
 * Inc., 2011 N.  Shoreline Blvd., Mountain View, CA 94039-7311.
 *
 * OpenGL(TM) is a trademark of Silicon Graphics, Inc.
 */


const RAD = 57.295;
const RRAD = 0.01745;

const SHARKSIZE = 6000;
const SHARKSPEED = 100.0;

const WHALESPEED = 250.0;


function CreateFish()
{
	function Fish() {
		this.x = this.y = this.z = 0;
		this.phi = this.theta = this.psi = 0;
		this.v = 0;
		this.xt = this.yt = this.zt = 0;
		this.htail = this.vtail = 0;
		this.dtheta = 0;
		this.spurt = this.attack = 0;
	}

	return new Fish;
}


var momWhale = CreateFish();
var babyWhale = CreateFish();
var dolph = CreateFish();

var moving = false;


function InitFishs()
{
    dolph.x = 30000.0;
    dolph.y = 0.0;
    dolph.z = 6000.0;
    dolph.psi = 90.0;
    dolph.theta = 0.0;
    dolph.v = 3.0;

    momWhale.x = 70000.0;
    momWhale.y = 0.0;
    momWhale.z = 0.0;
    momWhale.psi = 90.0;
    momWhale.theta = 0.0;
    momWhale.v = 3.0;

    babyWhale.x = 60000.0;
    babyWhale.y = -2000.0;
    babyWhale.z = -2000.0;
    babyWhale.psi = 90.0;
    babyWhale.theta = 0.0;
    babyWhale.v = 3.0;
}


function Init(gl)
{
    var ambient =
    [0.1, 0.1, 0.1, 1.0];
    var diffuse =
    [1.0, 1.0, 1.0, 1.0];
    var position =
    [0.0, 1.0, 0.0, 0.0];
    var mat_shininess =
    [90.0];
    var mat_specular =
    [0.8, 0.8, 0.8, 1.0];
    var mat_diffuse =
    [0.46, 0.66, 0.795, 1.0];
    var mat_ambient =
    [0.0, 0.1, 0.2, 1.0];
    var lmodel_ambient =
    [0.4, 0.4, 0.4, 1.0];
    var lmodel_localviewer =
    [0.0];

    gl.frontFace(gl.CW);

    gl.enable(gl.DEPTH_TEST);

    gl.lightfv(gl.LIGHT0, gl.AMBIENT, ambient);
    gl.lightfv(gl.LIGHT0, gl.DIFFUSE, diffuse);
    gl.lightfv(gl.LIGHT0, gl.POSITION, position);
    gl.lightModelfv(gl.LIGHT_MODEL_AMBIENT, lmodel_ambient);
    gl.lightModelfv(gl.LIGHT_MODEL_LOCAL_VIEWER, lmodel_localviewer);
    gl.enable(gl.LIGHTING);
    gl.enable(gl.LIGHT0);

    gl.materialfv(gl.FRONT_AND_BACK, gl.SHININESS, mat_shininess);
    gl.materialfv(gl.FRONT_AND_BACK, gl.SPECULAR, mat_specular);
    gl.materialfv(gl.FRONT_AND_BACK, gl.DIFFUSE, mat_diffuse);
    gl.materialfv(gl.FRONT_AND_BACK, gl.AMBIENT, mat_ambient);

    InitFishs();

    gl.clearColor(0.0, 0.5, 0.9, 1.0);
}


function Reshape(gl, width, height)
{
    gl.viewport(0, 0, width, height);

    gl.matrixMode(gl.PROJECTION);
    gl.loadIdentity();
	gl.frustum(-7280, 7280, -3640, 3640, 10000, 400000);
    gl.matrixMode(gl.MODELVIEW);
}


function Animate()
{
    WhalePilot(dolph);
    dolph.phi++;
    WhalePilot(momWhale);
    momWhale.phi++;
    WhalePilot(babyWhale);
    babyWhale.phi++;
}


function Display(gl)
{
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.pushMatrix();
    FishTransform(gl, dolph);
    DrawDolphin(gl, dolph);
    gl.popMatrix();

    gl.pushMatrix();
    FishTransform(gl, momWhale);
    DrawWhale(gl, momWhale);
    gl.popMatrix();

    gl.pushMatrix();
    FishTransform(gl, babyWhale);
    gl.scalef(0.45, 0.45, 0.3);
    DrawWhale(gl, babyWhale);
    gl.popMatrix();

    gl.swapBuffers();
}


function MainLoop(gl) {
	DoFrame(gl);
}


function DoFrame(gl) {
	Animate();
	Display(gl);

	setTimeout(function () {
		DoFrame(gl);
	}, 33);
}


/**
 * Entry of the application.
 */
function Atlantis_Main(canvas)
{
	var gl = canvas.getContext('experimental-tinygl');
	
	Init(gl);

	Reshape(gl, canvas.width, canvas.height);

	MainLoop(gl);
}

