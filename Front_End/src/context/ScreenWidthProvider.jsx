import { useState, useEffect, createContext, useContext } from "react";

export const ScreenWidthContext = createContext()

export function ScreenWidthProvider({ children }) {
    const getInitialWidth = () => (typeof window !== "undefined" ? window.innerWidth : 0);
    const [screenWidth, setScreenWidth] = useState(getInitialWidth)

    useEffect(() => {
    let timeout;
    function handleResize() {
        clearTimeout(timeout);
        timeout = setTimeout(() => setScreenWidth(window.innerWidth), 100);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ScreenWidthContext.Provider value={screenWidth}>
        {children}
        </ScreenWidthContext.Provider>
    )
}

export function useScreenWidth(){
    return useContext(ScreenWidthContext)
}