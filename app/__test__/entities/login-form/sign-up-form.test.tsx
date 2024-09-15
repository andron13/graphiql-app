import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Mock } from "vitest";

import { SignUpForm } from "~/entities/login-form";
import { registerWithEmailAndPassword } from "~/shared/authentification";
import { useLanguage } from "~/shared/context/use-language";

vi.mock("~/shared/authentification", () => ({
  registerWithEmailAndPassword: vi.fn(),
}));

vi.mock("@firebase/auth", () => ({
  createUserWithEmailAndPassword: vi.fn(),
  getAuth: vi.fn(),
}));

vi.mock("~/shared/context/use-language", () => ({
  ...vi.importActual("~/shared/context/use-language"),
  useLanguage: vi.fn(),
}));

describe.skip("SignUpForm", () => {
  beforeEach(() => {
    const mockLanguage = {
      site_content: {
        register: "Register",
        emailConfig: {
          email: "Email",
          password: "Password",
          confirmPassword: "Confirm Password",
        },
        validationErrors: {
          emailRequired: "Email is required",
          emailInvalid: "Email must be a valid email address",
          passwordRequired: "Password is required",
          passwordStrength:
            "Password must be at least 8 characters long, include at least 1 digit, one special character, and at least one letter (Unicode characters are supported)",
          confirmPasswordRequired: "Confirm Password is required",
          passwordsMustMatch: "Passwords must match",
        },
      },
    };
    (useLanguage as Mock).mockReturnValue(mockLanguage);
  });

  it("renders SignUpForm", () => {
    render(<SignUpForm />);

    expect(screen.getByText(/Register/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password/)).toBeInTheDocument();
  });

  it("calls submitHandler", async () => {
    render(<SignUpForm />);
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@mail.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "Password123@" },
    });
    fireEvent.change(screen.getByLabelText("Confirm Password"), {
      target: { value: "Password123@" },
    });
    fireEvent.click(screen.getByText(/Register/i));

    await waitFor(() => {
      expect(registerWithEmailAndPassword).toHaveBeenCalledWith(
        "test@mail.com",
        "Password123@",
      );
    });
  });

  it("shows password and confirm password visibility toggle icons", () => {
    const { container } = render(<SignUpForm />);

    expect(screen.getByLabelText("Password").getAttribute("type")).toBe(
      "password",
    );
    expect(
      screen.getByLabelText(/Confirm Password/i).getAttribute("type"),
    ).toBe("password");

    const showPasswordBtn = container.querySelector(
      "#show-password",
    ) as HTMLButtonElement;
    const showConfirmPasswordBtn = container.querySelector(
      "#show-confirmPassword",
    ) as HTMLButtonElement;

    fireEvent.click(showPasswordBtn);
    expect(screen.getByLabelText("Password").getAttribute("type")).toBe("text");

    fireEvent.click(showConfirmPasswordBtn);
    expect(
      screen.getByLabelText(/Confirm Password/i).getAttribute("type"),
    ).toBe("text");
  });

  it("displays validation errors", async () => {
    render(<SignUpForm />);
    fireEvent.click(screen.getByText(/Register/i));

    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
    expect(
      await screen.findByText(/Confirm Password is required/i),
    ).toBeInTheDocument();
  });
});
