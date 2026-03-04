// export default {
//   async fetch(request, env, ctx) {
//     const url = new URL(request.url);

//     // 1. Notion Endpoint (keep this accessible even during downtime?)
//     if (url.pathname === "/api/notion") {
//       return new Response(JSON.stringify({ message: "Notion data coming soon!" }), {
//         headers: { "content-type": "application/json" },
//       });
//     }

//     const downtimeHTML = `
//       <html>
//         <body style="font-family: sans-serif; text-align: center; padding: 50px;"> 
//           <h1>Website is currently down for maintenance.</h1> 
//           <p>Will be live soon! In the meantime, please visit 
//              <a href="https://www.linkedin.com/in/aryan-mahajan-2967ab367/">Aryan Mahajan's LinkedIn</a>.
//           </p> 
//         </body>
//       </html>
//     `;

//     const status = "DOWN"; // Manual toggle

//     if (status === "UP") {
//       return env.ASSETS.fetch(request);
//     } else {
//       // FIX: Changed 'html' to 'downtimeHTML'
//       return new Response(downtimeHTML, {
//         status: 503, // Correct status for maintenance
//         headers: { "content-type": "text/html" }
//       });
//     }
//   },
// };

export default {
  async fetch(request) {
    return new Response("WORKER IS ACTIVE - SITE IS DOWN", {
      status: 503,
      headers: { "content-type": "text/plain" }
    });
  }
}
