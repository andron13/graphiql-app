import { useNavigate } from "@remix-run/react";

import { useUser } from "~/shared/context";

export const PrimaryMenu = () => {
  const { logout: logoutContext, isUserLoggedIn } = useUser(); // Используем функцию проверки
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      logoutContext();
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav>
      <ul className="flex space-x-4">
        {isUserLoggedIn() ? (
          <li>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900"
              title="Logout"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <a
              href="/login"
              className="text-gray-600 hover:text-gray-900"
              title="Login"
            >
              Login
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
