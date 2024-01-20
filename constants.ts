export const METADATA = {
  title: "Surya = () => Fullstack Engineer",
  description:
    "I code from pixeles to databases. I take responsibility to craft an aesthetic user experience and higly available systems using modern frontend and backend architecture.",
  siteUrl: "https://www.suryathakur.com",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    // name: "Works",
    // ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    // name: "Timeline",
    // ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I code from Pixels to Databases",
  "I am a Startup Enthusiast",
  "I design systems from scratch",
];

export const EMAIL = "spsjnvf@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/suryathakur15",
  github: "https://github.com/surya-thakur15",
  instagram: "https://www.instagram.com/surya_thakur15",
  facebook: "https://www.facebook.com/suryathakur15",
  // dribbble: "https://dribbble.com/suryathakur15",
  twitter: "https://twitter.com/suryathakur15",
  topmate: "https://topmate.io/suryathakur15",
  medium: "https://suryathakur15.medium.com",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: Array<any> = [];

export const TIMELINE: Array<any> = [];

export const SKILLS = {
  core: [
    "javascript",
    "nodejs",
    "express",
    "python",
    "mysql",
    "mongodb",
    "redis",
    // "apache",
    "drupal",
    "flask",
    "git",
    "postman",
    "linux",
  ],

  frontend: [
    "react",
    "redux",
    "next",
    "tailwind",
    "bootstrap",
    "svg",
    "html",
    "css",
  ],

  cloud: [
    "apigateway",
    "cloudfront",
    "codecommit",
    "codedeploy",
    "ec2autoscaling",
    "ec2",
    "elasticcache",
    "lambda",
    "lightsail",
    "rds",
    "s3",
    "sagemaker",
    "ses",
    "sns",
    "sqs",
  ],

  userInterface: ["figma", "sketch", "photoshop"],

  other: ["webpack", "gulp"],
};

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

export type TimelineNodeV2 = CheckpointNode | BranchNode;

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

// export const GTAG = "UA-163844688-1";
