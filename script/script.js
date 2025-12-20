document.addEventListener('DOMContentLoaded', () => {

// Mouseover Functionality For Icons
const headerIcons = document.querySelectorAll(".header-icon");
const navItems = document.querySelectorAll(".nav-item");
const headerIconImages = [
  "images/header-icons/icon-1.png",
  "images/header-icons/icon-2.png",
  "images/header-icons/icon-3.png",
  "images/header-icons/icon-4.png",
  "images/header-icons/icon-5.png",
]
const headerIconImagesHoverable = [
  "images/header-icons/icon-1-hover.png",
  "images/header-icons/icon-2-hover.png",
  "images/header-icons/icon-3-hover.png",
  "images/header-icons/icon-4-hover.png",
  "images/header-icons/icon-5-hover.png",
]

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

// Creating A Fade In-Out Effect For THe Hero
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
    nextIndex = (previousIndex + 1) % heroBackgroundImages.length;
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



});
