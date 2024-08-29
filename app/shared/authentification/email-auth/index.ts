import { createUserWithEmailAndPassword } from "@firebase/auth";

import { auth } from "~/shared/authentification/firebase";

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log("Registered user:", user);
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
