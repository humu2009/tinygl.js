#include "zgl.h"
#include "msghandling.h"

static GLQuery *find_query(GLContext *c, unsigned int query)
{
  return c->shared_state.queries[query];
}

static GLQuery *alloc_query(GLContext *c, unsigned int query)
{
  GLQuery *q = gl_zalloc(sizeof(GLQuery));

  c->shared_state.queries[query] = q;
  return q;
}

static void delete_query(GLContext* c, unsigned int query)
{
  GLQuery *q = find_query(c, query);
  assert(q != NULL);

  gl_free(q);
  c->shared_state.queries[query] = NULL;
}

void glGenQueries(int n, unsigned int *queries)
{
  GLContext *c = gl_get_context();

  int i, count = 0;
  GLQuery *q;
  for (i=0; i<MAX_OCCLUSION_QUERIES; i++) {
    q = c->shared_state.queries[i];
    if (NULL == q) {
      alloc_query(c, i);
      queries[count++] = i;
      if (count == n)
        break;
    }
  }

  if (count < n)
    gl_fatal_error("glGenQueries: not enough room for the required queries");
}

void glDeleteQueries(int n, unsigned int *queries)
{
  GLContext *c = gl_get_context();

  int i;
  GLQuery *q;
  for (i=0; i<n; i++) {
    q = find_query(c, queries[i]);
    if (q != NULL) {
      if (q == c->current_query) {
        c->current_query = NULL;
      }
      delete_query(c, queries[i]);
    }
  }
}

int glIsQuery(unsigned int query)
{
  GLContext *c = gl_get_context();
  return (find_query(c, query) != NULL);
}

void glBeginQuery(int target, unsigned int query)
{
  GLContext *c = gl_get_context();

  GLQuery *q;

  if (target != GL_SAMPLES_PASSED)
    tgl_warning("glBeginQuery: illegal target %d", target);
  if (c->current_query != NULL)
    tgl_warning("glBeginQuery: last query is not ended yet");

  q = find_query(c, query);
  if (q != NULL) {
    q->samples_passed = 0;
    c->current_query = q;
  } else
    tgl_warning("glBeginQuery: undefined query id %d", query);

  c->zb->samples_passed = 0;
}

void glEndQuery(int target)
{
  GLContext *c = gl_get_context();

  if (target != GL_SAMPLES_PASSED)
    tgl_warning("glEndQuery: illegal target %d", target);
  if (c->current_query == NULL)
    tgl_warning("glEndQuery: not in query");

  c->current_query->samples_passed = c->zb->samples_passed;
  c->current_query = NULL;
}

void glGetQueryObjectuiv(unsigned int query, int pname, unsigned int *params)
{
  GLContext *c = gl_get_context();

  GLQuery *q;

  if (pname != GL_QUERY_RESULT)
    tgl_warning("glGetQueryObjectuiv: unsupported option");

  q = find_query(c, query);
  if (q != NULL)
    *params = q->samples_passed;
  else
    tgl_warning("glGetQueryObjectuiv: undefined query id %d", query);
}
