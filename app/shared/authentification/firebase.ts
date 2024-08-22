// app/shared/authentification/firebase.ts
// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
// console.log(process.env.REACT_APP_FIREBASE_API_KEY);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export { analytics, app };
// const initFirebaseApp = () => initializeApp(firebaseConfig);
// export default initFirebaseApp;
const firebaseConfig = {
  apiKey: "AIzaSyDkdE2tspYLue_0YA7-gYGfDMcg5ArsWJc",
  authDomain: "graphiql-app-ee075.firebaseapp.com",
  projectId: "graphiql-app-ee075",
  storageBucket: "graphiql-app-ee075.appspot.com",
  messagingSenderId: "1071092674079",
  appId: "1:1071092674079:web:96e669af4fb60ca3856f2a",
  measurementId: "G-S9D2REK0X9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
