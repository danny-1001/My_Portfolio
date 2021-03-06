import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: ' Danny Aviles | Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en, es', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Danny Aviles',
  subtitle: "and I'm a front end developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Programmer.png',
  paragraphOne:
    'Front end development combines all of my passions. I love to design user interfaces, landing pages, apps, etc, and bring them to life using code. The thought process behind creating the best user experience is what fascinates me the most. Understanding why users do what they do, and optimizing websites are the pillars of my frontend development thought process.',
  paragraphTwo:
    ' Expanding my knowledge through lessons, books, mentorships, and experiences are important to me, as I believe they are integral parts of not only growing as a front end developer, but as a person.',
  paragraphThree: 'Less about me, more about my skills',
  resume: 'https://drive.google.com/file/d/1LN-wo98h0tCt0TKKNVhMWsqZSrTszRYR/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Weather-Widget.png',
    title: 'Weather App',
    info: ' Created a weather app utilizing JavaScript, CSS, SCSS, HTML and the OpenWeather API. ',
    info2: '',
    url: 'https://weather-widget-theta.vercel.app/',
    repo: 'https://github.com/danny-1001/Weather-Widget', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Crpyto.png',
    title: 'Crypto Watcher',
    info: 'Deployed cryptocurrency watch list that displays cryptocurrencies. ',
    info2:
      'I integrated the CoinGecko API to get cryptocurrency information and utilized React, Javascript, JSX and and CSS to display API information and structure the watchlist.',
    url: 'https://crypto-watchers.vercel.app/',
    repo: 'https://github.com/danny-1001/Crypto_watchers', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Fotofoxsc.png',
    title: 'FotoFox',
    info:
      'I created a photography portfolio and collaborated with 3 photographers who provided the image content for the website. ',
    info2: 'I built this site using React, JavaScript, Email.js, Formspree.io, and Firebase.',
    url: 'https://fotofox-58833.web.app/',
    repo: 'https://github.com/danny-1001/Foto_Fox', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Shoe.png',
    title: 'Animated Shoe Card',
    info: 'Using JavaScript and CSS animations I was able to create a shoe card that is animated.',
    info2: '',
    url: 'https://shoe-card.vercel.app/',
    repo: 'https://github.com/danny-1001/shoe_card', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/danny-aviles-a1730a178',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/danny-1001',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
