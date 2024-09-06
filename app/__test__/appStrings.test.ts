import { describe, expect, it } from "vitest";

import { appStrings, defaultLanguage } from "~/shared/translations";
import { IAppStrings, LanguageCode } from "~/shared/types";

describe("appStrings", () => {
  it("should have the correct default language", () => {
    expect(defaultLanguage).toBe(LanguageCode.EN_GB);
  });

  it("should contain translations for EN_GB", () => {
    const strings: IAppStrings = appStrings[LanguageCode.EN_GB];
    expect(strings.welcomeMessage.title).toBe("Welcome");
    expect(strings.secondaryMenu.history).toBe("History");
    expect(strings.validationErrors.emailRequired).toBe("Email is required");
    expect(strings.websiteErrors.siteNotFound).toBe("Page not found");
  });

  it("should contain translations for DE_DE", () => {
    const strings: IAppStrings = appStrings[LanguageCode.DE_DE];
    expect(strings.welcomeMessage.title).toBe("Willkommen");
    expect(strings.secondaryMenu.history).toBe("Verlauf");
    expect(strings.validationErrors.emailRequired).toBe(
      "E-Mail ist erforderlich",
    );
    expect(strings.websiteErrors.siteNotFound).toBe("Seite nicht gefunden");
  });

  it("should contain translations for BE_BY", () => {
    const strings: IAppStrings = appStrings[LanguageCode.BE_BY];
    expect(strings.welcomeMessage.title).toBe("Сардэчна запрашаем");
    expect(strings.secondaryMenu.history).toBe("Гісторыя");
    expect(strings.validationErrors.emailRequired).toBe(
      "Электронная пошта неабходна",
    );
    expect(strings.websiteErrors.siteNotFound).toBe("Старонка не знойдзена");
  });

  it("should return correct strings for UK_UA", () => {
    const strings: IAppStrings = appStrings[LanguageCode.UK_UA];
    expect(strings.welcomeMessage.title).toBe("Ласкаво просимо");
    expect(strings.secondaryMenu.history).toBe("Історія");
    expect(strings.validationErrors.emailRequired).toBe("Email є обов'язковим");
    expect(strings.websiteErrors.siteNotFound).toBe("Сторінка не знайдена");
  });

  it("should return correct strings for RU_RU", () => {
    const strings: IAppStrings = appStrings[LanguageCode.RU_RU];
    expect(strings.welcomeMessage.title).toBe("Добро пожаловать");
    expect(strings.secondaryMenu.history).toBe("История");
    expect(strings.validationErrors.emailRequired).toBe("Email обязателен");
    expect(strings.websiteErrors.siteNotFound).toBe("Страница не найдена");
  });

  it("should return correct strings for PL_PL", () => {
    const strings: IAppStrings = appStrings[LanguageCode.PL_PL];
    expect(strings.welcomeMessage.title).toBe("Witamy");
    expect(strings.secondaryMenu.history).toBe("Historia");
    expect(strings.validationErrors.emailRequired).toBe("Email jest wymagany");
    expect(strings.websiteErrors.siteNotFound).toBe("Strona nie znaleziona");
  });

  it("should contain translations for JA_JP", () => {
    const strings: IAppStrings = appStrings[LanguageCode.JA_JP];
    expect(strings.welcomeMessage.title).toBe("ようこそ");
    expect(strings.secondaryMenu.history).toBe("履歴");
    expect(strings.validationErrors.emailRequired).toBe(
      "メールアドレスは必須です",
    );
    expect(strings.websiteErrors.siteNotFound).toBe("ページが見つかりません");
  });
});
