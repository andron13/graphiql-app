import { createUserWithEmailAndPassword } from "@firebase/auth";
import { Mock, describe, expect, it, vi } from "vitest";

import { registerWithEmailAndPassword } from "~/shared/authentification";
import { auth } from "~/shared/authentification/firebase";

vi.mock("@firebase/auth", () => ({
  createUserWithEmailAndPassword: vi.fn(),
  getAuth: vi.fn(),
}));

describe("registerWithEmailAndPassword", () => {
  it("should call createUserWithEmailAndPassword with correct parameters", async () => {
    const email = "test@mail.com";
    const password = "123456";

    vi.mocked(createUserWithEmailAndPassword as Mock).mockResolvedValue({
      user: { email },
    });

    await registerWithEmailAndPassword(email, password);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      auth,
      email,
      password,
    );
  });

  it("should handle successful registration", async () => {
    const email = "test@mail.com";
    const password = "123456";

    vi.mocked(createUserWithEmailAndPassword as Mock).mockResolvedValue({
      user: { email },
    });

    const consoleLogSpy = vi.spyOn(console, "log");

    await registerWithEmailAndPassword(email, password);

    expect(consoleLogSpy).toHaveBeenCalledWith("Registered user:", { email });
  });

  it("should handle registration errors", async () => {
    const email = "test@mail.com";
    const password = "123456";

    vi.mocked(createUserWithEmailAndPassword as Mock).mockRejectedValue(
      new Error("Registration error"),
    );

    const consoleErrorSpy = vi.spyOn(console, "error");

    await registerWithEmailAndPassword(email, password);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during registration:",
      new Error("Registration error"),
    );
  });
});
