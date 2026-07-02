"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      data-theme={resolvedTheme}
    >
      <span className="theme-toggle-glow" aria-hidden="true" />
      <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g className="theme-toggle-sun-group">
          <circle className="theme-toggle-sun-core" cx="12" cy="12" r="4.5" fill="currentColor" />
          <g className="theme-toggle-rays">
            <line x1="12" y1="1.5" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="20" x2="12" y2="22.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="3.52" y1="3.52" x2="5.29" y2="5.29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.71" y1="18.71" x2="20.48" y2="20.48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="1.5" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="12" x2="22.5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="3.52" y1="20.48" x2="5.29" y2="18.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.71" y1="5.29" x2="20.48" y2="3.52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
        <path className="theme-toggle-moon" d="M12 3a9 9 0 1 0 9 9c0-0.46-0.04-0.92-0.1-1.36a5.5 5.5 0 0 1-8.14-6.3A8.96 8.96 0 0 0 12 3z" fill="currentColor" />
      </svg>
      <span className="sr-only">{isLight ? "Switch to dark mode" : "Switch to light mode"}</span>
    </button>
  );
}
