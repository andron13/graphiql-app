import { Link } from "@remix-run/react";

import { useUser } from "~/shared/context";

const links = [
  { name: "REST Client", to: "/rest-client" },
  { name: "GraphiQL Client", to: "/graphiql-client" },
  { name: "History", to: "/history" },
];

export const SecondaryMenu = () => {
  const { isUserLoggedIn } = useUser();
  if (!isUserLoggedIn()) return null;
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
