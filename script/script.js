let currentSlide = 0;
const slides = document.querySelectorAll(".hero-image");
const dots = document.querySelectorAll(".dot");

function changeSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");

        if (i === index) {
            slide.classList.add("active");
            dots[i].classList.add("active");
        }
    });

    currentSlide = index;
}

// Auto-switch slides every 5 seconds
setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    changeSlide(nextSlide);
}, 5000);


// ✅ Ensure first slide is active by default
slides[0].classList.add("active");
dots[0].classList.add("active");