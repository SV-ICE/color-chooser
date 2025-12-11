import MenuButton from "./MenuButton";
import CurrentUrl from "./CurrentUrl";
import { useContext } from "react";
import { ControlsContext } from "../context/ControlsContext";
import ReloadBtnSM from "./ReloadBtnSM";
import CopyBtn from "./CopyBtn";

const Controls = ({currentUrl, setRandomColors, setColors}) => {
	const {isControlsOpen} = useContext(ControlsContext);

    return (
        <div className={`controls animated ${isControlsOpen ? "show" : ""}`}>
            <MenuButton />
            <ReloadBtnSM setRandomColors={setRandomColors} setColors={setColors} />
            <CopyBtn url={currentUrl} />
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
