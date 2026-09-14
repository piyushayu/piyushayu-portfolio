import Piyushsingh from "./assets/Piyushsingh.png";
import myfreshfolio from "./assets/myfreshfolio.png";

function getPortfolioData() {
  const portfolio = {
  "home": {
    "name": "piyush singh ",
    "description": "say hello on any of my socials and let's get physical "
  },
  "projects": [
    {
      "title": "Piyushsingh",
      "description": "can do slave work ",
      "image": "piyushsingh",
      "link": "ngkejkgjke"
    },
    {
      "title": "myfreshfolio",
      "description": "virutla lnaingk assistant",
      "link": "https:",
      "image": "myfreshfolio"
    }
  ],
  "tech": {
    "Backend": [
      {
        "name": "MySQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        "name": "FastAPI",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
      },
      {
        "name": "PostgreSQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      },
      {
        "name": "Express.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      }
    ],
    "Frontend": [
      {
        "name": "CSS3",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        "name": "TypeScript",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      },
      {
        "name": "Bootstrap",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      },
      {
        "name": "Redux",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      },
      {
        "name": "Angular",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
      }
    ],
    "Technologies": [
      {
        "name": "Docker",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      }
    ]
  }
};
  return portfolio;
}

export default getPortfolioData;