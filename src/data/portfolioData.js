export const personalInfo = {
  name: "Your Name",
  designation: "Full Stack Developer",
  tagline: "Building digital experiences that matter.",
  bio: "I'm a passionate Computer Science student who fell in love with programming through curiosity and late-night debugging sessions. I enjoy turning ideas into real, working software.",
  email: "yourname@email.com",
  phone: "+880 1XXXXXXXXX",
  whatsapp: "+880 1XXXXXXXXX",
  location: "Dhaka, Bangladesh",
  photo: "https://i.pravatar.cc/400?img=11", // Replace with your actual photo URL
  resume: "#", // Replace with your actual resume link
}

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
  { name: "Facebook", url: "https://facebook.com/yourusername", icon: "facebook" },
]

export const aboutMe = {
  journey: "My programming journey started in my first year of university when I wrote my very first 'Hello, World!' in Python. That simple line of text on a screen sparked something in me. I began exploring HTML and CSS, then JavaScript, and I haven't stopped since. Every bug I fix and every feature I ship feels like a small victory.",
  work: "I love working on full-stack web applications — from designing intuitive user interfaces to architecting efficient backend systems. I'm particularly passionate about building things that are not just functional, but feel great to use.",
  hobbies: "When I'm not coding, you'll find me on the cricket field, playing football with friends, or losing myself in a good book. I also enjoy watching tech talks, exploring new frameworks, and occasionally sketching UI ideas on paper.",
}

export const skills = {
  Frontend: [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript (ES6+)", level: 82 },
    { name: "React.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
  ],
  Backend: [
    { name: "Node.js", level: 72 },
    { name: "Express.js", level: 70 },
    { name: "MongoDB", level: 68 },
    { name: "REST APIs", level: 75 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 60 },
    { name: "Postman", level: 72 },
  ],
}

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Your University Name",
    duration: "2022 – Present",
    details: "Currently studying core CS fundamentals including Data Structures, Algorithms, Database Systems, and Web Development.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Your College Name",
    duration: "2019 – 2021",
    details: "Science group with focus on Mathematics and Physics. Achieved strong results.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Your School Name",
    duration: "2017 – 2019",
    details: "Science group. Developed a strong academic foundation.",
  },
]

export const projects = [
  {
    id: "taskflow",
    name: "TaskFlow — Task Manager",
    shortDesc: "A full-stack task management app with real-time updates and user authentication.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    description: "TaskFlow is a productivity-focused task manager that allows users to create, organize, and track tasks with priority levels, deadlines, and categories. It features a clean drag-and-drop interface and real-time status updates.",
    liveLink: "https://your-taskflow-demo.netlify.app",
    githubLink: "https://github.com/yourusername/taskflow-client",
    challenges: "Implementing real-time updates without WebSockets on a free hosting tier was tricky. I used polling with optimized queries to simulate live updates efficiently.",
    improvements: "In the future, I plan to add WebSocket support for true real-time collaboration, team workspaces, and a mobile app using React Native.",
  },
  {
    id: "shopwave",
    name: "ShopWave — E-Commerce Store",
    shortDesc: "A fully functional e-commerce frontend with cart, filters, and product detail pages.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tech: ["React.js", "Context API", "Tailwind CSS", "Fake Store API"],
    description: "ShopWave is an e-commerce web application where users can browse products, filter by category, add items to a cart, and simulate checkout. It consumes a public REST API and manages state globally with React Context.",
    liveLink: "https://your-shopwave-demo.netlify.app",
    githubLink: "https://github.com/yourusername/shopwave-client",
    challenges: "Managing cart state across multiple components without prop drilling was my main challenge. Adopting Context API with useReducer solved this cleanly.",
    improvements: "I want to add a backend with real payment integration (Stripe), user login, and an admin dashboard to manage products and orders.",
  },
  {
    id: "weatherly",
    name: "Weatherly — Weather App",
    shortDesc: "A beautiful weather app with 5-day forecast using OpenWeather API.",
    image: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80",
    tech: ["React.js", "OpenWeather API", "CSS Animations", "Geolocation API"],
    description: "Weatherly lets users search for any city's current weather and see a 5-day forecast with detailed hourly breakdowns. It uses the browser's Geolocation API to auto-detect the user's location and display weather dynamically.",
    liveLink: "https://your-weatherly-demo.netlify.app",
    githubLink: "https://github.com/yourusername/weatherly-client",
    challenges: "Handling asynchronous API calls and gracefully managing errors (invalid city names, network failures) required careful error boundary design and user feedback.",
    improvements: "Plans include adding weather maps, severe weather alerts, historical weather data, and unit toggling between Celsius and Fahrenheit.",
  },
]