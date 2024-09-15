import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

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
const auth = getAuth(app);
export { app, auth };
