import { useSearchParams } from "@remix-run/react";
import { render } from "@testing-library/react";
import { Mock, describe, expect, it, vi } from "vitest";

import { LoginForm } from "~/entities/login-form";
import Auth from "~/routes/login/index";

vi.mock("@remix-run/react", () => ({
  ...vi.importActual("@remix-run/react"),
  useSearchParams: vi.fn(),
}));

vi.mock("~/entities/login-form", () => ({
  LoginForm: vi.fn(() => <div>LoginForm Component</div>),
}));

describe("Auth Component", () => {
  it('should render LoginForm with isSignup set to true when "signup=true" is in the URL', () => {
    (useSearchParams as Mock).mockReturnValue([
      new URLSearchParams("signup=true"),
    ]);

    render(<Auth />);

    expect(LoginForm).toHaveBeenCalledWith({ isSignup: true }, {});
  });

  it('should render LoginForm with isSignup set to false when "signup=true" is not in the URL', () => {
    (useSearchParams as Mock).mockReturnValue([new URLSearchParams("")]);

    render(<Auth />);

    expect(LoginForm).toHaveBeenCalledWith({ isSignup: false }, {});
  });
});
