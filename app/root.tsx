import { ReactNode } from "react";

import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { Footer, Header } from "~/entities";
import { UserProvider } from "~/shared/context";
import { getTime } from "~/shared/time";

import "./tailwind.css";

// export async function loader() {
//   return json({
//     ENV: {
//       apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//       authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//       projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//       storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//       messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//       appId: process.env.REACT_APP_FIREBASE_APP_ID,
//       measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
//     },
//   });
// }

export function Layout({ children }: { children: ReactNode }) {
  // const data = useLoaderData<typeof loader>();
  getTime();
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
          <main>{children}</main>
          <Footer />
        </UserProvider>
        <ScrollRestoration />
        {/*<script*/}
        {/*  dangerouslySetInnerHTML={{*/}
        {/*    __html: `window.ENV = ${JSON.stringify(data.ENV)}`,*/}
        {/*  }}*/}
        {/*/>*/}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
