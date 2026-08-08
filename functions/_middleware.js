// Cloudflare Pages middleware.
// Only the production domain (blackwhitepdf.com) should be indexable. Every other
// hostname the deployment answers on — *.pages.dev preview/production aliases and
// any wildcard — gets a noindex header so search engines don't index duplicates.

const INDEXABLE_HOSTS = new Set(["blackwhitepdf.com", "www.blackwhitepdf.com"]);

export async function onRequest(context) {
  const { request, next } = context;
  const host = new URL(request.url).hostname.toLowerCase();
  const response = await next();

  if (!INDEXABLE_HOSTS.has(host)) {
    // Clone so we can mutate headers on the (otherwise immutable) asset response.
    const patched = new Response(response.body, response);
    patched.headers.set("X-Robots-Tag", "noindex, nofollow");
    return patched;
  }

  return response;
}
