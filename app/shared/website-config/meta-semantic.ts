import websiteConfig from "~/shared/website-config/index";

export const metatags = {
  description: "description", // <meta name="description" content="This is an example page.">
  keywords: "keywords", // <meta name="keywords" content="Example, Sample, GraphqlPath">
  language: "language", // <meta http-equiv="content-language" content="en">
  subject: "subject", //<meta name="subject" content="your website subjects">
  copyright: "copyright", // <meta name="copyright" content="Company Name">
  revised: "revised", // <meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />
  robots: "robots", // <meta name="robots" content="index, follow">
  abstract: "abstract", // <meta name="abstract" content="...">,
  topic: "topic", // <meta name="topic" content="...">
  summary: "summary", // <meta name="summary" content="...">
  classification: "Classification", // <meta name="classification" content="Business">
  author: "author", // <meta name="author" content="John Doe, info@website.com">
  designer: "designer", // <meta name="designer" content="John Doe">
  owner: "owner", // <meta name="owner" content="John Doe">
  url: "url", // <meta name="url" content="http://www.websiteaddrress.com">
  identifierURL: "identifier-URL", //<meta name="Identifier-URL" content="http://www.websiteaddress.com">
  coverage: "coverage", // <meta name="coverage" content="Worldwide">
  category: "category", // <meta name="category" content="...">
  distribution: "distribution", // <meta name="distribution" content="Global">
  rating: "rating", // <meta name="rating" content="General">
  og_title: "og:title", // <meta property="og:title" content="Title of your website or post">
};

export const frontPageMetaArray = [
  { title: websiteConfig.name },
  { name: metatags.description, content: websiteConfig.description },
];
