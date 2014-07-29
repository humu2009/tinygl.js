#include <stdlib.h>
#include "zbuffer.h"

#define ZCMP(z,zpix) ((z) >= (zpix))

void ZB_fillTriangleFlat(ZBuffer *zb,
			 ZBufferPoint *p0,ZBufferPoint *p1,ZBufferPoint *p2)
{
    int color;

#define INTERP_Z

#define DRAW_INIT()				\
{						\
  color=0xff000000 | RGB_TO_PIXEL(p2->r,p2->g,p2->b);	\
}
  
#define PUT_PIXEL(_a)				\
{						\
    if (ZCMP(z,pz[_a])) {				\
      pp[_a]=color;				\
      pz[_a]=z;				\
    }						\
    z+=dzdx;					\
}

#include "ztriangle.h"
}

/*
 * Smooth filled triangle.
 * The code below is very tricky :)
 */

void ZB_fillTriangleSmooth(ZBuffer *zb,
			   ZBufferPoint *p0,ZBufferPoint *p1,ZBufferPoint *p2)
{

#define INTERP_Z
#define INTERP_RGB

#define DRAW_INIT() 				\
{						\
}

#define PUT_PIXEL(_a)				\
{						\
    if (ZCMP(z,pz[_a])) {				\
      pp[_a] = 0xff000000 | RGB_TO_PIXEL(or1, og1, ob1);\
      pz[_a]=z;				\
    }\
    z+=dzdx;					\
    og1+=dgdx;					\
    or1+=drdx;					\
    ob1+=dbdx;					\
}

#include "ztriangle.h"
}

void ZB_setTexture(ZBuffer *zb, PIXEL *texture, unsigned int sbound, unsigned int tbound, unsigned int slog2)
{
    zb->current_texture=texture;
	zb->s_bound=sbound;
	zb->t_bound=tbound;
	zb->s_log2 = slog2;
}

/*
 * Texture mapping with perspective correction.
 */
void ZB_fillTriangleMappingPerspective(ZBuffer *zb,
                            ZBufferPoint *p0,ZBufferPoint *p1,ZBufferPoint *p2)
{
    PIXEL *texture;
    unsigned int s_log2;
	unsigned int s_bound, t_bound;

#define INTERP_Z
#define INTERP_STZ

#define DRAW_INIT()				\
{						\
  texture=zb->current_texture;			\
  s_log2=zb->s_log2;   \
  s_bound=zb->s_bound; \
  t_bound=zb->t_bound; \
}

#define PUT_PIXEL(_a)				\
{						\
   float w; \
   unsigned int s,t; \
   PIXEL texel; \
     if (ZCMP(z,pz[_a])) {				\
	   w = 1.0f / winv; \
       s= (unsigned int) (sz * w); \
       t= (unsigned int) (tz * w); \
	   texel=texture[(t & t_bound) << s_log2 | (s & s_bound)];	\
	   if (texel & 0xff000000) { \
         pp[_a]=texel;          \
         pz[_a]=z;				\
      } \
    }						\
    z+=dzdx;					\
    sz+=dszdx;					\
    tz+=dtzdx;					\
	winv+=dwinvdx;          \
}

#include "ztriangle.h"
}

/*
 * Texture mapping with perspective correction and bilinear filtering.
 */
void ZB_fillTriangleMappingPerspectiveBilinear(ZBuffer *zb,
                            ZBufferPoint *p0,ZBufferPoint *p1,ZBufferPoint *p2)
{
    PIXEL *texture;
    unsigned int s_log2;
	unsigned int s_bound, t_bound;

#define INTERP_Z
#define INTERP_STZ

#define DRAW_INIT()				\
{						\
  texture=zb->current_texture;			\
  s_log2=zb->s_log2; \
  s_bound=zb->s_bound; \
  t_bound=zb->t_bound; \
}

#define PUT_PIXEL(_a)				\
{						\
   float w; \
   unsigned int s, t; \
   unsigned int a, b, c, d; \
   PIXEL texel0, texel1, texel2, texel3; \
   if (ZCMP(z,pz[_a])) {				\
	   w = 1.0f / winv; \
       s = (unsigned int) (sz * w); \
       t = (unsigned int) (tz * w); \
	   texel0 = texture[(t & t_bound) << s_log2 | (s & s_bound)];	\
	   if (texel0 & 0xff000000) { \
         texel1 = texture[(t & t_bound) << s_log2 | ((s+1) & s_bound)]; \
         texel2 = texture[((t+1) & t_bound) << s_log2 | (s & s_bound)]; \
         texel3 = texture[((t+1) & t_bound) << s_log2 | ((s+1) & s_bound)]; \
         if ((texel1 & 0xff000000) && (texel2 & 0xff000000) && (texel3 & 0xff000000)) { \
           a = (unsigned int)((sz * w - s) * 16); \
           b = 16 - a; \
           c = ((unsigned int)((tz * w - t) * 16)); \
           d = 16 - c; \
           pp[_a] = ((d * (b * (texel0 & 0xff00ff) + a * (texel1 & 0xff00ff)) + c * (b * (texel2 & 0xff00ff) + a * (texel3 & 0xff00ff))) >> 8) & 0xff00ff | \
                    ((d * (b * (texel0 & 0xff00) + a * (texel1 & 0xff00)) + c * (b * (texel2 & 0xff00) + a * (texel3 & 0xff00))) >> 8) & 0xff00 | \
                    texel0 & 0xff000000; \
           pz[_a] = z;				\
         } \
      } \
    }						\
    z+=dzdx;					\
    sz+=dszdx;					\
    tz+=dtzdx;					\
	  winv+=dwinvdx;      \
}

#include "ztriangle.h"
}

void ZB_fillTriangleQuery(ZBuffer *zb,
			 ZBufferPoint *p0,ZBufferPoint *p1,ZBufferPoint *p2)
{
#define INTERP_Z

#define DRAW_INIT() \
{						\
}

#define PUT_PIXEL(_a)				\
{						\
    if (ZCMP(z,pz[_a])) {		 \
      zb->samples_passed++;  \
    }						\
    z+=dzdx;					\
}

#include "ztriangle.h"
}

