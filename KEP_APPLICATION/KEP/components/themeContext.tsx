import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

type Theme = "normal" | "colorBlind";

interface ThemeContextProps {
    theme: Theme;
    themeMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const systemTheme = useColorScheme() as Theme;
    const [ theme, setTheme ] = useState<Theme>(systemTheme || 'normal');
    const [themeMode, setThemeMode] = useState<boolean>(theme === 'colorBlind');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'normal' ? "colorBlind" : "normal"))
        setThemeMode(!themeMode);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, themeMode}}>
            { children }
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useTheme must be used within a ThemeProvider!");
    }
    return context;
}