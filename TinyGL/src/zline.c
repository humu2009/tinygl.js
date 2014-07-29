#include <stdlib.h>
#include "zbuffer.h"

#define ZCMP(z,zpix) ((z) >= (zpix))

void ZB_plot(ZBuffer * zb, ZBufferPoint * p)
{
    unsigned int *pz;
    PIXEL *pp;
    int zz;

    pz = zb->zbuf + (p->y * zb->xsize + p->x);
    pp = (PIXEL *) ((char *) zb->pbuf + zb->linesize * p->y + p->x * PSZB);
    zz = p->z;
    if (ZCMP(zz, *pz)) {
	      *pp = 0xff000000 | RGB_TO_PIXEL(p->r, p->g, p->b);
	      *pz = zz;
    }
}

void ZB_plot_query(ZBuffer * zb, ZBufferPoint * p)
{
    unsigned int *pz;
    int zz;

    pz = zb->zbuf + (p->y * zb->xsize + p->x);
    zz = p->z;
    if (ZCMP(zz, *pz)) {
	      zb->samples_passed++;
    }
}

static void ZB_line_flat_z(ZBuffer * zb, ZBufferPoint * p1, ZBufferPoint * p2, 
                           int color)
{
#define INTERP_Z

#include "zline.h"
}

/* line with color interpolation */
static void ZB_line_interp_z(ZBuffer * zb, ZBufferPoint * p1, ZBufferPoint * p2)
{
#define INTERP_Z
#define INTERP_RGB

#include "zline.h"
}

void ZB_line_query_z(ZBuffer * zb, ZBufferPoint * p1, ZBufferPoint * p2)
{
#define INTERP_Z

#define PUTPIXEL() \
{   \
  if (ZCMP(z,*pz)) { \
    zb->samples_passed++; \
  } \
}

#include "zline.h"
}

/* no Z interpolation */

static void ZB_line_flat(ZBuffer * zb, ZBufferPoint * p1, ZBufferPoint * p2, 
                             int color)
{
#include "zline.h"
}

static void ZB_line_interp(ZBuffer * zb, ZBufferPoint * p1, ZBufferPoint * p2)
{
#define INTERP_RGB

#include "zline.h"
}

void ZB_line_query(ZBuffer * zb, ZBufferPoint * p1, ZBufferPoint * p2)
{
#define PUTPIXEL() \
{   \
  zb->samples_passed++; \
}

#include "zline.h"
}

void ZB_line_z(ZBuffer * zb, ZBufferPoint * p1, ZBufferPoint * p2)
{
    int color1, color2;

    color1 = RGB_TO_PIXEL(p1->r, p1->g, p1->b);
    color2 = RGB_TO_PIXEL(p2->r, p2->g, p2->b);

    /* choose if the line should have its color interpolated or not */
    if (color1 == color2) {
        ZB_line_flat_z(zb, p1, p2, color1);
    } else {
        ZB_line_interp_z(zb, p1, p2);
    }
}

void ZB_line(ZBuffer * zb, ZBufferPoint * p1, ZBufferPoint * p2)
{
    int color1, color2;

    color1 = RGB_TO_PIXEL(p1->r, p1->g, p1->b);
    color2 = RGB_TO_PIXEL(p2->r, p2->g, p2->b);

    /* choose if the line should have its color interpolated or not */
    if (color1 == color2) {
        ZB_line_flat(zb, p1, p2, color1);
    } else {
        ZB_line_interp(zb, p1, p2);
    }
}
