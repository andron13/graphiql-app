import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = (): ReactNode => {
  return (
    <footer className="bg-gray-100 py-6 text-gray-700">
      <div className="container mx-auto px-6 sm:px-12 md:flex md:items-center md:justify-between">
        <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
          <p className="mb-2 text-sm md:mb-0">React Course 2024</p>
          <p className="mb-2 text-sm md:mb-0">©andron13</p>
          <Link
            to="/about"
            className="text-sm text-indigo-600 transition-colors duration-300 hover:text-indigo-800"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
};
