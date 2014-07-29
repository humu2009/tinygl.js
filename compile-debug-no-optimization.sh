# compile source code of TinyGL
emcc -I ./TinyGL/src/ -I ./TinyGL/include/ TinyGL/src/api.c TinyGL/src/list.c TinyGL/src/vertex.c TinyGL/src/init.c TinyGL/src/matrix.c TinyGL/src/texture.c TinyGL/src/misc.c TinyGL/src/clear.c TinyGL/src/light.c TinyGL/src/query.c TinyGL/src/clip.c TinyGL/src/select.c TinyGL/src/get.c TinyGL/src/error.c TinyGL/src/zbuffer.c TinyGL/src/zline.c TinyGL/src/ztriangle.c TinyGL/src/zmath.c TinyGL/src/image_util.c TinyGL/src/oscontext.c TinyGL/src/msghandling.c TinyGL/src/arrays.c TinyGL/src/specbuf.c TinyGL/src/memory.c -o js/tinygl.o

# link and generate raw JavaScript code
emcc js/tinygl.o -o js/tinygl.raw.js -s EXPORTED_FUNCTIONS="['_glEnable', '_glDisable', '_glShadeModel', '_glCullFace', '_glPolygonMode', '_glBegin', '_glEnd', '_glVertex2f', '_glVertex2d', '_glVertex2fv', '_glVertex2dv', '_glVertex3f', '_glVertex3d', '_glVertex3fv', '_glVertex3dv', '_glVertex4f', '_glVertex4d', '_glVertex4fv', '_glVertex4dv', '_glColor3f', '_glColor3d', '_glColor3fv', '_glColor3dv', '_glColor4f', '_glColor4d', '_glColor4fv', '_glColor4dv', '_glNormal3f', '_glNormal3d', '_glNormal3fv', '_glNormal3dv', '_glTexCoord1f', '_glTexCoord1d', '_glTexCoord1fv', '_glTexCoord1dv', '_glTexCoord2f', '_glTexCoord2d', '_glTexCoord2fv', '_glTexCoord2dv', '_glTexCoord3f', '_glTexCoord3d', '_glTexCoord3fv', '_glTexCoord3dv', '_glTexCoord4f', '_glTexCoord4d', '_glTexCoord4fv', '_glTexCoord4dv', '_glEdgeFlag', '_glMatrixMode', '_glLoadMatrixf', '_glLoadIdentity', '_glMultMatrixf', '_glPushMatrix', '_glPopMatrix', '_glRotatef', '_glTranslatef', '_glScalef', '_glViewport', '_glFrustum', '_glOrtho', '_glGenLists', '_glDeleteLists', '_glIsList', '_glNewList', '_glEndList', '_glCallList', '_glClear', '_glClearColor', '_glClearDepth', '_glRenderMode', '_glSelectBuffer', '_glInitNames', '_glPushName', '_glPopName', '_glLoadName', '_glGenTextures', '_glDeleteTextures', '_glBindTexture', '_glTexImage2D', '_glTexEnvi', '_glTexParameteri', '_glPixelStorei', '_glMaterialfv', '_glMaterialf', '_glColorMaterial', '_glLightfv', '_glLightf', '_glLightModeli', '_glLightModelfv', '_glFlush', '_glHint', '_glGetIntegerv', '_glGetFloatv', '_glFrontFace', '_glEnableClientState', '_glDisableClientState', '_glArrayElement', '_glDrawArrays', '_glDrawElements', '_glVertexPointer', '_glColorPointer', '_glNormalPointer', '_glTexCoordPointer', '_glPolygonOffset', '_glGenQueries', '_glDeleteQueries', '_glIsQuery', '_glBeginQuery', '_glEndQuery', '_glGetQueryObjectuiv', '_glDebug', '_glInit', '_glClose', '_ostgl_create_context', '_ostgl_delete_context', '_ostgl_make_current', '_ostgl_resize', '_ostgl_copy_framebuffer']"

# output the final JavaScript code
cat tinygl.pre.js js/tinygl.raw.js tinygl.post.js > js/tinygl.js

# clear intermediate files
rm js/tinygl.o
rm js/tinygl.raw.js
rm js/tinygl.raw.js.map