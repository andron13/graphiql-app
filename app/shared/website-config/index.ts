import {
  andron13LogoPath,
  connectLogoPath,
  githubLogoPath,
  rssLogoJsPath,
  rssLogoPath,
} from "~/shared/images";

const websiteConfig = {
  name: "Graphiql App",
  description:
    "The application allows users to interact with RESTful APIs and GraphQL endpoints, offering method selection, URL input, headers editing, and response viewing.",
  logos: {
    connectLogo: connectLogoPath,
    rssLogo: rssLogoPath,
    andron13: andron13LogoPath,
    rsLogoJs: rssLogoJsPath,
    githubLogo: githubLogoPath,
  },
  links: {
    authors: {
      lead: {
        pathname: "https://github.com/andron13",
        title: "andron13",
      },
      dev: {
        pathname: "https://github.com/VadymPopov",
        title: "VadymPopov",
      },
    },
    course: {
      pathname: "https://rs.school/courses/reactjs",
      title: "RSS React 2024 Q3",
    },
  },
  contact: {
    email: "contact@mywebsite.com",
    phone: "+1234567890",
  },
  locales: {
    en: {
      title: "Graphiql App",
      description:
        "The application allows users to interact with RESTful APIs and GraphQL endpoints",
    },
    de: {
      title: "Graphiql App",
      description:
        "The application allows users to interact with RESTful APIs and GraphQL endpoints",
    },
  },
};

export default websiteConfig;
