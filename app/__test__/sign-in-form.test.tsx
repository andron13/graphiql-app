import { signInWithEmailAndPassword } from "@firebase/auth";
import { useNavigate } from "@remix-run/react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Mock } from "vitest";

import { SignInForm } from "~/entities/login-form";
import { auth } from "~/shared/authentification/firebase";
import { useUser } from "~/shared/context/use-context";
import { useLanguage } from "~/shared/context/use-language";

vi.mock("@firebase/auth", () => ({
  signInWithEmailAndPassword: vi.fn(),
  getAuth: vi.fn(),
}));
vi.mock("@remix-run/react", () => ({
  useNavigate: vi.fn(),
  Link: vi.fn(),
}));
vi.mock("~/shared/context/use-context", () => ({
  ...vi.importActual("~/shared/context/use-context"),
  useUser: vi.fn(),
}));
vi.mock("~/shared/context/use-language", () => ({
  ...vi.importActual("~/shared/context/use-language"),
  useLanguage: vi.fn(),
}));
describe("SignInForm", () => {
  beforeEach(() => {
    const mockLanguage = {
      site_content: {
        submit: "Submit",
        validationErrors: {
          emailRequired: "Email is required",
          emailInvalid: "Email must be a valid email address",
          passwordRequired: "Password is required",
          passwordStrength:
            "Password must be at least 8 characters long, include at least 1 digit, one special character, and at least one letter (Unicode characters are supported)",
          confirmPasswordRequired: "Confirm Password is required",
          passwordsMustMatch: "Passwords must match",
          invalidEmailPassword: "Invalid email or password",
        },
      },
    };
    (useLanguage as Mock).mockReturnValue(mockLanguage);
  });

  it("renders SignInForm", () => {
    const loginContext = vi.fn();
    const mockedUser = {
      login: loginContext,
    };
    (useUser as Mock).mockReturnValue(mockedUser);

    render(<SignInForm />);
    expect(screen.getByText(/Submit/)).toBeInTheDocument();
    expect(screen.getByText(/Email/)).toBeInTheDocument();
    expect(screen.getByText(/Password/)).toBeInTheDocument();
  });

  it("submit form", async () => {
    const loginContext = vi.fn();
    const mockedUser = {
      login: loginContext,
    };
    const mockNavigate = vi.fn();

    vi.mocked(signInWithEmailAndPassword as Mock).mockResolvedValue({
      user: { email: "test@mail.com" },
    });

    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useUser as Mock).mockReturnValue(mockedUser);

    render(<SignInForm />);
    fireEvent.change(screen.getByLabelText(/Email:/i), {
      target: { value: "test@mail.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password:/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "test@mail.com",
        "password123",
      );
    });

    expect(loginContext).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("displays validation errors", async () => {
    render(<SignInForm />);
    fireEvent.click(screen.getByText(/Submit/i));

    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
  });

  it("displays error message when login fails", async () => {
    (signInWithEmailAndPassword as Mock).mockRejectedValueOnce(
      new Error("Login failed"),
    );

    render(<SignInForm />);

    fireEvent.change(screen.getByLabelText(/Email:/i), {
      target: { value: "invalid@mail.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password:/i), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(screen.getByText("Invalid email or password")).toBeInTheDocument();
    });
  });
});
