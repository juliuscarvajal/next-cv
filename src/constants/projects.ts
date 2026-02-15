export type Project = {
  name: string;
  title: string;
  subtitle: string;
  descriptions: string[];
  cta?: {
    label: string;
    href: string;
  };
  images?: string[];
};

export const projects: Array<Project> = [
  {
    name: "Optus",
    title: "Expert AI",
    subtitle: "Optus",
    descriptions: [
      "Optus has launched Optus Expert AI, a new agentic AI solution for frontline teams.",
      "Optus Expert AI is designed to ensure every AI-guided frontline action is faster, better and more streamlined customer experience.",
      "This solution has been developed on Google Cloud's Customer Engagement Suite using conversational AI solutions.",
      "Implemented the browser popout POC using Document Picture-in-Picture with an iframe that resulted to solving existing limitation of UI visibility and potentially new CX ideas.",
    ],
  },
  {
    name: "Optus",
    title: "SubHub",
    subtitle: "Optus",
    descriptions: [
      "SubHub is a subscription management platform that allows users to manage, track and cancel their subscriptions in one.",
      `It is a "world first" to streamline "subscription fatigue" by having the telco as the single payment method for all your streaming services.`,
      "I have architected the front end web app from scratch using Next.js within an NX Monorepo.",
      "I have been leading the front end development ever since.",
    ],
    cta: {
      label: "Go to SubHub (geo-blocked outside Australia)",
      href: "https://subhub.com.au",
    },
    images: [
      "/projects/optus/subhub-add-activate.png",
      "/projects/optus/subhub-add-modal.png",
    ],
  },
  {
    name: "Optus",
    title: "Optus Sport Chromecast",
    subtitle: "Optus",
    descriptions: [
      "On day 1, volunteered to take on the Chromecast for Optus Sport initiative with zero experience and rewrote the app from scratch.",
    ],
    cta: {
      label: "Go to Optus Sport",
      href: "https://sport.optus.com.au",
    },
  },
  {
    name: "Optus",
    title: "Optus Sport Web",
    subtitle: "Optus",
    descriptions: [
      "Implemented the Credit Card feature for Optus Sport Web and APIs which enables customers to pay for subscription outside the App Stores resulting to savings from App Store commissions.",
      "Developed a reusable Mobile OTP component for Optus Sport web.",
      "Developed the Optus Sport Signup page including the Mobile OTP feature.",
      "Refactored the Optus Sport Redeem Voucher page and plugged the Mobile OTP feature in.",
    ],
    cta: {
      label: "Go to Optus Sport",
      href: "https://sport.optus.com.au",
    },
  },
  {
    name: "Qantas",
    title: "Credit Card Application",
    subtitle: "Qantas",
    descriptions: [
      "Multi-page credit card application form for Qantas Credit Cards. Originally written with Pug/jQuery, Converted most of the legacy code to React/Redux along with bug fixing.",
      "Mobile web app for existing users of Qantas Credit Cards to keep track of transactions. Implemented multiple pages for activation flow resulting in common & reusable components.",
    ],
    cta: {
      label: "Go to Qantas Money",
      href: "https://www.qantasmoney.com/credit-cards",
    },
  },
  {
    name: "Boral",
    title: "Customer Portal",
    subtitle: "Boral",
    descriptions: [
      "Before arriving, Boral did not have any customer facing web app to efficiently track concrete orders online. It was all old-school manual stuff. A very high profile project for Boral.",
      "Delivered the MVP in less than a month upon joining and in less than 6 months, delivered almost all of the major features. The customer portal web app works across mobile, tablet and desktop using React/Redux/Material UI with only desktop designs to start with.",
      "Also rewrote an existing external deliveries tracking feature & integrated it within the customer portal all within a sprint.",
    ],
  },
  {
    name: "Coates Digital",
    title: "Real-time Drive-Thru",
    subtitle: "Coates Digital",
    descriptions: [
      "Realtime Drive-Thru Data Display is the project used in the McDonalds drive thru to update the customer’s drive thru orders in real time. Classic drive thru displays are rather boring and can’t be customized. With this solution, the drive thru screens are customizable with real-time data driving what to display.",
    ],
  },
  {
    name: "Coates Digital",
    title: "Switchboard",
    subtitle: "Coates Digital",
    descriptions: [
      "Switchboard is the web app that controls all the schedules and the menus to display for all stores that use Coates Group services. Implemented the backend JSONAPI compliant REST services.",
    ],
  },
  {
    name: "Coates Digital",
    title: "Kiosk Advertiser",
    subtitle: "Coates Digital",
    descriptions: [
      "Kiosk On-Idle Advertiser is a concept where the self ordering kiosk will display advertisements when the kiosk is idle for some time. The existing software is written in C# and it is impossible to inject advertisements into it. Tasked to find a solution to this problem and solved it using Python with Win32 calls to invoke a web browser when idle to point to a Coates Group endpoint to display the ads.",
    ],
  },
  {
    name: "Flamingo AI",
    title: "Rosie / Maggie AI Chatbot",
    subtitle: "Flamingo AI",
    descriptions: [
      "Flamingo AI offers conversational commerce and integration.",
      "Implemented many of the REST APIs with Swagger integration and some ReactJS front end chat components.",
    ],
  },
  {
    name: "Elbit Systems",
    title: "Naval Tactical Training Simulator",
    subtitle: "Elbit Systems",
    descriptions: [
      "Elbit Systems is one of the biggest training simulations providers.",
      "Worked with BVR Israel before Elbit Systems bought out the company. The client was the Singapore Navy at Changi Naval base.",
      "Deployed to BVR Israel for a planned 6-month training with their systems. Aced the training in 3 months all while implementing the VoIP interface for the simulator. 8 people sent to BVR Israel prior to me for training and all of them did not have the right skillset or not quick enough to learn the ropes.",
    ],
  },
];

export const personalProjects: Array<Project> = [
  {
    name: "CV",
    title: "My CV",
    subtitle: "This personal portfolio site",
    descriptions: [
      "Been in the industry for over 20 years and I have worked with many companies and industries.",
      "However this is the first time I have seriously designed and built my own personal portfolio site.",
      "I also needed a reason to try out shadcn, Next.js App Router layouts and other stuff.",
    ],
    cta: {
      label: "Go to Home page",
      href: "/",
    },
  },
  {
    name: "Lottie",
    title: "Lottie Shop",
    subtitle: "Shop for Lottie animations",
    descriptions: [
      "LottieFiles Shop is a platform for buying and selling Lottie animations.",
    ],
    cta: {
      label: "Go to Lottie Files Shop",
      href: "https://d2rjogd8qrbrqf.cloudfront.net/",
    },
  },
];
