import avatar from "./assets/avatar.jpg";
import resume from "./assets/resume.pdf";
import vetshaathi from "./assets/vetshaathi.jpg";
import myfreshfolio from "./assets/myfreshfolio.jpg";

function getPortfolioData() {
  const portfolio = {
  "home": {
    "name": "piyush singh",
    "description": "i am a passionate full stack developer and backend developer , who love to make scalable backend which don't break at scale and also an AI engineer who intergrate AI in products ",
    "resume": resume,
    "github": "https://github.com/piyushayu",
    "avatar": avatar
  },
  "projects": [
    {
      "title": "vetshaathi",
      "description": "virtual assitant for animal healthcare",
      "image": vetshaathi,
      "link": "https://vet-saathi.vercel.app/"
    },
    {
      "title": "myfreshfolio",
      "description": "a ready made industry level portfolio templates ",
      "image": myfreshfolio,
      "link": "https://twitter.com"
    }
  ],
  "tech": {
    "Frontend": [
      {
        "name": "HTML5",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        "name": "CSS3",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        "name": "JavaScript",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        "name": "TypeScript",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      },
      {
        "name": "React",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        "name": "Next.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      },
      {
        "name": "Redux",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      },
      {
        "name": "Tailwind CSS",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      }
    ],
    "Backend": [
      {
        "name": "Node.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        "name": "Express.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      },
      {
        "name": "MongoDB",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        "name": "PostgreSQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      },
      {
        "name": "Redis",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
      }
    ],
    "Technologies": [
      {
        "name": "Git",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        "name": "GitHub",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      },
      {
        "name": "Postman",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
      },
      {
        "name": "VS Code",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      },
      {
        "name": "Vercel",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
      },
      {
        "name": "Vite",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
      },
      {
        "name": "npm",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
      }
    ]
  },
  "Contact": {
    "Heading": "Hy i would love to contect with you all ",
    "description": "say hello on any of my socials and let's get physical ",
    "footer": "piyush singh"
  },
  "socials": {
    "linkedin": "https://www.linkedin.com/in/piyush-singh-1b9a0036a/",
    "instagram": "https://instagram.com",
    "twitter": "https://twitter.com/confusedpiyush"
  }
};
  return portfolio;
}

export default getPortfolioData;