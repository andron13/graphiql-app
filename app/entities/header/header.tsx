import { LanguageChanger, Logo, PrimaryMenu } from "./";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center justify-center gap-x-10">
            <LanguageChanger />
            <PrimaryMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
