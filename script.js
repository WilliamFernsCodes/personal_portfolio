const projectsContainer = document.querySelector(".projects-container");
const viewAllButton = document.getElementById("view-all-projects-btn");

class ScreenSizes {
  #mobileWidth;
  #tabletWidth;
  #desktopWidth;

  constructor(mobileWidth = 550, tabletWidth = 850, desktopWidth = 1000) {
    this.windowWidth = window.innerWidth;
    this.#mobileWidth = mobileWidth;
    this.#tabletWidth = tabletWidth;
    this.#desktopWidth = desktopWidth;
  }

  isMobile() {
    return this.windowWidth <= this.#mobileWidth;
  }

  isDesktop() {
    return this.windowWidth >= this.#desktopWidth;
  }

  isMediumWidth() {
    return (
      this.windowWidth > this.#mobileWidth &&
      this.windowWidth < this.#tabletWidth
    );
  }

  isTabletWidth() {
    return (
      this.windowWidth >= this.#tabletWidth &&
      this.windowWidth < this.#desktopWidth
    );
  }

  set mobileWidth(width) {
    this.#mobileWidth = width;
  }

  get mobileWidth() {
    return this.#mobileWidth;
  }

  set tabletWidth(width) {
    this.#tabletWidth = width;
  }

  get tabletWidth() {
    return this.#tabletWidth;
  }

  set desktopWidth(width) {
    this.#desktopWidth = width;
  }

  get desktopWidth() {
    return this.#desktopWidth;
  }
}

let isMenuActive = false;
const sizes = new ScreenSizes();

// Param is the navbar element to put in the children
const navbar = (navbarSelector) => {
  const navbarElement = document.querySelector(navbarSelector);
  const menuButtonHTML = `
<path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>

  `;
  const closeButtonHTML = `
    <path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
  `;

  const navbarInnerHTML = `
    <header>
      <img src="./assets/other/profile-icon.png" alt="Logo" />
      <h1>William Ferns</h1>
    </header>
    <svg id="menu-btn" class="menu-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      ${menuButtonHTML}
    </svg>
    <div id="nav-list">
      <a class="nav-link" href="#about-me">About</a>
      <a class="nav-link" href="#work-experience">Work experience</a>
      <a class="nav-link" href="#projects">Projects</a>
      <a class="nav-link" href="#hire-me">Hire me</a>
      <a class="nav-link" href="https://github.com/WilliamFernsCodes/" target="_blank">Github</a>
    </div>
  `;
  navbarElement.innerHTML = navbarInnerHTML;

  const menuButton = document.getElementById("menu-btn");
  const navItems = document.getElementById("nav-list");
  let rotation = 0;
  const toggleNavList = () => {
    isMenuActive = !isMenuActive;
    toggleMenu(isMenuActive);
    menuButton.style.rotate = `${rotation}deg`;
  };

  const toggleMenu = (isMenuActive) => {
    if (sizes.isMobile()) {
      if (isMenuActive) {
        navItems.classList = "slide-from-right";
        navItems.style.display = "flex";
        menuButton.innerHTML = closeButtonHTML;
        menuButton.setAttribute("viewBox", "0 0 385 512");
        // menuButton.classList = "fa-solid fa-xmark";
        rotation += 360;
      } else {
        navItems.classList = "slide-from-left";
        menuButton.innerHTML = menuButtonHTML;
        menuButton.setAttribute("viewBox", "0 0 448 512");
        // menuButton.classList = "fa-solid fa-bars";
        rotation -= 360;
      }
    }
  };
  console.log("before event listener");
  menuButton.addEventListener("click", toggleNavList);
  console.log("After event listener");
};

navbar("#navbar");

const projectsData = [
  {
    name: "Automa Automations Backend",
    image: "./assets/project-images/automa-backend.png",
    tags: ["PYTHON", "AWS"],
    links: [
      {
        name: "github",
        link: "https://github.com/Automa-Automations/Backend",
      },
    ],
  },
  {
    name: "Automa Automations Web App",
    image: "./assets/project-images/automa-web-app.png",
    tags: ["REACT", "CHAKRA UI"],
    links: [
      {
        name: "github",
        link: "https://github.com/Automa-Automations/web-app",
      },
      {
        name: "website",
        link: "https://web-app-williamferns1.replit.app/",
      },
    ],
  },
  {
    name: "Youtube Automation Python Package",
    image: "./assets/project-images/youtube-selenium-py.png",
    tags: ["PYTHON", "SELENIUM"],
    links: [
      {
        name: "github",
        link: "https://github.com/Automa-Automations/youtube_selenium_py",
      },
      {
        name: "pypi",
        link: "https://pypi.org/project/youtube-selenium-py/",
      },
    ],
  },
  {
    name: "i3wm Nightlight",
    image: "./assets/project-images/i3-nightlight.png",
    tags: ["shell", "i3wm"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/i3-nightlight",
      },
    ],
  },
  {
    name: "2D Platformer Game (Course Project - Own Touch)",
    image: "./assets/project-images/platformer-game.png",
    tags: ["HTML", "CSS", "JS"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/2D-Platformer-Game",
      },
      {
        name: "website",
        link: "https://oop-platformer-game-js.vercel.app/",
      },
    ],
  },
  {
    name: "Telephone Number Validator",
    image: "./assets/project-images/telephone-number-validator.png",
    tags: ["HTML", "CSS", "JS"],
    links: [
      {
        name: "github",

        link: "https://github.com/WilliamFernsCodes/telephone_number_validator",
      },
      {
        name: "website",
        link: "https://telephone-number-validator-liart.vercel.app/",
      },
    ],
  },
  {
    name: "I ❤️ Vim Motions Tribute Page",
    image: "./assets/project-images/i-love-vim-motions.png",
    tags: ["HTML", "CSS"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/I-love-vim-motions",
      },
      {
        name: "website",
        link: "https://i-love-vim-motions.vercel.app/",
      },
    ],
  },
  {
    name: "Roman Numeral Convertor",
    image: "./assets/project-images/roman-numeral-convertor.png",
    tags: ["HTML", "CSS", "JS"],
    links: [
      {
        name: "github",

        link: "https://github.com/WilliamFernsCodes/roman-numeral-convertor",
      },
      {
        name: "website",
        link: "https://roman-numeral-convertor-plum.vercel.app/",
      },
    ],
  },
  {
    name: "Palindrome Checker",
    image: "./assets/project-images/palindrome-checker.png",
    tags: ["HTML", "CSS", "JS"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/Palindrome_Checker",
      },
      {
        name: "website",
        link: "https://palindrome-checker-seven.vercel.app/",
      },
    ],
  },
  {
    name: "Advance Dice Game (Course Project - Own Touch)",
    image: "./assets/project-images/advanced-dice-game.png",
    tags: ["HTML", "CSS", "JS"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/advance-dice-game-js",
      },
      {
        name: "website",
        link: "https://advance-dice-game-js.vercel.app/",
      },
    ],
  },
  {
    name: "freeCodeCamp Forum Leaderboard (Coure Project - Own Touch)",
    image: "./assets/project-images/fcc_forum_leaderboard_edited.png",
    tags: ["HTML", "CSS", "JS"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/fcc_forum_leaderboard",
      },
      {
        name: "website",
        link: "https://fcc-forum-leadearboard.vercel.app/",
      },
    ],
  },
  {
    name: "freeCodeCamp Authors Page (Course Project - Own Touch)",
    image: "./assets/project-images/fcc_authors_page_edited.png",
    tags: ["HTML", "CSS", "JS"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/fcc_authors_page",
      },
      {
        name: "website",
        link: "https://fcc-authors-page.vercel.app/",
      },
    ],
  },
  {
    name: "Cash Register Project",
    image: "./assets/project-images/cash-register-project.png",
    tags: ["HTML", "CSS", "JS"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/cash-register-project",
      },
      {
        name: "website",
        link: "https://cash-register-project.vercel.app/",
      },
    ],
  },
  {
    name: "Replit Bounty Hunter Bootcamp | Starter Guide",
    image: "./assets/project-images/replit-bounty-hunter-bootcamp.png",
    tags: ["HTML", "CSS"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/replit_bounty_hunter_bootcamp",
      },
      {
        name: "website",
        link: "https://replit-bounty-hunter-bootcamp.vercel.app/",
      },
    ],
  },
  {
    name: "Newsletter Form",
    image: "./assets/project-images/newsletter-form.png",
    tags: ["HTML", "CSS"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/survey_form",
      },
      {
        name: "website",
        link: "https://survey-form-self.vercel.app/",
      },
    ],
  },
  {
    name: "Duckie Product Page",
    image: "./assets/project-images/duckie-product-page.png",
    tags: ["HTML", "CSS"],
    links: [
      {
        name: "github",
        link: "https://github.com/WilliamFernsCodes/duckie-product-page",
      },
      {
        name: "website",
        link: "https://duckie-product-page.vercel.app/",
      },
    ],
  },
];

const randomColor = () => {
  const colors = ["black", "purple", "red", "brown", "orange", "green"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const renderProjects = (projectsData, max = 0) => {
  for (let i = 0; i < max || i < projectsData.length; i++) {
    const project = projectsData[i];

    if (i == max && max > 0) {
      break;
    }

    projectsContainer.innerHTML += `
      <div class="project">
        <h3 class="project-name">${project["name"]}</h3>
        <img alt="${project["image"].split(".png")[0].split("/")[1]}" src="${project["image"]}" class="project-image" />
        <div class="tags-and-links">
          <ul class="project-tags">
            ${project["tags"].map((tag) => `<li style="background-color: ${tag === "HTML" ? "red" : tag === "CSS" ? "#264de4" : tag === "PYTHON" ? "#000" : randomColor()}" class="project-tag ${tag.toLowerCase()}">${tag}</li>`).join("")}
          </ul>
          <ul class="project-links">
            ${project["links"].map((link) => `<li class="project-link"><a href="${link["link"]}" target="_blank"><i class="${link["name"] === "github" ? "fa-brands fa-github" : link["name"] === "website" ? "fa-solid fa-link" : link["name"] === "pypi" ? "fa-solid fa-cube" : ""}"></i></a></li>`).join("")}
          </ul>
        </div>
      </div>
  `;
  }
};

renderProjects(projectsData, 3);

function showAllProjects() {
  console.log(projectsContainer.children.length, projectsData.length);
  if (projectsContainer.children.length === projectsData.length) {
    projectsContainer.innerHTML = "";
    renderProjects(projectsData, 3);
    viewAllButton.textContent = "View All";
    return;
  } else {
    projectsContainer.innerHTML = "";
    viewAllButton.textContent = "View Less";
    renderProjects(projectsData);
  }
}

viewAllButton.addEventListener("click", showAllProjects);
