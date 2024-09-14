import { useEffect } from "react";

import { useNavigate, useSearchParams } from "@remix-run/react";

import { LoginForm } from "~/entities/login-form";
import { useUser } from "~/shared/context";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.get("signup") === "true";

  return <LoginForm isSignup={isSignup} />;
}
