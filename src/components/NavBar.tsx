import { useLocation, useNavigate } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const links = [
    { label: t("homeBtn"), path: "/home" },
    { label: t("projectBtn"), path: "/projects" },
  ];

  return (
    <div className="flex justify-center gap-10 w-full my-5 mt-10 md:justify-start md:mt-0">
      {links.map((link) => (
        <button
          key={link.path}
          className={`cursor-pointer ${
            location.pathname === link.path
              ? "primary-color"
              : "secondary-color"
          }`}
          onClick={() => navigate(link.path)}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};
