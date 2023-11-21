import { decagon, rebothFinance } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    blockchain,
    docker,
    postgres,
    kubernetes,
    mySQL,
    jira,
    ethereum,
    cryptoCurrency,
    python,
    solidity,
    twitter,
    nodeJS
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: blockchain,
        name: "Blockchain Engineering",
        type: "Smart Contracts",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Containerization",
    },
    {
        imageUrl: postgres,
        name: "PostgresQL",
        type: "Database",
    },
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "Orchestration",
    },
    {
        imageUrl: mySQL,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Project Management",
    },
    {
        imageUrl: ethereum,
        name: "Ethereum",
        type: "Layer 1 Blockchain",
    },
    {
        imageUrl: cryptoCurrency,
        name: "CryptoCoin",
        type: "Blockchain Ledger",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: solidity,
        name: "Solidity",
        type: "Blockchain Programming Language",
    },
    {
        imageUrl: nodeJS,
        name: "Node.JS",
        type: "V8 JavaScript for server-side scripting",
    }
];

export const experiences = [
    {
        title: "Associate Software Engineer",
        company_name: "Decagon",
        icon: decagon,
        iconBg: "#accbe1",
        date: "April 2023 - Present",
        points: [
            "🎯 I demystified the PRD(Product Requirement Document) to colleagues to ensure codes written are in sync with the user story.",
            "🤝 As a leader of about 20 developers, I created a robust model for relating the backend to our Postgres database using Sequelize within 24 hours of the start of the project so that team members assigned to backend tasks for the first sprint could relate to the flow and build their endpoints accordingly and promptly. We are now using ElephantSQL as a cloud database for scalability in the production mode.", 
            "🌟 I used Redux toolkit to manage states on the upcoming activities section on the dashboard of the app so that the data from the database via the server displays to show a user the upcoming contributions in the savings groups that he joined.",
            "📊 I created a backend application that was able to make HTTP requests using axios, parsing HTML and JSON data formats and extracting the content of the URL or web pages requested using puppeteer.", 
            "🛠️ I implemented security measures, using Joi for validation so I can stick to ethical scraping standards and not pry into sensitive data in the requested URL.",
            "🔗 I also implemented rate limiting to avoid overloading the target server and getting blocked with the help of ExpressJS which was my Node development framework.",
            "🤖 I used MongoDB as a database to secure my fetched data.",
            "👔 For assertions and checking code’s reliability to successfully fetch and scrape, I used Jest for testing.",
            "🌐 I containerized applications using Docker.",
        ],
    },
    {
        title: "Digital Consultant/Admin",
        company_name: "Reboth Finance",
        icon: rebothFinance,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "🤖 Software Administration: Oversaw the effective administration of software systems, ensuring optimal functionality and performance.",
            "📧 Email Marketing: Orchestrated email marketing campaigns, utilizing ConvertKit for engagement tracking and fostering client relationships.",
            "🎯 Strategic Planning: Developed and executed strategic plans, aligning digital services with business objectives for maximum impact.",
            "🤝 Cross-Functional Collaboration: Collaborated with software engineers, developers, and cross-functional teams to drive the successful implementation of digital projects in an Agile environment.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/UIHamilton995',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hamilton-ude-07744a16a/',
    },
    {
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://twitter.com/UI_Hamilton',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Ajo Savings App',
        description: 'Savings application with extensive dashboard features that tracks where and what you are doing with your finances. Join Savings groups and cash out when it gets to your turn.',
        link: 'https://github.com/Ajo-Savings-Project',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Plutus Financial Investment App',
        description: 'A meeting point where investment companies meet investors. In this app you get to save and grow your money through our verified investment and stock enterprises.',
        link: 'https://github.com/UIHamilton995/plutus-financial-app',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'MiltonCryptoz',
        description: 'Crypto checker and analysis app for assessing market dynamics before making informed decisions on staking or purchasing. Uncover real-time insights and empower your crypto endeavors with precision and confidence!',
        link: 'https://github.com/UIHamilton995/milton-cryptoz-analysis',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Wokpa Music App',
        description: 'Embark on an immersive auditory journey with the Wokpa Music App, where we strive to craft an extraordinary and exhilarating experience. Dive deep into the world of music and let the rhythm elevate your senses!',
        link: 'https://github.com/UIHamilton995/wokpa-music-app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'LandLawdz',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/UIHamilton995/land-lawd-real-estate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Weeb Zappier',
        description: 'Backend application that makes HTTP requests using axios, parse html and json data; extracting url data with puppeteer.',
        link: 'https://github.com/UIHamilton995/ethical-web-scraper',
    }
];