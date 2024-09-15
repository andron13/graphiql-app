import { fireEvent, render, screen } from "@testing-library/react";
import { Mock } from "vitest";

import { LoginForm } from "~/entities/login-form";
import { useLanguage } from "~/shared/context/use-language";

vi.mock("~/entities/login-form/sign-up-form", () => ({
  SignUpForm: vi.fn(() => <div>SignUpForm</div>),
}));

vi.mock("~/entities/login-form/sign-in-form", () => ({
  SignInForm: vi.fn(() => <div>SignInForm</div>),
}));

vi.mock("~/shared/context/use-language", () => ({
  ...vi.importActual("~/shared/context/use-language"),
  useLanguage: vi.fn(),
}));
// TODO: fix tests
describe.skip("LoginForm", () => {
  beforeEach(() => {
    const mockLanguage = {
      site_content: {
        signUp: "Sign Up",
        signIn: "Sign In",
      },
    };

    (useLanguage as Mock).mockReturnValue(mockLanguage);
  });
  it("renders SignInForm by default", () => {
    render(<LoginForm />);

    expect(screen.getByText(/SignInForm/)).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(screen.queryByText(/SignUpForm/)).not.toBeInTheDocument();
  });

  it("renders SignUpForm when isSignup prop is true", () => {
    render(<LoginForm isSignup={true} />);

    expect(screen.getByText(/SignUpForm/)).toBeInTheDocument();
    expect(screen.queryByText(/SignInForm/)).not.toBeInTheDocument();
  });

  it("toggles between SignIn and SignUp forms", () => {
    render(<LoginForm isSignup={false} />);

    expect(screen.getByText(/SignInForm/)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Sign Up/i));
    expect(screen.getByText(/SignUpForm/)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Sign In/i));
    expect(screen.getByText(/SignInForm/)).toBeInTheDocument();
  });
});
