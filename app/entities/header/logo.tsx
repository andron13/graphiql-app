import websiteConfig from "~/shared/website-config";

export const Logo = () => {
  return (
    <div className="text-3xl font-bold text-gray-900">
      <a href="/" className="flex items-center space-x-3 hover:text-gray-700">
        <img
          className="h-8 w-auto sm:h-10"
          src={websiteConfig.logos.connectLogo}
          alt={websiteConfig.name}
        />
        <h2 className="text-xl font-semibold">{websiteConfig.name} - test</h2>
      </a>
    </div>
  );
};
