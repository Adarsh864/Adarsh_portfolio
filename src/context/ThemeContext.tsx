"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type PortfolioTheme = 'cyberpunk' | 'original';

interface ThemeContextValue {
  theme: PortfolioTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'cyberpunk',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<PortfolioTheme>('cyberpunk');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'cyberpunk' ? 'original' : 'cyberpunk'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
