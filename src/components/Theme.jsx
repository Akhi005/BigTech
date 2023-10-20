import { createContext, useState } from "react";
import Switch from "react-switch";
import Home from "./Home";
export const ThemeContext = createContext(null)
const Theme = () => {
  
    const [theme,setTheme] = useState("light");
    const toggleTheme =()=>{
        setTheme((curr)=>(
            curr==="light"?"dark":"light"
        ));
    }
    return (
        <div>
             <ThemeContext.Provider value={{theme,toggleTheme}}>
        <div id={theme}>
            <Home></Home>
            </div>
        </ThemeContext.Provider>
        <div>
           <Switch onChange={toggleTheme} checked={theme === "dark"}/>
           </div>
        </div>
    );
};

export default Theme;