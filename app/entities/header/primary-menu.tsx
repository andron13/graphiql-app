export const PrimaryMenu = () => {
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
    {
      url: "/about",
      label: "about",
      title: "about it is just test",
    },
  ];
  return (
    <nav>
      <ul className="flex space-x-4">
        {navigationLinks.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              className="text-gray-600 hover:text-gray-900"
              title={link.title}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
