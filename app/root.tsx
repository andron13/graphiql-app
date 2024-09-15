import { ReactNode } from "react";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Footer, Header } from "~/entities";
import { UserProvider } from "~/shared/context";

import "./tailwind.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <Scripts />
      </head>
      <body>
        <UserProvider>
          <Header />
          <div className="mx-auto mt-10 flex flex-grow flex-col items-center md:w-[1024px]">
            {children}
          </div>
          <Footer />
        </UserProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
