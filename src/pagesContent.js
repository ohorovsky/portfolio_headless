export const pageNames = {
  home: "Home",
  projects: "Projects",
  photography: "Photography"
};

export const content = {
  home: [
    {
      template: 'intro',
      heading: "Hi there, I'm Ondrej. Front-End Developer",
      subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis.",
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
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
        1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin.",
      },
      images: [
        "/img/home/1.jpeg",
        "/img/home/2.jpg",
        "/img/home/3.jpg",
        "/img/home/4.jpg"
      ],
      mainLeftWidth: 1,
      pageName: "Home"
    },
    {
      template: 'mainSimple',
      heading: "My Skills",
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
        1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin.",
      },
      images: [
        "/img/home/2.jpg"
      ],
      mainLeftWidth: 1,
      pageName: "Home"
    }
  ],
  projects: [
    {
      template: 'projects',
      heading: "Projects",
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
      },
      projects: [
        {
          pageRef: 1, //this is reference for onClick event so it will change page like sidebar menu dots...
          name: "Project 1",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
          image: '/img/home/4.jpg',
          link: 'http://www.google.com'
        },
        {
          pageRef: 2,
          name: "Project 2",
          paragraph: " Meg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
          image: '/img/home/3.jpg',
          link: 'http://www.youtube.com'
        }
      ],
      images: [],
      mainLeftWidth: 2,
      pageName: "Projects"
    },
    {
      template: 'mainSimple',
      heading: "Project 1",
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
      },
      images: [
        '/img/home/4.jpg'
      ],
      mainLeftWidth: 1,
      pageName: "Projects"
    },
    {
      template: 'mainSimple',
      heading: "Project 2",
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
      },
      images: [
        '/img/home/3.jpg'
      ],
      mainLeftWidth: 1,
      pageName: "Projects"
    }
  ],
  photography: [
    {
      template: 'photography',
      heading: "Photography",
      paragraphs: {
        0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet mi quis velit sollicitudin, quis pretium justo egestas. Nullam sagittis tincidunt sapien et fringilla. Cras ullamcorper hendrerit mauris at dictum. Vivamus nec sapien ac tellus dignissim malesuada eu eu leo. Aenean sollicitudin faucibus eros, ut vehicula massa pretium ultricies. Donec vel enim purus. Integer lacinia ante eu consectetur feugiat.",
      },
      photos: [{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }, {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }, {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }, {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },],
      images: [],
      mainLeftWidth: 2,
      pageName: "Photography"
    }
  ],
};
