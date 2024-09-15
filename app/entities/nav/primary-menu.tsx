import { useNavigate } from "@remix-run/react";

import { useLanguage, useUser } from "~/shared/context";

export const PrimaryMenu = () => {
  const navigate = useNavigate();
  const { site_content } = useLanguage();
  const { logout: logoutContext, isUserLoggedIn } = useUser();

  const handleLogout = async () => {
    try {
      logoutContext();
      navigate("/");
    } catch (error) {
      // console.error("Error during logout:", error);
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
              {site_content.signOut}
            </button>
          </li>
        ) : (
          <li>
            <a
              href="/login"
              className="text-gray-600 hover:text-gray-900"
              title="Login"
            >
              {site_content.signIn}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
