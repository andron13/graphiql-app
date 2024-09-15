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
}));

vi.mock("~/shared/context/use-context", () => ({
  useUser: vi.fn(),
}));

vi.mock("~/shared/context/use-language", () => ({
  useLanguage: vi.fn(),
}));

describe("SignInForm", () => {
  beforeEach(() => {
    const mockLanguage = {
      site_content: {
        submit: "Submit",
        emailConfig: {
          email: "Email",
          password: "Password",
        },
        validationErrors: {
          emailRequired: "Email is required",
          emailInvalid: "Email must be a valid email address",
          passwordRequired: "Password is required",
          passwordStrength:
            "Password must be at least 8 characters long, include at least 1 digit, one special character, and at least one letter (Unicode characters are supported)",
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
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/)).toBeInTheDocument();
  });
  it.skip("submits form and handles login success", async () => {
    const loginContext = vi.fn();
    const mockedUser = {
      login: loginContext,
    };
    const mockNavigate = vi.fn();

    (signInWithEmailAndPassword as Mock).mockResolvedValue({
      user: { email: "test@mail.com" },
    });

    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useUser as Mock).mockReturnValue(mockedUser);

    render(<SignInForm />);
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@mail.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
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

    expect(loginContext).toHaveBeenCalledWith("test@mail.com", "password123");
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("displays validation errors", async () => {
    render(<SignInForm />);
    fireEvent.click(screen.getByText(/Submit/i));

    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Password is required/i),
    ).toBeInTheDocument();
  });

  it.skip("displays error message when login fails", async () => {
    (signInWithEmailAndPassword as Mock).mockRejectedValueOnce(
      new Error("Invalid email or password"),
    );

    render(<SignInForm />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "invalid@mail.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(
        screen.getByText(/Invalid email or password/i),
      ).toBeInTheDocument();
    });
  });
});
