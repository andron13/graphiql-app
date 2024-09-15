import { Link } from "@remix-run/react";

import { useLanguage } from "~/shared/context";

export const SecondaryMenu = () => {
  const { site_content } = useLanguage();

  const links = [
    { name: site_content.secondaryMenu.restClient, to: "/rest-client" },
    { name: site_content.secondaryMenu.graphiqlClient, to: "/graphiql-client" },
    { name: site_content.secondaryMenu.history, to: "/history" },
  ];

  return (
    <nav className="mt-20 w-2/3">
      <ul className="flex w-full justify-between space-x-6">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.to}
              className="inline-block rounded-md border border-transparent bg-white px-4 py-2 font-medium text-blue-500 transition-colors duration-200 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-700"
              title={link.name}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
