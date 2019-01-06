export const pageNames = {
  home: "Home",
  projects: "Projects",
  photography: "Photography",
  contact: "Contact"
};

export const content = {
  home: [
    {
      template: 'intro',
      heading: "Hi there, I'm Ondrej. Front-End Developer",
      subheading: "Get ready to turn your ideas into reality. Please take a look around!",
      paragraphs: {
        0: "",
        1: "",
      },
      images: [],
      mainLeftWidth: 2,
      pageName: "Home"
    },
    {
      template: 'mainSimple',
      heading: "About me",
      paragraphs: [
        "My name is Ondrej Horovsky and i'm Web Developer based in London. I have always believed that in most cases LESS is actually MORE so from the very beginning of my career as developer I was focusing on simplifying stuff.",
        "Currently I am open for freelance work as well as for full-time position so please do not hesitate to contact me and together we can realise your ideas!",
      ],
      images: [
        "/img/home/about/1.jpeg",
        "/img/home/about/2.png",
        "/img/home/about/3.jpg",
        "/img/home/about/4.jpg"
      ],
      mainLeftWidth: 1,
      pageName: "Home"
    },
    {
      template: 'mainSimple',
      heading: "My Skills",
      paragraphs: [
        "As a front-end developer I would start with HTML 5, CSS3, CSS pre-processors (SASS, LESS), ES6, PHP, MySQL databases.",
        "Big fan of Webpack module bundler with fully customised configs for each environment. Experience building web applications in MVC framework CakePHP.",
        "Passion and excitement trying new technologies, mainly based on ReactJS following best practices, static site generator GatsbyJs, using headless CMS, custom WordPress Templates, set-up error tracking tools, basics of testing (unit, accessibility testing) using Jest and pa11y, using Git version control on daily basis.",
        "Currently actively improving on GraphQL, GraphQL Yoga, Prisma, Apollo Client and Next.js."
      ],
      images: [
        "/img/home/skills/1.jpg"
      ],
      mainLeftWidth: 1,
      pageName: "Home"
    }
  ],
  projects: [
    {
      template: 'projects',
      heading: "Projects",
      // paragraphs: {
      //   0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
      // },
      projects: [
        {
          pageRef: 1, //this is reference for onClick event so it will change page like sidebar menu dots...
          name: "British Airways",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
          image: '/img/projects/ba/1.png',
          link: ''
        },
        {
          pageRef: 2,
          name: "BlackDiamond",
          paragraph: " Meg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
          image: '/img/projects/bd/1.png',
          link: ''
        },
        {
          pageRef: 3,
          name: "Mogul",
          paragraph: " Meg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
          image: '/img/projects/mogul/1.png',
          link: ''
        },
        {
          pageRef: 4,
          name: "Discover New Landscapes",
          paragraph: " Meg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
          image: '/img/projects/dnl/3.png',
          link: ''
        },
        {
          pageRef: 5,
          name: "Jan Smandra",
          paragraph: " Meg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
          image: '/img/projects/janci/1.png',
          link: ''
        }
      ],
      images: [],
      mainLeftWidth: 2,
      pageName: "Projects"
    },
    {
      template: 'mainSimple',
      heading: "British Airways",
      paragraphs: [
        "In-house built training platform for British Airways. Web application is using CakePHP MVC framework and hosted on Amazon Web Services (AWS).",
        "Challenge was complete front-end re-build of the platform in modular manner, implementing modern tech as ReactJs, accessibility testing tools, tidy up old code-base, removing jQuery and using vanilla JS and ReactJS, improving performance and all that while compatible with older web browsers.",
      ],
      images: [
        '/img/projects/ba/1.png',
        '/img/projects/ba/2.png',
        '/img/projects/ba/3.png',
        '/img/projects/ba/4.png',
        '/img/projects/ba/5.png',
        '/img/projects/ba/6.png',
        '/img/projects/ba/7.png',
        '/img/projects/ba/8.png',
        '/img/projects/ba/9.png'
      ],
      mainLeftWidth: 1,
      pageName: "Projects"
    },
    {
      template: 'mainSimple',
      heading: "BlackDiamond",
      paragraphs: [
        "Complete redesign and re-build of an old website. Bringing more eye-catching and fresh modern look.",
        "Challenge was building website in a way, that it would be easily manageable for any new developer for adding and removing pages as there is no CMS integration. Also keeping sitemap structure same to ensure good SEO."
      ],
      images: [
        '/img/projects/bd/1.png',
        '/img/projects/bd/2.png',
        '/img/projects/bd/3.png',
        '/img/projects/bd/4.png'
      ],
      mainLeftWidth: 1,
      pageName: "Projects"
    },
    {
      template: 'mainSimple',
      heading: "Mogul",
      paragraphs: [
        "Marketing site for company building training platforms. Website is build using GatsbyJS, static site generator based on ReactJS for great performance.",
        "Biggest challenge was implementing headless CMS which met requirements of tech stack used in company (ideally hosted on AWS and MySQL database)."
      ],
      images: [
        '/img/projects/mogul/1.png',
        '/img/projects/mogul/2.png',
        '/img/projects/mogul/3.png'
      ],
      mainLeftWidth: 1,
      pageName: "Projects"
    },
    {
      template: 'mainSimple',
      heading: "Discover New Landscapes",
      paragraphs: [
        'Blogging platform for South African Airways built on WordPress.',
        'Challenge was building custom template from most basic boilerplate, using Webpack to improve build process. Minimise using Wordpress plugins therefore building custom filtering system, creating PHP functions to communicate with JS through AJAX calls.'
      ],
      images: [
        '/img/projects/dnl/1.png',
        '/img/projects/dnl/2.png',
        '/img/projects/dnl/3.png'
      ],
      mainLeftWidth: 1,
      pageName: "Projects"
    },
    {
      template: 'mainSimple',
      heading: "Jan Smandra",
      paragraphs: [
        'Personal Website.',
        'Challenge was design website using design language given from already designed flyer. Custom built with GatsbyJS with aim to make it fast, simple, reliable and SEO friendly.'
      ],
      images: [
        '/img/projects/janci/1.png',
        '/img/projects/janci/2.png',
        '/img/projects/janci/3.png'
      ],
      mainLeftWidth: 1,
      pageName: "Projects"
    }
  ],
  photography: [
    {
      template: 'photography',
      heading: "Photography",
      filter: [
        'people', 'landscape', 'longExposure'
      ],
      photos: [
        {
          src: "/img/photography/people/1.jpg",
          filter: "people",
        },
        {
          src: "/img/photography/people/2.jpg",
          filter: "people",
        },
        {
          src: "/img/photography/people/3.jpg",
          filter: "people",
        },
        {
          src: "/img/photography/people/4.jpg",
          filter: "people",
        },
        {
          src: "/img/photography/people/5.jpg",
          filter: "people",
        },
        {
          src: "/img/photography/people/6.jpg",
          filter: "people",
        },
        {
          src: "/img/photography/landscape/1.jpg",
          filter: "landscape",
        },
        {
          src: "/img/photography/landscape/2.jpg",
          filter: "landscape",
        },
        {
          src: "/img/photography/landscape/3.jpg",
          filter: "landscape",
        },
        {
          src: "/img/photography/landscape/4.jpg",
          filter: "landscape",
        },
        {
          src: "/img/photography/long/1.jpg",
          filter: "longExposure",
        },
        {
          src: "/img/photography/long/2.jpg",
          filter: "longExposure",
        },
        {
          src: "/img/photography/long/3.jpg",
          filter: "longExposure",
        },
        {
          src: "/img/photography/long/4.jpg",
          filter: "longExposure",
        },
      ],
      images: [],
      mainLeftWidth: 2,
      pageName: "Photography"
    }
  ],
  contact: [
    {
      template: 'contact',
      heading: "Contact",
      subheading: "If you want me to help you creating something awesome or simply wanna say hi, feel free to do so!",
      mainLeftWidth: 2
    }
  ]
};
