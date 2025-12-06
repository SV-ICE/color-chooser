import { createContext, useState } from "react";

export const ControlsContext = createContext(null);

export const ControlsProvider = ({ children }) => {
	const [isControlsOpen, setIsControlsOpen] = useState(false);

	const contextValue = {
		isControlsOpen,
		setIsControlsOpen,
	};
	return <ControlsContext.Provider value={contextValue}>{children}</ControlsContext.Provider>;
};