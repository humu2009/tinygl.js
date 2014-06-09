
function normal3f_unnormalized(gl, x, y, z)
{
   var mag = Math.sqrt( x*x + y*y + z*z );
   if (mag>0.00001) {
      x /= mag;
      y /= mag;
      z /= mag;
   }
   gl.normal3f( x, y, z );
}

function perspective(gl, fovy, aspect, zNear, zFar)
{
   var xmin, xmax, ymin, ymax;

   ymax = zNear * Math.tan( fovy * Math.PI / 360.0 );
   ymin = -ymax;

   xmin = ymin * aspect;
   xmax = ymax * aspect;

   gl.frustum( xmin, xmax, ymin, ymax, zNear, zFar );
}

function cylinder(gl, baseRadius, topRadius, height, slices, stacks)
{
   var da, r, dr, dz;
   var z, nz, nsign;
   var du = 1.0 / slices;
   var dv = 1.0 / stacks;
   var tcx = 0.0, tcy = 0.0;
   
   nsign = 1.0;

   da = 2.0*Math.PI / slices;
   dr = (topRadius-baseRadius) / stacks;
   dz = height / stacks;
   nz = (baseRadius-topRadius) / height;  /* Z component of normal vectors */

   for (var i=0;i<slices;i++) {
	 var x1 = -Math.sin(i*da);
	 var y1 = Math.cos(i*da);
	 var x2 = -Math.sin((i+1)*da);
	 var y2 = Math.cos((i+1)*da);
	 z = 0.0;
	 r = baseRadius;
	 tcy = 0.0;
	 gl.begin( gl.QUAD_STRIP );
	 for (var j=0;j<=stacks;j++) {
	    if (nsign==1.0) {
	       normal3f_unnormalized(gl, x1*nsign, y1*nsign, nz*nsign );
	       gl.texCoord2f(tcx, tcy);
	       gl.vertex3f( x1*r, y1*r, z );
	       normal3f_unnormalized(gl, x2*nsign, y2*nsign, nz*nsign );
	       gl.texCoord2f(tcx+du, tcy);
	       gl.vertex3f( x2*r, y2*r, z );
	    }
	    else {
	       normal3f_unnormalized(gl, x2*nsign, y2*nsign, nz*nsign );
	       gl.texCoord2f(tcx, tcy);
	       gl.vertex3f( x2*r, y2*r, z );
	       normal3f_unnormalized(gl, x1*nsign, y1*nsign, nz*nsign );
	       gl.texCoord2f(tcx+du, tcy);
	       gl.vertex3f( x1*r, y1*r, z );
	    }
	    z += dz;
	    r += dr;
	    tcy += dv;
	 }
	 gl.end();
	 tcx += du;
   }
}

function disk(gl, innerRadius, outerRadius, slices, loops)
{
   var a, da;
   var dr;
   var r1, r2, dtc;
   var sa,ca;

   /* Normal vectors */
   gl.normal3f( 0.0, 0.0, +1.0 );

   da = 2.0*Math.PI / slices;
   dr = (outerRadius-innerRadius) / loops;

   /* texture of a gluDisk is a cut out of the texture unit square */
   /* x, y in [-outerRadius, +outerRadius]; s, t in [0, 1] (linear mapping) */
   dtc = 2.0 * outerRadius;

   r1 = innerRadius;
   for (var l=0;l<loops;l++) {
	   r2 = r1 + dr;
	   gl.begin( gl.QUAD_STRIP );
	   for (var s=0;s<=slices;s++) {
		  if (s==slices) a = 0.0;
		  else  a = s * da;
		  sa = Math.sin(a); ca = Math.cos(a);
		  gl.texCoord2f(0.5+sa*r2/dtc,0.5+ca*r2/dtc);
		  gl.vertex2f( r2*sa, r2*ca );
		  gl.texCoord2f(0.5+sa*r1/dtc,0.5+ca*r1/dtc);
		  gl.vertex2f( r1*sa, r1*ca );
	   }
	   gl.end();
	   r1 = r2;
	}

}

function sphere(gl, radius, slices, stacks)
{
	var rho, drho, theta, dtheta;
	var x, y, z;
	var s, t, ds, dt;
	var imin, imax;
	var normals;
	var nsign;

	normals=1;
	nsign=1;

	drho = Math.PI / stacks;
	dtheta = 2.0 * Math.PI / slices;

	/* draw +Z end as a triangle fan */
	gl.begin( gl.TRIANGLE_FAN );
	gl.normal3f( 0.0, 0.0, 1.0 );
	gl.texCoord2f(0.5,0.0);
	gl.vertex3f( 0.0, 0.0, nsign * radius );
	for (var j=0;j<=slices;j++) {
		theta = (j==slices) ? 0.0 : j * dtheta;
		x = -Math.sin(theta) * Math.sin(drho);
		y = Math.cos(theta) * Math.sin(drho);
		z = nsign * Math.cos(drho);
		if (normals)  gl.normal3f( x*nsign, y*nsign, z*nsign );
		gl.vertex3f( x*radius, y*radius, z*radius );
	}
	gl.end();

	ds = 1.0 / slices;
	dt = 1.0 / stacks;
	t = 1.0;  /* because loop now runs from 0 */
	if (1) {
		imin = 0;
		imax = stacks;
	}
	else {
		imin = 1;
		imax = stacks-1;
	}

      /* draw intermediate stacks as quad strips */
	for (var i=imin;i<imax;i++) {
		rho = i * drho;
		gl.begin( gl.QUAD_STRIP );
		s = 0.0;
		for (var j=0;j<=slices;j++) {
			theta = (j==slices) ? 0.0 : j * dtheta;
			x = -Math.sin(theta) * Math.sin(rho);
			y = Math.cos(theta) * Math.sin(rho);
			z = nsign * Math.cos(rho);
			if (normals)  gl.normal3f( x*nsign, y*nsign, z*nsign );
			gl.texCoord2f(s,1-t);
			gl.vertex3f( x*radius, y*radius, z*radius );
			x = -Math.sin(theta) * Math.sin(rho+drho);
			y = Math.cos(theta) * Math.sin(rho+drho);
			z = nsign * Math.cos(rho+drho);
			if (normals)  gl.normal3f( x*nsign, y*nsign, z*nsign );
			gl.texCoord2f(s,1-(t-dt));
			s += ds;
			gl.vertex3f( x*radius, y*radius, z*radius );
		}
		gl.end();
		t -= dt;
	}

	/* draw -Z end as a triangle fan */
	gl.begin( gl.TRIANGLE_FAN );
	gl.normal3f( 0.0, 0.0, -1.0 );
	gl.texCoord2f(0.5,1.0);
	gl.vertex3f( 0.0, 0.0, -radius*nsign );
	rho = Math.PI - drho;
	s = 1.0;
	t = dt;
	for (var j=slices;j>=0;j--) {
		theta = (j==slices) ? 0.0 : j * dtheta;
		x = -Math.sin(theta) * Math.sin(rho);
		y = Math.cos(theta) * Math.sin(rho);
		z = nsign * Math.cos(rho);
		if (normals)  gl.normal3f( x*nsign, y*nsign, z*nsign );
		gl.texCoord2f(s,1-t);
		s -= ds;
		gl.vertex3f( x*radius, y*radius, z*radius );
	}
	gl.end();
}
