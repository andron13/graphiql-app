import { ChangeEvent, FormEvent, useState } from "react";

import { signInWithEmailAndPassword } from "@firebase/auth";
import { useNavigate } from "@remix-run/react";

import { auth } from "~/shared/authentification/firebase";
import { useUser } from "~/shared/context";

export function SignInForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login: loginContext } = useUser();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const firebaseUser = userCredential.user;
      console.log({ firebaseUser });
      console.log("логин успешен");
      console.log("Logged in user:");
      loginContext(email, password);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="textInput"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="textInput"
        />
      </div>
      <button type="submit" className="registerButton">
        Submit
      </button>
    </form>
  );
}
