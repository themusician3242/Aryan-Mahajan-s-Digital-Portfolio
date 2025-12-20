document.addEventListener('DOMContentLoaded', () => {

    // Tooltips:
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    tooltipTriggerList.forEach(trigger => {
        new bootstrap.Tooltip(trigger, {
            customClass: trigger.dataset.bsCustomClass || ''
        });
    });
    
    const triggers = document.querySelectorAll('[title], [data-bs-title]');

    triggers.forEach(trigger => {
        new bootstrap.Tooltip(trigger, {
            customClass: trigger.dataset.bsCustomClass || ''
        });
    });

    // Mouseover Functionality For Icons
    const headerIcons = document.querySelectorAll(".header-icon");
    const navItems = document.querySelectorAll(".nav-item");
    const headerIconImages = [
        "Images/header-icons/icon-1.png",
        "Images/header-icons/icon-2.png",
        "Images/header-icons/icon-3.png",
        "Images/header-icons/icon-4.png",
        "Images/header-icons/icon-5.png",
    ]
    const headerIconImagesHoverable = [
        "Images/header-icons/icon-1-hover.png",
        "Images/header-icons/icon-2-hover.png",
        "Images/header-icons/icon-3-hover.png",
        "Images/header-icons/icon-4-hover.png",
        "Images/header-icons/icon-5-hover.png",
    ]

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
});
