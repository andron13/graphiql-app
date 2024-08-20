import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = (): ReactNode => {
  return (
    <footer className="bg-gray-900 text-gray-500">
      <p className="flex w-full justify-around">
        <span>React Course 2024</span>
        <span>©andron13</span>
        <span>
          <Link to="about" title="test">
            About
          </Link>
        </span>
      </p>
    </footer>
  );
};
