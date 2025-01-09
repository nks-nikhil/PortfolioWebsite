// Dynamic Projects
const projects = [
    { title: "Personal Portfolio", description: "A personal portfolio website built with HTML, CSS, and JavaScript.", link: "https://github.com/yourname/portfolio" },
    { title: "Weather App", description: "Real-time weather updates using API.", link: "https://github.com/yourname/weather-app" },
    { title: "Task Manager", description: "A task manager app to manage daily tasks and projects.", link: "https://github.com/yourname/task-manager" },
  ];
  
  const projectsGrid = document.getElementById("projects-grid");
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" class="btn">View Project</a>
    `;
    projectsGrid.appendChild(card);
  });
  
  // Dynamic Skills
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Kotlin", level: 80 },
    { name: "Git & GitHub", level: 70 },
  ];
  
  const skillsGrid = document.getElementById("skills-grid");
  skills.forEach(skill => {
    const card = document.createElement("div");
    card.classList.add("skill-card");
    card.innerHTML = `
      <h3>${skill.name}</h3>
      <div class="progress-bar">
        <div class="progress" style="width: ${skill.level}%"></div>
      </div>
    `;
    skillsGrid.appendChild(card);
  });
  
  // Theme Toggle
  const themeToggle = document.createElement('button');
  themeToggle.id = 'theme-toggle';
  themeToggle.innerText = "🌙";
  document.body.appendChild(themeToggle);
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
  
  // Load saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  
  // AOS Library Initialization
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });
  
  // Form Validation and Submission
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert("Message sent! I'll get back to you soon.");
      document.getElementById('contact-form').reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
  
