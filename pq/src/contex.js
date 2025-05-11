import React from "react";
//יצירת המאגר
const MyContex=React.createContext({});
//ספק המאגר
export const Myprovider=MyContex.Provider;
//יצוא
export default MyContex;
