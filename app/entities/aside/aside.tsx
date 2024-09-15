import { FC, ReactNode } from "react";

import { Link } from "@remix-run/react";

import { useLanguage } from "~/shared/context";

export const Aside: FC = (): ReactNode => {
  const { site_content } = useLanguage();

  const links = [
    { name: site_content.secondaryMenu.restClient, to: "/rest-client" },
    { name: site_content.secondaryMenu.graphiqlClient, to: "/graphiql-client" },
    { name: site_content.secondaryMenu.history, to: "/history" },
  ];

  return (
    <aside className="w-64 rounded-lg border-r border-gray-200 bg-white p-8 shadow-md ring-1 ring-gray-200">
      <nav>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="block rounded-lg border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-600 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-200 hover:text-blue-800"
                title={link.name}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
