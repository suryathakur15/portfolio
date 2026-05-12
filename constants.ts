export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  longDescription: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const METADATA = {
  title: "Surya Thakur | Lead Engineer",
  description:
    "Lead Engineer @ HighLevel | Building neary.in (AI-powered social platform) | Engineering Mentor @ IIT Delhi. I specialize in building high-performance, cloud-native backend systems that scale to millions.",
  siteUrl: "https://www.suryathakur.com",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Building Scalable Systems",
  "AI-Powered Social Platforms",
  "Distributed Backend Architecture",
  "Scaling Products to 20M+ Users",
  "Engineering Leadership & Mentorship",
];

export const EMAIL = "suryapratap1515@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/suryathakur15",
  github: "https://github.com/surya-thakur15",
  instagram: "https://www.instagram.com/surya_thakur15",
  twitter: "https://twitter.com/suryathakur15",
  topmate: "https://topmate.io/suryathakur15",
  medium: "https://suryathakur15.medium.com",
};

export const SOCIAL_COLORS = [
  "#FF3366", // Pink/Red
  "#33FF99", // Emerald
  "#33CCFF", // Sky Blue
  "#FF9933", // Orange
  "#CC33FF", // Purple
  "#FFFF33", // Yellow
  "#FF33FF", // Magenta
  "#00FA9A", // Medium Spring Green
];

export const PROJECTS: Array<IProject> = [
  {
    name: "Neary",
    image: "/projects/neary.png",
    blurImage: "/projects/blur/neary.png",
    description:
      "An AI-driven location-based social platform bringing the warmth of physical proximity to the digital world.",
    longDescription:
      "Spearheading the engineering for Neary, a location-based social discovery platform. Architected the real-time interaction engine using Socket.io and FastAPI, focusing on proximity-based community engagement. Implemented AI-driven discovery algorithms to match users based on shared interests and geographical proximity.",
    gradient: ["#F59E0B", "#EF4444"],
    url: "",
    tech: ["Go", "React", "Capacitor", "Socket", "AWS", "Redis"],
  },
  {
    name: "Probo",
    image: "/projects/probo.png",
    blurImage: "/projects/blur/probo.png",
    description:
      "High-performance sports engine supporting 100K+ concurrent users with ultra-low latency updates.",
    longDescription:
      "Architected and launched a live sports scoring engine from scratch, supporting 100K+ concurrent users and handling throughputs of 100K+ requests/minute. Designed an event-driven backend using Node.js, MySQL, and Redis Pub/Sub with WebSockets to deliver ultra-low latency spectator updates, driving a 6% increase in trades and an 11% boost in user onboarding.",
    gradient: ["#1e3c72", "#2a5298"],
    url: "",
    tech: ["Typescript", "Express", "React", "MySQL", "AWS", "Socket"],
  },
  {
    name: "ConvoPilot",
    image: "/projects/convopilot.png",
    blurImage: "/projects/blur/convopilot.png",
    description:
      "A full-stack AI customer support platform with real-time chat, sentiment analysis, and multi-agent inbox.",
    longDescription:
      "Built a comprehensive customer support platform featuring a real-time multi-agent inbox and a proprietary sentiment engine. After every 5th message, the AI analyzes emotional bands (0-100 score) and provides live coaching nudges to agents. Architected with Node.js, FastAPI, and Redis for high-scale event processing.",
    gradient: ["#5423CF", "#B542F2"],
    url: "",
    tech: ["LLMs", "Flask", "React", "Express", "Javascript", "Socket"],
  },
  {
    name: "GoDaddy Capital",
    image: "/projects/godaddy-capital.png",
    blurImage: "/projects/blur/godaddy-capital.png",
    description:
      "Architected and built a financing platform from scratch for entrepreneurs in the U.S. and Canada.",
    longDescription:
      "Owned the end-to-end loan journey for reseller merchants, unlocking new credit segments for GoDaddy. Strengthened the core financial ecosystem by designing robust API integrations with third-party lenders. Reduced P99 latency by implementing asynchronous processing, advanced query tuning, and Elastic observability.",
    gradient: ["#00A884", "#00665E"],
    url: "",
    tech: ["React", "Typescript", "Nest Js", "Fastify", "AWS", "MySQL"],
  },
];

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lead Software Engineer",
    subtitle: "HighLevel | April 2026 - Present",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Engineering Mentor",
    subtitle: "IIT Delhi | March 2025 - Present",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Senior Software Engineer",
    subtitle: "GoDaddy | March 2025 - April 2026",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Engineer",
    subtitle: "Probo | December 2021 - March 2025",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Backend Engineer II",
    subtitle: "Merkle Sokrati | Jan 2021 - Dec 2021",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Engineer I",
    subtitle: "Merkle Sokrati | Jan 2020 - Jan 2021",
    size: ItemSize.SMALL,
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
];

export const SKILLS = {
  core: [
    "golang",
    "nodejs",
    "javascript",
    "typescript",
    "python",
    "express",
    "nestjs",
    "postgresql",
    "mongodb",
    "mysql",
    "redis",
    "kafka",
    "git",
    "docker",
    "kubernetes",
    "aws",
    "elasticsearch",
    "rabbitmq",
    "linux",
    "fastify",
    "grpc",
    "microservices",
  ],

  frontend: [
    "react",
    "next",
    "redux",
    "tailwind",
    "html",
    "css",
    "sass",
    "bootstrap",
    "gatsby",
    "websockets",
    "webrtc",
  ],

  cloud: [
    "lambda",
    "ec2",
    "s3",
    "rds",
    "apigateway",
    "cloudfront",
    "sqs",
    "sns",
    "ses",
    "serverless",
    "terraform",
    "ci/cd",
  ],

  userInterface: ["figma", "sketch", "photoshop"],

  other: ["webpack", "gulp", "gsap", "prometheus", "grafana", "ELK Stack"],
};
