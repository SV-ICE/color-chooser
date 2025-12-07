import MenuButton from "./MenuButton";
import CurrentUrl from "./CurrentUrl";
import { useContext } from "react";
import { ControlsContext } from "../context/ControlsContext";

const Controls = ({currentUrl, setRandomColors, setColors}) => {
	const {isControlsOpen} = useContext(ControlsContext);

    return (
        <div className={`controls animated ${isControlsOpen ? "show" : ""}`}>
            <MenuButton />
            <div className="controlsContainer">
                <button
                    className="btn reloadBtn"
                    onClick={() => setRandomColors(setColors, [])}>
                    RELOAD COLORS
                </button>
                <CurrentUrl url={currentUrl} />
            </div>
        </div>
    );
};

export default Controls;
