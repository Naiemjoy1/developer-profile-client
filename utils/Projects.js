import careImg from "../src/assets/Project/care-quest.jpg";
import cozyImg from "../src/assets/Project/cozy-hotel.jpg";
import travelImg from "../src/assets/Project/travel-south.jpg";

export const Projects = [
  {
    id: 1,
    name: "CozyStay Hotel Booking ",
    tools: ["React.js", "Node.js", "Firebase", "MongoDB"],
    role: "Full Stack Developer",
    description:
      "Developed a hotel booking platform with responsive front-end, secure user logins, and dynamic features like room filtering and real-time availability updates.",
    img: cozyImg,
    features: [
      "Real-time Room Availability",
      "Booking Management",
      "Review Submission",
    ],
    links: {
      live: "https://cozystay-hotel-booking.web.app/",
      client: "https://github.com/Naiemjoy1/cozy-hotel-client",
      server: "https://github.com/Naiemjoy1/cozy-hotel-server",
    },
  },
  {
    id: 2,
    name: "Diagnostic Center Management ",
    tools: ["React.js", "Node.js", "Firebase", "MongoDB"],
    role: "Full Stack Developer",
    description:
      "Streamlined diagnostic center operations with user authentication, profile management, responsive design, and dynamic admin features.",
    img: careImg,
    features: [
      "Comprehensive User Dashboard",
      "Admin Dashboard",
      "Secure Authentication and Payment Integration",
    ],
    links: {
      live: "https://care-quest-2ae20.web.app/",
      client: "https://github.com/Naiemjoy1/care-quest-client",
      server: "https://github.com/Naiemjoy1/care-quest-server",
    },
  },
  {
    id: 3,
    name: "Tourism Management ",
    tools: ["React.js", "Node.js", "Firebase", "MongoDB"],
    role: "Full Stack Developer",
    description:
      "Built a tourism management site with responsive design, secure authentication, and interactive maps for Southeast Asia travel details.",
    img: travelImg,
    features: ["Dynamic Home Page", "User Management", "Personalization"],
    links: {
      live: "https://assignment10-mongodb.web.app/",
      client: "https://github.com/Naiemjoy1/travel-south-client",
      server: "https://github.com/Naiemjoy1/travel-south-server",
    },
  },
];
