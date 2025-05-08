import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export const LanguageButton = () => {
  const { setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const selectLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative flex items-center justify-center">
      <button onClick={toggleDropdown}>
        <i className="bi bi-translate text-3xl cursor-pointer secondary-color"></i>
      </button>

      {open && (
        <div className="absolute right-full mr-4 flex gap-2 rounded-lg bg-gray-800 p-2 shadow-md">
          <button
            onClick={() => selectLanguage("es")}
            className="secondary-color px-1 rounded-lg hover:bg-gray-700"
          >
            Español
          </button>
          <span>|</span>
          <button
            onClick={() => selectLanguage("en")}
            className="secondary-color px-1 rounded-lg hover:bg-gray-700"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};
