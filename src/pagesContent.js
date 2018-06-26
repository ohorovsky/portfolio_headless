export const pageNames = {
  home: "Home",
  projects: "Projects"
};

export const content = {
  home: {
    page1: {
      template: 'intro',
      heading: "Hi there, I'm Ondrej. Front-End Developer",
      subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis.",
      paragraphs: {
        0: "",
        1: "",
      },
      images: {},
      mainLeftWidth: 2,
      pageName: "Home"
    },
    page2: {
      template: 'mainSimple',
      heading: "About me",
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
        1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin.",
      },
      images: {
        0: "/img/home/1.jpeg",
        1: "/img/home/2.jpg",
        2: "/img/home/3.jpg",
        3: "/img/home/4.jpg"
      },
      mainLeftWidth: 1,
      pageName: "Home"
    },
    page3: {
      template: 'mainSimple',
      heading: "My Skills",
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
        1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin.",
      },
      images: {
        0: "/img/home/2.jpg"
      },
      mainLeftWidth: 1,
      pageName: "Home"
    }
  },
  projects: {
    page1: {
      template: 'projects',
      heading: "Projects",
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
      },
      projects: {
        0: {
          pageRef: 'page2', //this is reference for onClick event so it will change page like sidebar menu dots...
          name: "Project 1",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
          image: '/img/home/4.jpg',
          link: 'http://www.google.com'
        },
        1: {
          name: "Project 2",
          paragraph: " Meg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
          image: '/img/home/3.jpg',
          link: 'http://www.youtube.com'
        }
      },
      images: {},
      mainLeftWidth: 2,
      pageName: "Projects"
    },
    page2: {
      template: 'mainSimple',
      heading: "Project 1",
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
      },
      images: {
        0: '/img/home/4.jpg'
      },
      mainLeftWidth: 1,
      pageName: "Projects"
    },
    page3: {
      template: 'mainSimple',
      heading: "Project 2",
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
      },
      images: {
        0: '/img/home/3.jpg'
      },
      mainLeftWidth: 1,
      pageName: "Projects"
    }
  },


};
