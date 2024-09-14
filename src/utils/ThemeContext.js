import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return(
        <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
            <div className={isDarkMode ? 'h-svh relative light' : 'h-svh relative dark'}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);