import {
  ml,
  dl,
  ds,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  telkom,
  kedaireka,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  vscode,
  colab,
  detection,
  gui,
  nlp,
  ann,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scientist",
    icon: ds,
  },
  {
    title: "Machine Learning Engineer",
    icon: ml,
  },
  {
    title: "Deep Learning Engineer",
    icon: dl,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "Visual Studio Code",
    icon: vscode,
  },
  {
    name: "Google Colaboratory",
    icon: colab,
  },
];

const experiences = [
  {
    title: "Digital Connectivity Service",
    company_name: "Telkom Indonesia",
    icon: telkom,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Conducting Quality Assurance (QA), Type Approval (TA), and Voluntary Test (VT) for telecommunication devices.",
      "Managing tests on fiber optic cables, modems, and other telecommunication devices.",
      "Ensuring compliance with government regulations and maintaining operational standards.",
      "Creating test procedure documents based on laboratory equipment used in testing.",
    ],
  },
  {
    title: "Data Science",
    company_name: "Kedaireka",
    icon: kedaireka,
    iconBg: "#E6DEDD",
    date: "August 2023 - January 2024",
    points: [
      "Developing a Deep Learning model using ResNet152V2 and CNN to detect foot abnormalities.",
      "Creating a GUI for visualizing data from sensors or systems.",
      "Working with hardware components like an analog multiplexer, shift register, and ESP32 microcontroller.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Deep Learning-based Foot Abnormality Detection Using ResNet152V2 CNN Architecture",
    description:
      "A Deep Learning model utilizing CNN and ResNet152V2 architecture to classify foot types into two categories: normal and abnormal. The model is designed to detect three foot conditions—high arch, flat foot, and normal foot—by grouping them into these two classifications for more efficient analysis.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "deep learning",
        color: "green-text-gradient",
      },
      {
        name: "data science",
        color: "pink-text-gradient",
      },
    ],
    image: gui,
    source_code_link:
      "https://github.com/NaufalDa19/Deep-Learning-CNN-Klasifikasi-Keabnormalitasan-Telapak-Kaki",
  },
  {
    name: "Sentiment Analysis on Restaurant Reviews using algorithm Natural Language Processing (NLP)",
    description:
      "This project utilizes Natural Language Processing (NLP) to classify restaurant reviews as either positive (like) or negative (dislike). The data is processed through tokenization, removal of stop words, and stemming. It is then analyzed using machine learning models.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "data science",
        color: "pink-text-gradient",
      },
    ],
    image: nlp,
    source_code_link:
      "https://github.com/NaufalDa19/Sentiment-Analysis-on-Restaurant-Reviews-using-Natural-Language-Processing",
  },
  {
    name: "Customer Churn Prediction for Banking Using Artifical Neural Network (Deep Learning) algorithm",
    description:
      "This project predicts customer behavior in banking, specifically whether a customer will stay or churn, using the Churn_Modelling dataset, which includes demographic, account, and activity features to provide insights for improving customer retention and business success.",
    tags: [
      {
        name: "deep learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "data science",
        color: "pink-text-gradient",
      },
    ],
    image: ann,
    source_code_link:
      "https://github.com/NaufalDa19/Customer-Churn-Prediction-for-Banking-Using-Artificial-Neural-Network",
  },
];

export { services, technologies, testimonials, experiences, projects };
