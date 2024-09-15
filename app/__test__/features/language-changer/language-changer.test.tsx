import { fireEvent, render, screen } from "@testing-library/react";
import { Mock, describe, expect, it, vi } from "vitest";

import { LanguageChanger } from "~/features/language-changer";
import { useLanguage, useUser } from "~/shared/context";
import { LanguageCode } from "~/shared/types";

vi.mock("~/shared/context", () => ({
  useUser: vi.fn(),
  useLanguage: vi.fn(),
}));

describe("LanguageChanger Component", () => {
  it("renders with the default language and allows language selection", () => {
    const mockSetLanguage = vi.fn();
    const mockSiteContent = {
      languageLabels: {
        [LanguageCode.EN_GB]: "English",
        [LanguageCode.DE_DE]: "German",
        [LanguageCode.UK_UA]: "Ukrainian",
      },
    };

    (useUser as Mock).mockReturnValue({
      user: { language: LanguageCode.EN_GB },
      setLanguage: mockSetLanguage,
    });
    (useLanguage as Mock).mockReturnValue({
      site_content: mockSiteContent,
    });

    render(<LanguageChanger />);

    const button = screen.getByText("English");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const germanOption = screen.getByText("German");
    expect(germanOption).toBeInTheDocument();
    const ukrainianOption = screen.getByText("Ukrainian");
    expect(ukrainianOption).toBeInTheDocument();

    fireEvent.click(ukrainianOption);

    expect(mockSetLanguage).toHaveBeenCalledWith(LanguageCode.UK_UA);

    expect(screen.queryByText("English")).not.toBeInTheDocument();
    expect(screen.getByText("Ukrainian")).toBeInTheDocument();
  });

  it("displays the current user language if it's set", () => {
    const mockSetLanguage = vi.fn();
    const mockSiteContent = {
      languageLabels: {
        [LanguageCode.BE_BY]: "Belarusian",
      },
    };

    (useUser as Mock).mockReturnValue({
      user: { language: LanguageCode.BE_BY },
      setLanguage: mockSetLanguage,
    });
    (useLanguage as Mock).mockReturnValue({
      site_content: mockSiteContent,
    });

    render(<LanguageChanger />);

    const button = screen.getByText("Belarusian");
    expect(button).toBeInTheDocument();
  });
});
