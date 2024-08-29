// app/routes/login/index.tsx
import { useSearchParams } from "@remix-run/react";

import { LoginForm } from "~/entities/login-form";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.get("signup") === "true";
  return <LoginForm isSignup={isSignup} />;
}
