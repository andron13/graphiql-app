import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import websiteConfig from "~/shared/website-config";

export const Footer: FC = (): ReactNode => {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl justify-between">
        <Link
          to={websiteConfig.links.author.pathname}
          title={websiteConfig.links.author.title}
        >
          <img
            src={websiteConfig.logos.andron13}
            alt={websiteConfig.links.author.title}
            width={30}
          />
        </Link>
        {/*TODO удалить тест страницу about*/}
        <p className="flex items-center text-sm">
          <Link to="/about" title="about">
            Anno 08.2024
          </Link>
        </p>
        <Link
          to={websiteConfig.links.course}
          title={websiteConfig.links.author.title}
        >
          <img src={websiteConfig.logos.rssLogo} alt="RS SCHOOL" width={30} />
        </Link>
      </div>
    </footer>
  );
};
