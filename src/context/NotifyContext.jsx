import { createContext, useState } from "react";

export const NotifyContext = createContext(null);

export const NotifyProvider = ({ children }) => {
    const [isNotify, setIsNotify] = useState("");

    const contextValue = {
        isNotify,
        setIsNotify,
    };
    return <NotifyContext.Provider value={contextValue}>{children}</NotifyContext.Provider>;
};