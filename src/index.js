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

    const downtimeHTML = 
      `
      <html>
        <body> 
          <h1> Website is currently down for maintenance. Will be live soon! </h1> 
          <p> In the meantime, please visit <a href="https://www.linkedin.com/in/aryan-mahajan-2967ab367/"> Aryan Mahajan's LinkedIn. </a> </p>
        </body>
      </html>
      `

    const status = "DOWN";

    // 2. THIS HOSTS YOUR WEBSITE
    // This looks into your 'public' folder and serves index.html, CSS, and JS
    // return env.ASSETS.fetch(request);
    if (status === "UP") {
      return env.ASSETS.fetch(request);
    } else {
      return new Response(html, {
        status: 503,
        headers: {"content-type" : "text/html"}
      });
    }
  },
};
