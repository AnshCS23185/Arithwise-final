export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        relative w-11 h-11 rounded-full
        flex items-center justify-center
        border border-white/40
        bg-white/10 backdrop-blur
        transition-all duration-300
        hover:scale-105
      "
      aria-label="Toggle theme"
    >
      <span
        className={`
          absolute transition-all duration-500
          ${theme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0"}
        `}
      >
        🌙
      </span>

      <span
        className={`
          absolute transition-all duration-500
          ${theme === "light"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"}
        `}
      >
        ☀️
      </span>
    </button>
  );
}