#include <stdlib.h>
#include "zbuffer.h"

#define ZCMP(z,zpix) ((z) >= (zpix))

void ZB_fillTriangleFlat(ZBuffer *zb,
			 ZBufferPoint *p0,ZBufferPoint *p1,ZBufferPoint *p2)
{
#if TGL_FEATURE_RENDER_BITS == 24
    unsigned char colorR, colorG, colorB;
#else
    int color;
#endif

#define INTERP_Z

#if TGL_FEATURE_RENDER_BITS == 24 

#define DRAW_INIT()				\
{						\
  colorR=p2->r>>8; \
  colorG=p2->g>>8; \
  colorB=p2->b>>8; \
}

#define PUT_PIXEL(_a)		\
{						\
    zz=z >> ZB_POINT_Z_FRAC_BITS;		\
    if (ZCMP(zz,pz[_a])) {				\
      pp[3 * _a]=colorR;\
      pp[3 * _a + 1]=colorG;\
      pp[3 * _a + 2]=colorB;\
      pz[_a]=zz;				\
    }\
    z+=dzdx;					\
}

#elif TGL_FEATURE_RENDER_BITS == 32

#define DRAW_INIT()				\
{						\
  color=0xff000000 | RGB_TO_PIXEL(p2->r,p2->g,p2->b);	\
}
  
#define PUT_PIXEL(_a)				\
{						\
    zz=z >> ZB_POINT_Z_FRAC_BITS;		\
    if (ZCMP(zz,pz[_a])) {				\
      pp[_a]=color;				\
      pz[_a]=zz;				\
    }						\
    z+=dzdx;					\
}

#else

#define DRAW_INIT()				\
{						\
  color=RGB_TO_PIXEL(p2->r,p2->g,p2->b);	\
}
  
#define PUT_PIXEL(_a)				\
{						\
    zz=z >> ZB_POINT_Z_FRAC_BITS;		\
    if (ZCMP(zz,pz[_a])) {				\
      pp[_a]=color;				\
      pz[_a]=zz;				\
    }						\
    z+=dzdx;					\
}

#endif /* TGL_FEATURE_RENDER_BITS == 24 */

#include "ztriangle.h"
}

/*
 * Smooth filled triangle.
 * The code below is very tricky :)
 */

void ZB_fillTriangleSmooth(ZBuffer *zb,
			   ZBufferPoint *p0,ZBufferPoint *p1,ZBufferPoint *p2)
{
#if TGL_FEATURE_RENDER_BITS == 16
        int _drgbdx;
#endif

#define INTERP_Z
#define INTERP_RGB

#define SAR_RND_TO_ZERO(v,n) (v / (1<<n))

#if TGL_FEATURE_RENDER_BITS == 24

#define DRAW_INIT() 				\
{						\
}

#define PUT_PIXEL(_a)				\
{						\
    zz=z >> ZB_POINT_Z_FRAC_BITS;		\
    if (ZCMP(zz,pz[_a])) {				\
      pp[3 * _a]=or1 >> 8;\
      pp[3 * _a + 1]=og1 >> 8;\
      pp[3 * _a + 2]=ob1 >> 8;\
      pz[_a]=zz;				\
    }\
    z+=dzdx;					\
    og1+=dgdx;					\
    or1+=drdx;					\
    ob1+=dbdx;					\
}

#elif TGL_FEATURE_RENDER_BITS == 16

#define DRAW_INIT() 				\
{						\
  _drgbdx=(SAR_RND_TO_ZERO(drdx,6) << 22) & 0xFFC00000;		\
  _drgbdx|=SAR_RND_TO_ZERO(dgdx,5) & 0x000007FF;		\
  _drgbdx|=(SAR_RND_TO_ZERO(dbdx,7) << 12) & 0x001FF000; 	\
}


#define PUT_PIXEL(_a)				\
{						\
    zz=z >> ZB_POINT_Z_FRAC_BITS;		\
    if (ZCMP(zz,pz[_a])) {				\
      tmp=rgb & 0xF81F07E0;			\
      pp[_a]=tmp | (tmp >> 16);			\
      pz[_a]=zz;				\
    }						\
    z+=dzdx;					\
    rgb=(rgb+drgbdx) & ( ~ 0x00200800);		\
}

#define DRAW_LINE()							   \
{									   \
  register unsigned short *pz;					   \
  register PIXEL *pp;					   \
  register unsigned int tmp,z,zz,rgb,drgbdx;				   \
  register int n;							   \
  n=(x2 >> 16) - x1;							   \
  pp=pp1+x1;								   \
  pz=pz1+x1;								   \
  z=z1;									   \
  rgb=(r1 << 16) & 0xFFC00000;						   \
  rgb|=(g1 >> 5) & 0x000007FF;						   \
  rgb|=(b1 << 5) & 0x001FF000;						   \
  drgbdx=_drgbdx;							   \
  while (n>=3) {							   \
    PUT_PIXEL(0);							   \
    PUT_PIXEL(1);							   \
    PUT_PIXEL(2);							   \
    PUT_PIXEL(3);							   \
    pz+=4;								   \
    pp+=4;								   \
    n-=4;								   \
  }									   \
  while (n>=0) {							   \
    PUT_PIXEL(0);							   \
    pz+=1;								   \
    pp+=1;								   \
    n-=1;								   \
  }									   \
}

#elif TGL_FEATURE_RENDER_BITS == 32

#define DRAW_INIT() 				\
{						\
}

#define PUT_PIXEL(_a)				\
{						\
    zz=z >> ZB_POINT_Z_FRAC_BITS;		\
    if (ZCMP(zz,pz[_a])) {				\
      pp[_a] = 0xff000000 | RGB_TO_PIXEL(or1, og1, ob1);\
      pz[_a]=zz;				\
    }\
    z+=dzdx;					\
    og1+=dgdx;					\
    or1+=drdx;					\
    ob1+=dbdx;					\
}

#else

#define DRAW_INIT() 				\
{						\
}

#define PUT_PIXEL(_a)				\
{						\
    zz=z >> ZB_POINT_Z_FRAC_BITS;		\
    if (ZCMP(zz,pz[_a])) {				\
      pp[_a] = RGB_TO_PIXEL(or1, og1, ob1);\
      pz[_a]=zz;				\
    }\
    z+=dzdx;					\
    og1+=dgdx;					\
    or1+=drdx;					\
    ob1+=dbdx;					\
}

#endif /* TGL_FEATURE_RENDER_BITS */

#include "ztriangle.h"
}

void ZB_setTexture(ZBuffer *zb, PIXEL *texture, unsigned int tmask)
{
    zb->current_texture=texture;
	zb->t_mask = tmask;
}

void ZB_fillTriangleMapping(ZBuffer *zb,
			    ZBufferPoint *p0,ZBufferPoint *p1,ZBufferPoint *p2)
{
    PIXEL *texture;
	unsigned int t_mask;

#define INTERP_Z
#define INTERP_ST

#define DRAW_INIT()				\
{						\
  texture=zb->current_texture;			\
  t_mask=zb->t_mask; \
}

#if TGL_FEATURE_RENDER_BITS == 24

#define PUT_PIXEL(_a)				\
{						\
   unsigned char *ptr;\
   zz=z >> ZB_POINT_Z_FRAC_BITS;		\
     if (ZCMP(zz,pz[_a])) {				\
       ptr = texture + (((t & 0x3FC00000) | s) >> 14) * 3; \
       pp[3 * _a]= ptr[0];\
       pp[3 * _a + 1]= ptr[1];\
       pp[3 * _a + 2]= ptr[2];\
       pz[_a]=zz;				\
    }						\
    z+=dzdx;					\
    s+=dsdx;					\
    t+=dtdx;					\
}

#elif TGL_FEATURE_RENDER_BITS == 32

#define PUT_PIXEL(_a)				\
{						\
   PIXEL texel; \
   zz=z >> ZB_POINT_Z_FRAC_BITS;		\
     if (ZCMP(zz,pz[_a])) {				\
	   texel=texture[(t & t_mask) | s];;	\
	   if (texel & 0xff000000) { \
         pp[_a]=texel;	\
         pz[_a]=zz;				\
       } \
    }						\
    z+=dzdx;					\
    s+=dsdx;					\
    t+=dtdx;					\
}

#else

#define PUT_PIXEL(_a)				\
{						\
   zz=z >> ZB_POINT_Z_FRAC_BITS;		\
     if (ZCMP(zz,pz[_a])) {				\
       pp[_a]=texture[(t & t_mask) | s];;	\
       pz[_a]=zz;				\
    }						\
    z+=dzdx;					\
    s+=dsdx;					\
    t+=dtdx;					\
}

#endif

#include "ztriangle.h"
}

/*
 * Texture mapping with perspective correction.
 * Slow but exact version (incorrect for 24 bits).
 */
void ZB_fillTriangleMappingPerspective(ZBuffer *zb,
                            ZBufferPoint *p0,ZBufferPoint *p1,ZBufferPoint *p2)
{
    PIXEL *texture;
	unsigned int t_mask;

#define INTERP_Z
#define INTERP_STZ

#define DRAW_INIT()				\
{						\
  texture=zb->current_texture;			\
  t_mask=zb->t_mask; \
}

#if TGL_FEATURE_RENDER_BITS == 32

#define PUT_PIXEL(_a)				\
{						\
   int s,t; \
   float w; \
   PIXEL texel; \
   zz=z >> ZB_POINT_Z_FRAC_BITS;		\
     if (ZCMP(zz,pz[_a])) {				\
	   w = 1.0f / winv; \
       s= (int) (sz * w); \
       t= (int) (tz * w); \
	   texel=texture[(t & t_mask) | s];	\
	   if (texel & 0xff000000) { \
         pp[_a]=texel;          \
         pz[_a]=zz;				\
      } \
    }						\
    z+=dzdx;					\
    sz+=dszdx;					\
    tz+=dtzdx;					\
	winv+=dwinvdx; \
}

#else

#define PUT_PIXEL(_a)				\
{						\
   int s,t; \
   float w; \
   zz=z >> ZB_POINT_Z_FRAC_BITS;		\
     if (ZCMP(zz,pz[_a])) {				\
	   w = 1.0f / winv; \
       s= (int) (sz * w); \
       t= (int) (tz * w); \
       pp[_a]=texture[(t & t_mask) | s];;	\
       pz[_a]=zz;				\
    }						\
    z+=dzdx;					\
    sz+=dszdx;					\
    tz+=dtzdx;					\
	winv+=dwinvdx; \
}

#endif

#include "ztriangle.h"
}

