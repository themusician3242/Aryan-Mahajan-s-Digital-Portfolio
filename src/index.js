export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. THIS IS YOUR NOTION ENDPOINT
    // Your frontend HTML can call this later
    if (url.pathname === "/api/notion") {
      return new Response(JSON.stringify({ message: "Notion data coming soon!" }), {
        headers: { "content-type": "application/json" },
      });
    }

    // 2. THIS HOSTS YOUR WEBSITE
    // This looks into your 'public' folder and serves index.html, CSS, and JS
    return env.ASSETS.fetch(request);
  },
};
