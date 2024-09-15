import { FC, ReactNode, useState } from "react";

import { Link } from "@remix-run/react";

import websiteConfig from "~/shared/website-config";

export const Footer: FC = (): ReactNode => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer>
      <div className="mx-auto flex max-w-7xl justify-between">
        <div
          className="relative inline-block"
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <img
            src={websiteConfig.logos.githubLogo}
            alt="authors"
            width={30}
            className="cursor-pointer"
          />

          <div
            className={`absolute bottom-full left-[250%] z-10 flex -translate-x-1/2 transform flex-col gap-2 whitespace-nowrap rounded border border-gray-300 bg-white px-4 py-2 font-medium text-blue-500 shadow-lg transition-opacity duration-500 ${
              isHovered ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <Link
              to={websiteConfig.links.authors.lead.pathname}
              title={websiteConfig.links.authors.lead.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {websiteConfig.links.authors.lead.title}
            </Link>
            <Link
              to={websiteConfig.links.authors.dev.pathname}
              title={websiteConfig.links.authors.dev.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {websiteConfig.links.authors.dev.title}
            </Link>
          </div>
        </div>
        <p className="flex items-center text-sm">Anno 08.2024</p>
        <Link
          to={websiteConfig.links.course.pathname}
          title={websiteConfig.links.course.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={websiteConfig.logos.rssLogo} alt="RS SCHOOL" width={30} />
        </Link>
      </div>
    </footer>
  );
};
