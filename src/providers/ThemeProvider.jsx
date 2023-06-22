import { createContext, useState } from "react";

const ThemeContext = createContext();
// eslint-disable-next-line react/prop-types
const ThemeProvider = ({children}) => {
    const[theme,setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeProvider};