export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Notion Endpoint
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
    <script src="https://cdn.jsdelivr.net/npm/p5@1.11.11/lib/p5.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.11.11/lib/addons/p5.sound.min.js"></script>
    <style>
      body { 
        margin: 0;
        padding: 0;
        overflow: hidden; /* Prevents scrolling */
        font-family: system-ui, -apple-system, sans-serif;
        color: white;
        text-align: center; 
      }
      
      /* Container for content */
      .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        width: 100%;
        padding: 2rem;
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        pointer-events: none; /* Allows clicks to pass through to canvas */
      }
      
      /* Make links clickable */
      a {
        pointer-events: auto;
      }
      
      /* Glowing text effect */
      .glow-text {
        animation: pulseGlow 2s ease-in-out infinite;
      }
      
      h1 {
        font-size: clamp(2rem, 5vw, 4rem); 
        margin-bottom: 1rem;
        text-shadow: 
          0 0 10px #fff,
          0 0 20px #8a2be2,
          0 0 30px #8a2be2,
          0 0 40px #8a2be2;
        animation: textPulse 3s ease-in-out infinite;
      }
      
      p {
        font-size: 1.2rem; 
        margin-bottom: 2rem; 
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        background-color: rgba(0,0,0,0.75);
        padding: 10px;
        border-radius: 15px;
        border: solid 1px #444444;
      }
      
      #linkedInIcon { 
        transition: all 0.3s ease;
        filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
      }
      
      #linkedInIcon:hover { 
        transform: scale(1.3); 
        filter: brightness(1.4) drop-shadow(0 0 15px #8a2be2);
      }
      
      /* Animations */
      @keyframes pulseGlow {
        0% { text-shadow: 0 0 10px #fff, 0 0 20px #8a2be2; }
        50% { text-shadow: 0 0 20px #fff, 0 0 30px #9370db, 0 0 40px #8a2be2; }
        100% { text-shadow: 0 0 10px #fff, 0 0 20px #8a2be2; }
      }
      
      @keyframes textPulse {
        0% { text-shadow: 0 0 10px #fff, 0 0 20px #8a2be2, 0 0 30px #8a2be2; }
        50% { text-shadow: 0 0 20px #fff, 0 0 30px #9370db, 0 0 40px #8a2be2, 0 0 50px #8a2be2; }
        100% { text-shadow: 0 0 10px #fff, 0 0 20px #8a2be2, 0 0 30px #8a2be2; }
      }
      
      /* Add a subtle overlay to ensure text readability */
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 100%);
        pointer-events: none;
        z-index: 5;
      }
      
      /* Make the canvas cover the entire background */
      canvas {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
      }
    </style>
  </head>
  <body>
    <!-- P5.js canvas will be injected here -->
    
    <!-- Semi-transparent overlay for better text contrast -->
    <div class="overlay"></div>
    
    <!-- Content with glowing text -->
    <div class="content">
      <h1 class="glow-text">New Updates Coming!</h1>
      <p class="glow-text">Website is currently under maintenance. Come back soon! Cool things to come!</p>
      <p style="display:flex; flex-direction: row; align-items:center; justify-content: center; gap: 10px;">
        <span class="glow-text">In the meantime, connect with me on</span>
        <a href="https://www.linkedin.com/in/aryan-mahajan-2967ab367/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png" width="30" id="linkedInIcon">
        </a>
      </p>
    </div>

    <script>
      let ellipse_size;
      let gap;

      function setup() {
        // Make canvas fill the entire window
        let canvas = createCanvas(windowWidth, windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '1');
        
        ellipse_size = 5;
        gap = 8;
      }

      function draw() {
        background(0);

        noStroke();

        // This makes overlapping colors 'glow' like light
        blendMode(ADD); 

        // Adjust grid spacing based on window size
        let adjustedGap = gap * (windowWidth / 1024);
        let adjustedSize = ellipse_size * (windowWidth / 1024);

        for (let i = -50; i < width + 50; i += adjustedSize + adjustedGap) {
          for (let j = -50; j < height + 50; j += adjustedSize + adjustedGap) {
            
            let wave = sin((i + j) * 0.0075 + frameCount * 0.01);
            let yOffset = wave * 20;
            let xOffset = wave * 10;

            // Map the wave to a brightness value (150 to 255)
            let brightness = map(wave, -1, 1, 150, 255);

            // --- DRAW THE GLOW ---
            fill(150, 0, 255, 50); // Semi-transparent purple
            ellipse(i - xOffset, j + yOffset, adjustedSize * 2.5); 

            // --- DRAW THE SHINY CORE ---
            fill(brightness, 200, 255); // Brighter purple/white-ish
            ellipse(i - xOffset, j + yOffset, adjustedSize + xOffset/3);
          }
        }
        
        // Reset blend mode so background(0) works correctly next frame
        blendMode(BLEND);
      }
      
      // Handle window resizing
      function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
      }
    </script>
  </body>
</html>
    `;

    // ✅ This return is INSIDE the fetch function where it belongs
    return new Response(downtimeHTML, {
      status: 503,
      headers: { 
        "content-type": "text/html",
        "cache-control": "no-store"
      }
    });
  },
};  // ✅ The export ends HERE - no returns after this!
