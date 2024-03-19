const images = ["Images/about-me-image-1.png", "Images/about-me-image-2.jpg", "Images/about-me-image-3.JPG", "Images/about-me-image-4.jpeg", "Images/about-me-image-5.png"];
        const activated_skills = ["Images/Skills%20Wheel%20Image/skill-1-activated.png",
            "Images/Skills%20Wheel%20Image/skill-2-activated.png",
            "Images/Skills%20Wheel%20Image/skill-3-activated.png",
            "Images/Skills%20Wheel%20Image/skill-4-activated.png",
            "Images/Skills%20Wheel%20Image/skill-5-activated.png",
            "Images/Skills%20Wheel%20Image/skill-6-activated.png",
            "Images/Skills%20Wheel%20Image/skill-7-activated.png",
            "Images/Skills%20Wheel%20Image/skill-8-activated.png"];

        const base_skills = ["Images/Skills%20Wheel%20Image/skill-1-base.png",
            "Images/Skills%20Wheel%20Image/skill-2-base.png",
            "Images/Skills%20Wheel%20Image/skill-3-base.png",
            "Images/Skills%20Wheel%20Image/skill-4-base.png",
            "Images/Skills%20Wheel%20Image/skill-5-base.png",
            "Images/Skills%20Wheel%20Image/skill-6-base.png",
            "Images/Skills%20Wheel%20Image/skill-7-base.png",
            "Images/Skills%20Wheel%20Image/skill-8-base.png"];

let initial_index = 0;

function flipImages() {
    const about_me_section = document.getElementById("about-me-section");
    about_me_section.style.backgroundImage = `url(${images[initial_index]})`;
    initial_index = (initial_index + 1) % images.length;
}
setInterval(flipImages, 3000);

document.getElementById("skill-reveal-text");
document.getElementById("skill-reveal-para");

function revealSkill1() {
    document.getElementById("skill-reveal-text").textContent = "Creativity";
    document.getElementById("skill-reveal-para").textContent = "Led innovative marketing campaigns at Starbucks, boosting customer engagement.\n" +
        "Enhanced camper experiences at Toronto Parks and Recreation camp with creative solutions.\n" +
        "Contributed inventive ideas to the G.G UofT Competition Team, driving success in case competitions.";
}
function revealSkill2() {
    document.getElementById("skill-reveal-text").textContent = "Problem Solving";
    document.getElementById("skill-reveal-para").textContent = "Resolved customer complaints at Starbucks using analytical thinking.\n" +
        "Managed unforeseen challenges at the summer camp, ensuring a positive experience.\n" +
        "Applied problem-solving techniques in developing effective marketing strategies.";
}
function revealSkill3() {
    document.getElementById("skill-reveal-text").textContent = "Communication";
    document.getElementById("skill-reveal-para").textContent = "Fostered positive relationships with customers at Starbucks through effective communication and customer connections.\n" +
        "Clearly communicated instructions at the summer camp, ensuring clarity among participants.\n" +
        "Presented clear and persuasive arguments during case competitions.";
}
function revealSkill4() {
    document.getElementById("skill-reveal-text").textContent = "Analytical Thinking";
    document.getElementById("skill-reveal-para").textContent = "Interpreted customer feedback at Starbucks to identify areas for improvement.\n" +
        "Conducted market analyses and evaluated strategies during case competitions.\n" +
        "Assessed camper performance at the summer camp, informing program enhancements.";
}
function revealSkill5() {
    document.getElementById("skill-reveal-text").textContent = "Teamwork";
    document.getElementById("skill-reveal-para").textContent = "Collaborated effectively with team members at Starbucks to deliver exceptional service.\n" +
        "Worked with camp counselors to plan and execute engaging activities at the summer camp.\n" +
        "Contributed as a team player in case competitions, leveraging individual strengths.\n";
}
function revealSkill6() {
    document.getElementById("skill-reveal-text").textContent = "Adaptability";
    document.getElementById("skill-reveal-para").textContent = "Quickly learned and mastered new tasks at Starbucks to adjust to changing demands.\n" +
        "Adapted to diverse challenges during summer camp activities, displaying resilience.\n" +
        "Navigated diverse scenarios during case competitions, showcasing adaptability.";
}
function revealSkill7() {
    document.getElementById("skill-reveal-text").textContent = "Technical Proficiency";
    document.getElementById("skill-reveal-para").textContent = "Gained proficiency in programming languages and web development tools through self-learning.\n" +
        "Applied technical skills in data analysis and machine learning.\n" +
        "Utilized technical expertise to enhance camp activities and presentations.";
}
function revealSkill8() {
    document.getElementById("skill-reveal-text").textContent = "Leadership";
    document.getElementById("skill-reveal-para").textContent = "Gained proficiency in programming languages and web development tools through self-learning.\n" +
        "Applied technical skills in data analysis and machine learning.\n" +
        "Utilized technical expertise to enhance camp activities and presentations.";
}
