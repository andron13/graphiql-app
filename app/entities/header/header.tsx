import websiteConfig from "~/shared/website-config";

const navigationLinks = [
  {
    url: "/login",
    label: "Login",
    title: "Login",
  },
  {
    url: "/logout",
    label: "Logout",
    title: "Logout",
  },
];

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            <a
              href="/"
              className="flex items-center space-x-3 hover:text-gray-700"
            >
              <img
                className="h-8 w-auto sm:h-10"
                src={websiteConfig.logos.connectLogo}
                alt={websiteConfig.name}
              />
              <span className="text-xl font-semibold">
                {websiteConfig.name}
              </span>
            </a>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              {navigationLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
