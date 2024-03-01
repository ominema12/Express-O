import {createContext} from "react";


export  default ThemeContext=createContent();

export const ThemeContextProvider=({children})=>{
return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};