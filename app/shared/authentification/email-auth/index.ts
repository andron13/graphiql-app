import { createUserWithEmailAndPassword } from "@firebase/auth";

import { auth } from "../firebase";

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  return userCredential.user;
};
