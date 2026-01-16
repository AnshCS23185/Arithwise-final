import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.theme === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 px-4 py-2 rounded-full
                 bg-gray-200 dark:bg-gray-800
                 text-gray-900 dark:text-gray-100
                 transition-all duration-300"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
