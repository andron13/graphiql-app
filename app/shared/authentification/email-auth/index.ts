import { createUserWithEmailAndPassword } from "@firebase/auth";

import { auth } from "~/shared/authentification/firebase";

export const registerWithEmailAndPassword = (
  email: string,
  password: string,
) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      return userCredential.user;
    },
  );
};
