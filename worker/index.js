export default {
  async fetch(request, env, ctx) {
    console.log(`[INFO] Request: ${request.method} ${request.url}`);
    return fetch(request); // Proxy the request to your static site
  }
}
