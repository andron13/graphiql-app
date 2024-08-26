// firebase.ts
// import { getAnalytics } from "@firebase/analytics";
import { getApp, getApps, initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

import { getFirebaseConfig } from "~/get-env";

const firebaseConfig = getFirebaseConfig();

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, auth };
