"use client";

import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>...</>;

  if (currentTheme === "dark") {
    return <Sun className="w-5 h-5" onClick={() => setTheme("light")} />;
  }

  if (currentTheme === "light") {
    return (
      <Moon className="w-5 h-5" onClick={() => setTheme("dark")} />
    );
  }
}