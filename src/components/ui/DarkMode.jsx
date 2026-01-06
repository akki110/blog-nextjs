"use client";

import { Moon, Sun } from "@/lib/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative w-12 h-6 rounded-full
        bg-gray-200 dark:bg-gray-700
        transition-colors duration-300
        focus:outline-none
      "
    >
      {/* KNOB */}
      <span
        className={`
          absolute top-1/2 left-1
          -translate-y-1/2
          w-4 h-4 rounded-full
          flex items-center justify-center
          transition-all duration-300 ease-out
          ${isDark ? "translate-x-6 scale-110" : "translate-x-0 scale-100"}
        `}
      >
        {/* ICON */}
        {isDark ? (
          <Moon className="w-4 h-4 text-white" />
        ) : (
          <Sun className="w-4 h-4 text-white" />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
