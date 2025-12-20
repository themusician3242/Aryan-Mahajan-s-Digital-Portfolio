import { resumeVersions, resumeAbout, resumeCourseWork, resumeSkills } from "./resume-content.js";


window.addEventListener("DOMContentLoaded", () => {

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

});
