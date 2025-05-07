//Aside

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
        if(navList[j].querySelector("a").classList.contains("active"))
        {
            addBackSection(j);
            // allSection[j].classList.add("back-section");
        }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth < 1200)
    {
        asideSectionTogglerBtn();
    }
  });
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for(let i=0; i<totalSection;i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split('#')[1];
    document.querySelector("#" + target).classList.add("active")
}

//side navtoggler
function updateNav(element)
{
    for(let i=0;i<totalNavList;i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click",function()
{
    const sectionIndex = this.getAttribute("data-section-index");

    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn =  document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for(let i=0; i<totalSection;i++)
    {
        allSection[i].classList.toggle("open");
    }
}


function downloadCV(event) {
  event.preventDefault();

  const success = document.getElementById('successMessage');

  const a = document.createElement('a');
   a.href = `${window.location.origin}/My_Portfolio/assets/resume/sumit_kumar_mandal.pdf`;

  a.setAttribute('download', 'sumit_kumar_mandal.pdf');
  document.body.appendChild(a);
  a.click();
  a.remove();

  // Show success and confetti
  success.style.display = 'block';
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    success.style.display = 'none';
  }, 3000);
}


  // Wait for the DOM to fully load

  
  const overlay = document.getElementById('overlay');

  document.querySelectorAll('.view-certificate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const certId = btn.getAttribute('data-cert');
      const popup = document.getElementById(certId);
      if (popup) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
      }
    });
  });

  document.querySelectorAll('.certificate-popup .close-btn').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeBtn.parentElement.style.display = 'none';
      overlay.style.display = 'none';
    });
  });

  overlay.addEventListener('click', () => {
    document.querySelectorAll('.certificate-popup').forEach(popup => {
      popup.style.display = 'none';
    });
    overlay.style.display = 'none';
  });


  


 



  const modal = document.getElementById('project-modal');
  const closeBtn = document.querySelector('.close-project-btn');

  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('project-title');
  const modalDescription = document.getElementById('project-description');
  const modalDescriptionText = document.getElementById('description-text');
  const modalSkills = document.getElementById('project-skills');
  const modalTools = document.getElementById('project-tools');
  const toggleBtn = document.getElementById("toggle-description-btn");
  const githubBtn = document.querySelector('.github-btn');

  let currentImageIndex = 0;
  let currentImageArray = [];
  let sliderInterval;

  const projectData = {
    1: {
      img: [
        'image/uber-auto/Screenshot 2025-05-06 102206.png',
        'image/uber-auto/Screenshot 2025-05-06 102228.png',
        'image/uber-auto/Screenshot 2025-05-06 102404.png',
        'image/uber-auto/Screenshot 2025-05-06 102522.png',
        'image/uber-auto/Screenshot 2025-05-06 103233.png',
        'image/uber-auto/Screenshot 2025-05-06 102537.png',
        'image/uber-auto/Screenshot 2025-05-06 102628.png',
        'image/uber-auto/Screenshot 2025-05-06 102646.png',
        'image/uber-auto/Screenshot 2025-05-06 103104.png',
        'image/uber-auto/Screenshot 2025-05-06 103036.png'
      ],
      title: 'Uber Auto Booking App (Frontend)',
      description: `
        A full-featured Uber-style Auto Booking platform with dual-panel access for **Customers** and **Captains**.
        
        - **Customer Panel**: Includes login/signup, location selection with Google Maps integration, vehicle type selection (auto, car, etc.), fare estimation, and booking functionality.
        - **Captain Panel**: Allows login/signup, captain profile management, viewing earnings, tracking working hours, and accepting bookings.
        
        This project offers a responsive, user-friendly frontend designed for real-world auto booking workflows with dynamic UI behavior and clean design.
      `,
      skills: 'HTML, Tailwind CSS, JavaScript, React',
      tools: 'VS Code, Git, Postman',
      github: 'https://github.com/sumitmandal330/uber_auto_frontend'
    },
    
    2: {
      img: [
        'image/uber-auto/Screenshot 2025-05-06 103104.png',
        'image/uber-auto/Screenshot 2025-05-06 102628.png',
        'image/uber-auto/Screenshot 2025-05-06 102646.png'
      ],
      title: 'Uber Auto Booking App (Backend)',
      description: `
        Developed the backend infrastructure for the Uber-style Auto Booking platform, supporting both **Customer** and **Captain** panels.
    
        - **Authentication System**: Secure login and registration APIs for customers and captains.
        - **Customer Features**: Add new customers, select pickup/drop location, vehicle type, fetch fare estimates via API.
        - **Captain Features**: Add new captains, manage bookings, track earnings, and working hours.
        - **APIs & Database**: RESTful APIs built with Express.js and data stored using MongoDB, including geolocation and booking logic.
    
        Ensured secure role-based access and efficient communication between frontend and backend using robust API endpoints.
      `,
      skills: 'Node.js, Express.js, MongoDB',
      tools: 'VS Code, Git, Postman',
      github: 'https://github.com/sumitmandal330/uber_auto'
    },
    
    3: {
      img: [
        'image/Task-scheduling/Screenshot 2025-05-06 103521.png',
        'image/Task-scheduling/Screenshot 2025-05-06 103612.png',
        'image/Task-scheduling/Screenshot 2025-05-06 103720.png',
        'image/Task-scheduling/Screenshot 2025-05-06 103733.png',
        'image/Task-scheduling/Screenshot 2025-05-06 103901.png'
      ],
      title: 'Task Scheduling App',
      description: `
        A feature-rich task management application designed for organizing and tracking daily workflows efficiently.
    
        - 📝 **Create & Edit Tasks**: Users can add, update, and delete tasks with ease.
        - 📊 **Dashboard Analytics**: Visual representation of task statuses—To-Do, In Progress, and Completed—using interactive graphs.
        - 🔔 **Smart Notifications**: Real-time reminders for scheduled tasks and status updates.
        - 📨 **Inbox & Home Views**: Streamlined navigation with separate views for new messages and dashboard overview.
        
        The app is built using Angular.js with dynamic UI updates and optimized task filtering to enhance productivity.
      `,
      skills: 'HTML, CSS, JavaScript, Angular.js',
      tools: 'VS Code, Git, Graph.js',
      github: 'https://github.com/sumitmandal330/Taskmanagement'
    },

    4: {
      img: [
        'image/Hostel Management system/image-39.webp'
      ],
      title: 'Hostel Management System',
      description: `
        A **backend-only Hostel Management System** developed in Python to handle core hostel administrative functionalities via command-line interface (CLI).
    
        ⚙️ **Core Functionalities**:
        - 👨‍🎓 Add, update, and manage **student information**
        - 👪 Maintain **parent/guardian details**
        - 🏠 Record and update **room allocation data**
        - 📝 Track **hostel attendance**
        - 🛫 Process and manage **student leave applications**
        - 🔄 Enable **real-time updates** to student records
    
         This project is built without a frontend interface and focuses purely on the backend architecture, data operations, and user interaction via terminal inputs.
    
         **Data Storage**: Handled efficiently using **SQL**, ensuring structured data management and retrieval.
      `,
      skills: 'Python, SQL',
      tools: 'VS Code, Git',
      github: 'https://github.com/sumitmandal330/Hostel_Management_System'
    },
    
    

    5: {
      img: [
        'image/amazon/Screenshot 2025-05-06 104451.png',
        'image/amazon/Screenshot 2025-05-06 104509.png'
      ],
      title: 'Amazon UI Clone',
      description: `
        A pixel-perfect, fully responsive clone of Amazon's homepage UI built with clean and modern HTML and CSS.
    
        - 🛍️ **Homepage Design**: Accurately replicates Amazon’s layout, navigation bar, product sections, and footer.
        - 📱 **Mobile-Friendly**: Optimized for all screen sizes with fluid responsiveness and flexible layouts.
        - 💡 **Focus on UI/UX**: Emphasis on visual fidelity, consistent spacing, and reusable components for real-world frontend practice.
        
        This project showcases a strong understanding of layout structuring, flexbox/grid, and responsive design best practices.
      `,
      skills: 'HTML, CSS',
      tools: 'VS Code, Git',
      github: 'https://github.com/sumitmandal330/Amazon_clone'
    }
    ,
    6: {
      img: 'image/modlify/Screenshot 2025-05-06 104155.png',
      title: 'Modlify – Smart Clothing Customizer',
      description: `
        Designed and developed a fully responsive shopping interface for a fashion platform where users can personalize their clothing choices based on unique attributes.
    
        - 🎨 **Personalized Styling**: Users can customize by skin tone, body type, eye color, clothing type, and gender.
        - 🧥 **Smart Preview Options**: Dynamic image updates reflect user preferences for a real-time tailored experience.
        - 📱 **Mobile-First Design**: Ensures smooth, intuitive performance across all device sizes.
    
        This project reflects the power of HTML and CSS in building user-centric interfaces without any frameworks, focusing on interaction, usability, and design.
      `,
      skills: 'HTML, CSS, Bootstrap',
      tools: 'VS Code, Git',
      github: 'https://github.com/sumitmandal330/Task_Scheduling'
    }
    ,

    7: {
      img: [
        'image/myntra/Screenshot 2025-05-06 104333.png',
        'image/myntra/Screenshot 2025-05-06 104355.png'
      ],
      title: 'Myntra UI Clone',
      description: `
        A clean and responsive UI clone of the Myntra eCommerce platform, built entirely using HTML and CSS.
    
        - 🛒 **Modern Layout**: Recreated the homepage design with header, banners, product grids, and promotional sections.
        - 📱 **Responsive Design**: Seamlessly adapts to various screen sizes—from mobile to desktop.
        - 🎨 **Pixel-Perfect Styling**: Focused on accurate alignment, typography, and visual consistency to reflect real-world design precision.
        
        This project highlights proficiency in frontend structure, media queries, and layout techniques used in modern eCommerce websites.
      `,
      skills: 'HTML, CSS',
      tools: 'VS Code, Git',
      github: 'https://github.com/sumitmandal330/Myntra_clone'
    }
    
  };


  function startSlider(images) {
    currentImageArray = Array.isArray(images) ? images : [images];
    currentImageIndex = 0;
    modalImage.src = currentImageArray[currentImageIndex];

    if (sliderInterval) clearInterval(sliderInterval);

    if (currentImageArray.length > 1) {
      sliderInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % currentImageArray.length;
        modalImage.src = currentImageArray[currentImageIndex];
      }, 2500); // change image every 2.5s
    }
  }

  document.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.project;
      const data = projectData[id];

      startSlider(data.img);

      modalTitle.textContent = data.title;
      modalDescriptionText.textContent = data.description;
      modalSkills.textContent = data.skills;
      modalTools.textContent = data.tools;
      githubBtn.href = data.github;

      modalDescription.classList.add("short");
      toggleBtn.textContent = "See more";
      modal.style.display = 'flex';
    });
  });

  toggleBtn.addEventListener("click", () => {
    modalDescription.classList.toggle("short");
    toggleBtn.textContent = modalDescription.classList.contains("short") ? "See more" : "See less";
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    clearInterval(sliderInterval);
  });

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
      clearInterval(sliderInterval);
    }
  });