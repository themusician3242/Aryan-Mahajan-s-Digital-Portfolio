import { resumeVersions, resumeAbout, resumeCourseWork, resumeSkills } from "./resume-content.js";

window.addEventListener('DOMContentLoaded', () => {

  const page = document.body.dataset.page;

  switch (page) {
    case "index":
      runIndexPage();
      break;
    case "resume":
      runResumePage();
      break;
    case "story":
      runStoryPage();
      break;
    case "gallery":
      runGalleryPage();
      break;
    /* case "services":
      runServicesPage(); */
    case "login":
      runLoginPage();
    default:
  }

// Mouseover Functionality For Icons
const headerIcons = document.querySelectorAll(".header-icon");
const navItems = document.querySelectorAll(".nav-item");
const headerIconImages = [
  "./images/header-icons/icon-1.png",
  "./images/header-icons/icon-2.png",
  "./images/header-icons/icon-3.png",
  "./images/header-icons/icon-4.png",
  "./images/header-icons/icon-5.png",
  "./images/header-icons/icon-6.png",
  "./images/header-icons/icon-7.png",
];

const headerIconImagesHoverable = [
  "./images/header-icons/icon-1-hover.png",
  "./images/header-icons/icon-2-hover.png",
  "./images/header-icons/icon-3-hover.png",
  "./images/header-icons/icon-4-hover.png",
  "./images/header-icons/icon-5-hover.png",
  "./images/header-icons/icon-6-hover.png",
  "./images/header-icons/icon-7-hover.png",

];

  navItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      headerIcons.forEach((icon, iconIndex) => {
        if (iconIndex === index) {
          icon.src = headerIconImagesHoverable[index];
        }
      });
    });
    item.addEventListener('mouseout', () => {
      headerIcons.forEach((icon, iconIndex) => {
        if (iconIndex === index) {
          icon.src = headerIconImages[index];
        }
      });
    });
  });

function runIndexPage() {
  // Creating A Fade In-Out Effect For The Hero
  const layerTop = document.querySelector('.layer-top');
  const layerBottom = document.querySelector('.layer-bottom');

  const heroBackgroundImages = [
    "images/backgrounds/image-1.jpg",
    "images/backgrounds/image-2.jpg",
    "images/backgrounds/image-3.jpg",
    "images/backgrounds/image-4.jpg",
    "images/backgrounds/image-5.jpg",
    "images/backgrounds/image-6.jpg",
    "images/backgrounds/image-7.jpg",
    "images/backgrounds/image-8.jpg"
  ];

  let previousIndex = 0;

  function switchImages() {
    let nextIndex = (previousIndex + 1) % heroBackgroundImages.length;
    console.log(`Fading In Image: ${previousIndex}, ${nextIndex}`);

    layerBottom.style.backgroundImage = `url("${heroBackgroundImages[nextIndex]}")`;
    layerTop.style.opacity = 0;
    layerBottom.style.opacity = 1;

    setTimeout(() => {
      layerTop.style.backgroundImage = `url("${heroBackgroundImages[nextIndex]}")`;
      layerTop.style.opacity = 1;

      previousIndex = nextIndex;
    }, 3000);
  }

  setInterval(switchImages, 6000);

  const summary = document.getElementById("summary");
  const dynamicBackground3 = document.getElementById("dynamicBackground3");

  // Loop through each element in the NodeList
  summary.addEventListener("mouseenter", () => {
      dynamicBackground3.classList.add("fade-in");
    });
  summary.addEventListener("mouseleave", () => {
    dynamicBackground3.classList.remove("fade-in");
  });
}

function runResumePage() { 
        // Dropdown logic
        const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener("click", () => {
                const parent = toggle.closest(".dropdown-item");
                parent.classList.toggle("open");
            });
        });
    
        // Resume Switcher
        const radios = document.querySelectorAll(".dropdown-content input[type='radio']");
        const aboutText = document.getElementById("resume-about-section");
        const courseworkText = document.getElementById("resume-relevant-coursework");
        const skillsText = document.getElementById("resume-skills");
    
        // Main Resume Loader
        function changeResume(key) {
            aboutText.innerHTML = resumeAbout[key];
            courseworkText.innerHTML = resumeCourseWork[key];
            skillsText.innerHTML = resumeSkills[key];
        }
    
        radios.forEach(radio => {
            radio.addEventListener("change", () => {
                const key = radio.value;                   // extract selected resume type
                changeResume(key);                         // update sections
            });
        });
    
        // SIDEBAR TOGGLE — fixed
        const resumeSidebar = document.getElementById("resume-sidebar");
        const resume_toggleBtn = document.getElementById("toggleResumeSidebar");
    
        resume_toggleBtn.addEventListener("click", () => {
            resumeSidebar.classList.toggle("collapsed");
    
            resume_toggleBtn.innerHTML = resumeSidebar.classList.contains("collapsed")
                ? `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" class="bi bi-arrow-right-square-fill"
            viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm6.5 3.5a.5.5 0 0 0-.707.707L7.586 8H3.5a.5.5 0 0 0 0 1h4.086l-1.793 1.793a.5.5 0 0 0 .707.707l3-3a.5.5 0 0 0 0-.707l-3-3Z"/>
        </svg>
      `
                : `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" class="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16">
          <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2ZM9.5 11.5a.5.5 0 0 0 .707-.707L8.414 9H12.5a.5.5 0 0 0 0-1H8.414l1.793-1.793a.5.5 0 0 0-.707-.707l-3 3a.5.5 0 0 0 0 .707l3 3Z"/>
        </svg>
      `;
        });
}

function runStoryPage() { 
    // Fading Backgrounds (ID-threshold mapped to backgroundList index)
    const dynamicBackground1 = document.getElementById('dynamicBackground1');
    const dynamicBackground2 = document.getElementById('dynamicBackground2');
    const backgrounds = [dynamicBackground1, dynamicBackground2];
    const overlayGradient =
      "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35))";

    let backgroundIndex = 0;

    const backgroundList = [
      "images/story/backgrounds/image-1.jpg",
      "images/story/backgrounds/image-2.png",
      "images/story/backgrounds/image-3.jpg",
      "images/story/backgrounds/image-4.jpg",
      "images/story/backgrounds/image-5.webp",
      "images/story/backgrounds/image-6.webp",
      "images/story/backgrounds/image-7.png",
      "images/story/backgrounds/image-8.jpeg",
      "images/story/backgrounds/image-9.jpg",
      "images/story/backgrounds/image-10.avif",
      "images/story/backgrounds/image-11.jpg",
      "images/story/backgrounds/image-12.webp",
      "images/story/backgrounds/image-13.png",
      "images/story/backgrounds/image-14.jpg",
    ];

    const thresholds = [
      "opening",
      "timeline1",
      "timeline2",
      "timeline3",
      "timeline4",
      "timeline5",
      "timeline6",
      "timeline7",
      "timeline8",
      "present1",
      "present2",
      "present3",
      "present4",
      "present5"
    ];

    // Build: subsection id -> background index
    const idToBgIndex = new Map(thresholds.map((id, idx) => [id, idx]));

    let activeLayer = 0;
    let locked = false;

    // Initialize first background (opening -> index 0)
    backgrounds[0].style.backgroundImage = `url("${backgroundList[0]}")`;
    backgrounds[0].classList.remove("fade-out");
    backgrounds[1].classList.add("fade-out");

    function fadeToIndex(targetIndex) {
      if (locked || targetIndex === backgroundIndex) return;

      locked = true;

      const incoming = backgrounds[1 - activeLayer];
      const outgoing = backgrounds[activeLayer];

      incoming.style.background =
        `${overlayGradient}, url("${backgroundList[targetIndex]}")`;

      incoming.classList.remove("fade-out");
      outgoing.classList.add("fade-out");

      activeLayer = 1 - activeLayer;
      backgroundIndex = targetIndex;

      setTimeout(() => {
        locked = false;
      }, 1200);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          const idx = idToBgIndex.get(id);

          // Only change if it's one of your declared threshold IDs and has a matching background
          if (typeof idx === "number" && backgroundList[idx]) {
            fadeToIndex(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -49% 0px",
        threshold: 0
      }
    );

    // Observe only the threshold sections by id (fast + exact)
    thresholds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    /*
    const infoTitle = {
      "who": "By Whom Is It Used?",
      "how": "How Is It Used?",
      "why": "Why Is It Used?"
    };

    const principlesnavBarBrandText = {
      "first-principles": "First Principles",
      "mental-model-stacking": "Mental Model Stacking",
      "ooda-loop": "The OODA Loop",
      "creative-destruction": "Schumpeter's Theory of Creative Destruction",
      "bayesian": "Bayesian Inferencing",
      "hypothesis-testing": "Neyman Pearson's Hypothesis Testing Framework",
      "adversarial-thinking": "Adversarial Thinking",
      "cognitive-load-management": "Cognitive Load Management",
      "behavioral-biases": "Behavioral Biases",
      "antifragility": "Antifragility"
    };

    const infoText = {
      "first-principles": {
        "who": "Hedge fund managers, elite negotiators, senior engineers, and theoretical physicists rely on First Principles thinking because their work requires unconventional, assumption-free reasoning. In environments like market volatility, spacecraft engineering, or crisis negotiations, inherited assumptions can distort judgment — so professionals in these fields break problems down into their fundamental truths.",
        "how": "First Principles is used by stripping a problem down to its basic, indisputable facts — removing tradition, standard heuristics, and unproven assumptions. Practitioners repeatedly ask: 'What must be true?' and 'What can be disproven?' Then they rebuild the solution from the ground up using validated truths, enabling breakthroughs that traditional thinking would never reach.",
        "why": "It is used because assumptions limit innovation. Most ideas fail not due to lack of intelligence, but because they rely on hidden constraints. First Principles thinking eliminates these blind spots, exposes root causes, and reveals entirely new pathways for innovation, allowing individuals to outperform standard reasoning in science, business, and strategy."
      },

      "mental-model-stacking": {
        "who": "Used by multidisciplinary thinkers such as management consultants, investors, systems engineers, and high-level strategists who need to integrate insights across psychology, economics, engineering, biology, statistics, and philosophy. These professionals avoid 'single-lens thinking' and instead rely on a toolkit of frameworks to process complexity.",
        "how": "Mental Model Stacking works by layering multiple frameworks onto the same problem — probabilities, incentives, game theory, supply/demand, second-order thinking, and more — to see different angles simultaneously. Each model pressure-tests the others, revealing contradictions, hidden variables, and deeper causal forces that a single model would miss.",
        "why": "It is used because no single framework can capture reality accurately. Problems in the real world are multidimensional — biological, economic, psychological, statistical — so using only one lens creates blind spots. Stacking models reduces these blind spots and produces more robust, creative, and reliable decisions."
      },

      "ooda-loop": {
        "who": "Used by fighter pilots, military commanders, security analysts, hedge fund traders, emergency responders, and business leaders operating in fast-changing, high-stakes environments where speed and adaptability determine success.",
        "how": "The OODA Loop is executed by rapidly cycling through Observe, Orient, Decide, and Act — then repeating the cycle as new information emerges. The goal is to adapt faster than the environment or your opponent. Each loop refines your understanding and sharpens your next action.",
        "why": "It is used because static plans collapse under uncertainty. The OODA Loop wins by out-adapting competitors: making faster decisions, updating faster, and disrupting an opponent's ability to think clearly. It transforms decision-making from rigid planning into a living, responsive system."
      },

      "creative-destruction": {
        "who": "Economists, innovators, product designers, venture capitalists, and disruptive entrepreneurs use Creative Destruction to understand and exploit the cycles of innovation that reshape industries. Companies like Tesla, Apple, NVIDIA, and Amazon actively apply this model to outpace incumbents.",
        "how": "Creative Destruction works by identifying outdated systems, technologies, or processes and intentionally replacing them with superior solutions. Instead of improving the old, you dismantle it — creating room for something fundamentally better.",
        "why": "It is used because innovation requires displacement. Industries evolve when the new destroys the old. Markets reward the bold — those willing to cannibalize their own products, disrupt existing paradigms, and rebuild from scratch."
      },

      "bayesian": {
        "who": "Data scientists, AI researchers, quantitative analysts, poker players, epidemiologists, and intelligence agencies use Bayesian reasoning to update beliefs under uncertainty and make probability-driven decisions.",
        "how": "Bayesian Inferencing works by assigning a prior probability, absorbing new evidence, and adjusting that probability into a posterior. With every new data point, your belief becomes sharper, more accurate, and more aligned with reality.",
        "why": "It is used because real-world information arrives gradually, incompletely, and often noisily. Bayesian thinking prevents overconfidence, underreaction, and the misuse of intuition — replacing them with mathematically grounded updates that improve decision quality with every new piece of evidence."
      },

      "hypothesis-testing": {
        "who": "Scientists, analysts, product teams, financial researchers, pharmaceutical companies, and economists use hypothesis testing to validate decisions with statistical rigor rather than intuition or anecdote.",
        "how": "The Neyman-Pearson framework compares a null hypothesis against an alternative hypothesis, using significance levels and power to minimize Type I and Type II errors. This ensures that conclusions drawn are statistically defensible rather than random outcomes.",
        "why": "It is used because humans are notoriously prone to false positives, false negatives, and confirmation bias. Hypothesis testing imposes discipline, ensuring that only real, meaningful effects are acted upon while false signals are rejected."
      },

      "adversarial-thinking": {
        "who": "Cybersecurity engineers, military planners, competitive strategists, intelligence analysts, negotiation experts, and elite game theorists use adversarial thinking to build systems resilient to intelligent attackers.",
        "how": "Adversarial Thinking is applied by analyzing problems from the viewpoint of an opponent — identifying weaknesses, predicting their counter-moves, probing vulnerabilities, and pressure-testing strategies as if you were trying to break them.",
        "why": "It is used because most failures come from ignoring hostile forces — competitors, attackers, market shifts, or even unforeseen human errors. Thinking adversarially ensures your system cannot be easily manipulated, exploited, or defeated."
      },

      "cognitive-load-management": {
        "who": "Executives, students, surgeons, pilots, programmers, athletes, and anyone under high mental workload use cognitive load strategies to protect decision-making clarity and maintain peak performance.",
        "how": "Cognitive Load Management works by reducing unnecessary mental tasks, structuring information flows, batching decisions, offloading memory, and protecting attention bandwidth for high-value work.",
        "why": "It is used because the brain has limited processing capacity. When overwhelmed, accuracy drops, creativity declines, mistakes increase, and stress skyrockets. Managing cognitive load preserves mental precision under pressure."
      },

      "behavioral-biases": {
        "who": "Investors, psychologists, policymakers, marketers, UX designers, and risk managers use behavioral bias frameworks to predict and correct irrational human behavior.",
        "how": "Behavioral Bias analysis involves identifying systematic distortions in judgment — anchoring, loss aversion, confirmation bias, recency bias — and designing systems or decisions that counteract these distortions.",
        "why": "It is used because humans are predictably irrational. Recognizing biases leads to better decisions, better predictions of human behavior, and systems that avoid errors caused by emotion, heuristics, or cognitive shortcuts."
      },

      "antifragility": {
        "who": "Traders, entrepreneurs, military strategists, systems architects, evolutionary biologists, and high-performance athletes rely on antifragility to gain from stressors rather than merely survive them.",
        "how": "Antifragility works by designing systems that benefit from volatility, randomness, and failure — through diversification, redundancy, optionality, stress-testing, and constant iteration. Pressure becomes fuel rather than damage.",
        "why": "It is used because resilience is not enough. In chaotic environments, the systems that merely survive stagnate, while antifragile systems adapt, improve, and accelerate. They grow stronger precisely because of the challenges they face."
      }
    };

    const carouselEl = document.getElementById("principles-carousel");


    if (carouselEl) {
      const activeItem = carouselEl.querySelector(".carousel-item.active");
      let currentSlide = activeItem ? activeItem.getAttribute("data-slide") : "first-principles";
      let lastSelectedSection = "1";

      // Helper: show one section and hide all others using CSS classes
      function showSection(slideKey, section) {
        const targetId = `${slideKey}-section-${section}`;
        const activeCarouselItem = carouselEl.querySelector('.carousel-item.active');
        const whoHowWhyControls = document.getElementById('who-how-why-controls');
        const principlesNavBarBrand = document.getElementById('principles-navbar-brand');

        if (!activeCarouselItem) return;

        // Update navbar text
        if (principlesNavBarBrand) {
          principlesNavBarBrand.textContent = principlesnavBarBrandText[slideKey] || "";
        }

        // Remove active-section class from all sections in this carousel item
        const sectionsInActiveSlide = activeCarouselItem.querySelectorAll(".principles-section");
        sectionsInActiveSlide.forEach(sec => {
          sec.classList.remove('active-section');
        });

        // Add active-section class to target section
        const target = document.getElementById(targetId);
        if (target) {
          target.classList.add('active-section');
        }

        // Show Who/How/Why ONLY for section 2
        if (whoHowWhyControls) {
          if (section === "2") {
            whoHowWhyControls.style.display = "flex";  // or "block"
          } else {
            whoHowWhyControls.style.display = "none";
          }
        }
      }

      // Initial state
      showSection(currentSlide, lastSelectedSection);

      // Navbar clicks
      document.querySelectorAll(".principles-header").forEach(item => {
        item.addEventListener("click", () => {
          const section = item.getAttribute("data-section");
          lastSelectedSection = section;
          showSection(currentSlide, lastSelectedSection);

          // Close dropdown
          const navbarCollapse = document.getElementById("principles-navBar-dropdown");
          if (navbarCollapse) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) bsCollapse.hide();
          }
        });
      });

      // Carousel slide event
      carouselEl.addEventListener("slid.bs.carousel", (e) => {
        const active = e.relatedTarget || carouselEl.querySelector(".carousel-item.active");
        if (!active) return;

        currentSlide = active.getAttribute("data-slide");
        showSection(currentSlide, lastSelectedSection);
      });

      // Who/How/Why buttons
      document.querySelectorAll('.principles-button-query').forEach(btn => {
        btn.addEventListener('click', () => {
          const mode = btn.getAttribute('data-mode');
          const activeSlide = carouselEl.querySelector('.carousel-item.active');
          if (!activeSlide) return;

          const slideKey = activeSlide.getAttribute('data-slide');
          const text = infoText[slideKey]?.[mode];
          const title = infoTitle[mode];

          const box = activeSlide.querySelector('.principles-info-box');
          const titleBox = activeSlide.querySelector('.principles-info-title');

          if (box && text) box.textContent = text;
          if (titleBox && title) titleBox.textContent = title;
        });
      });
    }

    // Core Subcomponents expanders
    document.querySelectorAll('.toggle-expand').forEach(btn => {
      btn.addEventListener('click', () => {
        const cardId = btn.getAttribute('data-target');
        const card = document.getElementById(cardId);
        if (!card) return;

        const expandContent = card.querySelector('.expand-content');
        if (!expandContent) return;

        card.classList.toggle('expanded');
        expandContent.classList.toggle('expanded');
      });
    });
    */

    // Progress bar logic
    document.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      document.getElementById("progressBar").style.width = progress + "%";

      // Highlight active section
      const sections = document.querySelectorAll("section, h1[id]");
      let current = "";

      sections.forEach(sec => {
        const top = sec.offsetTop - 200;
        if (scrollTop >= top) current = sec.id;
      });

      document.querySelectorAll("#sectionNav a").forEach(link => {
        link.style.fontWeight =
          link.getAttribute("href").substring(1) === current
            ? "bold"
            : "normal";
      });
    });
    

    // Collapse toggle
    const sidebar = document.getElementById("progressSidebar");
    const toggleBtn = document.getElementById("toggleSidebar");

    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      toggleBtn.innerHT = sidebar.classList.contains("collapsed") ?
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
      <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
    </svg>` :
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
    </svg>`;
    });
}

function runGalleryPage() {
  // Search Functionality For Gallery.HTML
  const searchInput = document.getElementById('searchInput');
  const projectCards = document.querySelectorAll('.project-card');
  const noResults = document.querySelector('.no-results');

  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();
    let visibleCount = 0;

    projectCards.forEach(card => {
      const title = card.querySelector('.project-title').textContent.toLowerCase();
      const description = card.querySelector('.project-description').textContent.toLowerCase();
      const category = card.querySelector('.project-category').textContent.toLowerCase();

      const matches = title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        category.includes(searchTerm);

      if (matches) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (visibleCount === 0) {
      noResults.classList.remove('hidden');
    } else {
      noResults.classList.add('hidden');
    }
  });

  const categoryHeaders = document.querySelectorAll('.category-header');
  const searchResultsHeader = document.getElementById('searchResultsHeader');

  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();
    let visibleCount = 0;

    // Show/hide cards
    projectCards.forEach(card => {
      const title = card.querySelector('.project-title').textContent.toLowerCase();
      const description = card.querySelector('.project-description').textContent.toLowerCase();
      const category = card.querySelector('.project-category').textContent.toLowerCase();

      const matches = title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        category.includes(searchTerm);

      if (matches) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (searchTerm === "") {
      categoryHeaders.forEach(h => h.classList.remove('hidden'));
      searchResultsHeader.classList.add('hidden');
      noResults.classList.add('hidden');
      return;
    }

    categoryHeaders.forEach(h => h.classList.add('hidden'));
    searchResultsHeader.classList.remove('hidden');

    if (visibleCount === 0) {
      noResults.classList.remove('hidden');
    } else {
      noResults.classList.add('hidden');
    }
  });
}

function runServicesPage() {

}

function runLoginPage() { 
  const username = "themusician3242@gmail.com";
  const password = "lifeIsAHighway1390";
  const passwordInput = document.getElementById("adminPassword");
  const usernameInput = document.getElementById("adminUsername");
  const loginButton = document.getElementById("loginBtn"); // Assuming you have a button
  const textIncorrect = document.querySelector(".text-incorrect");

  loginButton.addEventListener("click", () => {
    // You must check .value, otherwise you are comparing an HTML element to a string
    if (passwordInput.value === password && usernameInput.value === username) {
      textIncorrect.textContent = "Success!"
      textIncorrect.style.color = "lightgreen";

      setTimeout(() => {
        window.location.href = "admin.html";
      }, 1000)
      // Redirect or show content here
    } else if (passwordInput.value === '' || usernameInput.value === '') { 
        textIncorrect.textContent = "Please enter a value for either the username or the password."
    }
    else {
      textIncorrect.textContent = "Username or password is incorrect. Please try again."
    }
  });

  const togglePasswordBtn = document.querySelector("#togglePassword");

  // Define your SVG strings once so the code stays clean
  const eyeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>`;

  const eyeSlashIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                    </svg>`;

  togglePasswordBtn.addEventListener("click", (e) => {
    // Prevent the button from trying to submit the form
    e.preventDefault();

    // 1. Toggle the type
    const isPassword = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isPassword ? "text" : "password");

    // 2. Update the innerHTML of the button
    togglePasswordBtn.innerHTML = isPassword ? eyeSlashIcon : eyeIcon;
  });
}
  
});
