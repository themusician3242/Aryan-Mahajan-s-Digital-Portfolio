export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Notion Endpoint - always accessible
    if (url.pathname === "/api/notion") {
      return new Response(JSON.stringify({ message: "Notion data coming soon!" }), {
        headers: { "content-type": "application/json" },
      });
    }

    // 2. MANUAL TOGGLE - Change this to "UP" when you want the site live
    const STATUS = "DOWN"; // "UP" or "DOWN"

    // 3. If status is UP, serve the normal site
    if (STATUS === "UP") {
      return env.ASSETS.fetch(request);
    }

    // 4. Otherwise show maintenance page
    const downtimeHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Under Maintenance</title>
          <style>
            body { 
              font-family: system-ui, -apple-system, sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              text-align: center; 
              padding: 3rem 1rem; 
              margin: 0;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            h1 { font-size: clamp(2rem, 5vw, 4rem); margin-bottom: 1rem; }
            p { font-size: 1.2rem; margin-bottom: 2rem; max-width: 600px; }
            a { 
              color: white; 
              font-weight: bold;
              padding: 0.75rem 1.5rem;
              border: 2px solid white;
              border-radius: 8px;
              text-decoration: none;
              display: inline-block;
              transition: all 0.3s;
            }
            a:hover {
              background: white;
              color: #764ba2;
            }
          </style>
        </head>
        <body>
          <h1>🚧 Under Maintenance</h1>
          <p>Website is currently down for improvements. Will be back shortly!</p>
          <p>In the meantime, connect with me on 
             <a href="https://www.linkedin.com/in/aryan-mahajan-2967ab367/" target="_blank">
              LinkedIn
             </a>
          </p>
        </body>
      </html>
    `;

    return new Response(downtimeHTML, {
      status: 503,
      headers: { 
        "content-type": "text/html",
        "cache-control": "no-store" // Prevent caching
      }
    });
  },
};

// Add this right after the Notion endpoint for testing
if (url.pathname === "/debug") {
  return new Response(JSON.stringify({ 
    status: STATUS,
    message: STATUS === "UP" ? "Site is live" : "Maintenance mode on"
  }), {
    headers: { "content-type": "application/json" },
  });
}
