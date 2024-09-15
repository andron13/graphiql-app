import { Link } from "@remix-run/react";

import { useLanguage } from "~/shared/context";
import websiteConfig from "~/shared/website-config";

export const Logo = () => {
  const { site_content } = useLanguage();
  return (
    <div className="text-3xl font-bold text-gray-900">
      <Link to="/" className="flex items-center space-x-3 hover:text-gray-700">
        <img
          className="h-8 w-auto sm:h-10"
          src={websiteConfig.logos.connectLogo}
          alt={site_content.websiteConfig.name}
          width={30}
        />
        <h2 className="text-xl font-semibold">
          {site_content.websiteConfig.name}
        </h2>
      </Link>
    </div>
  );
};
