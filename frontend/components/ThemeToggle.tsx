"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
} 