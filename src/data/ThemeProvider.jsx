import { createContext,useState } from "react";

export const ThemeContext = createContext();


export const ThemeProvider=({children})=>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        console.log("is dark mode",isDarkMode)
      };

    return <>
    <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
    </>
}