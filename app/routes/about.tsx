import { useLanguage } from "~/shared/store";

export default function About() {
  const { site_content } = useLanguage();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-6">
      <div className="rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-semibold text-gray-800">
          {site_content.welcomeMessage.title}
        </h1>
        <p className="text-lg text-gray-600">
          {site_content.welcomeMessage.subtitle}
        </p>
      </div>
    </div>
  );
}
