import { useEffect, useState } from "react";
import { setRandomColors } from "./modules/setRandomColors";
import { setLock } from "./modules/setLock";
import { initialColors } from "./data/initialColors.js";
import { copyColor } from "./modules/copyColor.js";
import { updateColorsHash } from "./modules/updateColorsHash.js";
import { getColorsFromHash } from "./modules/getColorsFromHash.js";
import { setLabelColor } from "./modules/setLabelColor.js";
import { copyUrl } from "./modules/copyUrl.js";
import "./App.css";
import Column from "./components/Column";
import CurrentUrl from "./components/CurrentUrl.jsx";
import MenuButton from "./components/MenuButton.jsx";
import Modal from "./components/Modal.jsx";

function App() {
    const [colors, setColors] = useState(initialColors);
    const [colorsFromHash, setColorsFromHash] = useState([]);
    const [isNotify, setIsNotify] = useState("");
    const [currentUrl, setCurrentUrl] = useState(window.location.href);
    const [isControlsOpen, setIsControlsOpen] = useState(false);

    useEffect(() => {
        const notifyTimer = setTimeout(() => {
            setIsNotify("");
        }, 1600);

        return () => clearTimeout(notifyTimer);
    }, [isNotify]);

    useEffect(() => {
        getColorsFromHash(setColorsFromHash);

        window.addEventListener("keydown", (e) => {
            if (e.code === "Space") {
                setRandomColors(setColors, []);
            }
        });
    }, []);

    useEffect(() => {
        setRandomColors(setColors, colorsFromHash);
    }, [colorsFromHash]);

    useEffect(() => {
        updateColorsHash(colors);
        setCurrentUrl(window.location.href);
    }, [colors]);

    return (
        <div className="App">
            <Modal text={isNotify} />
            <div className="container">
                <div className="colors">
                    {colors.map((color) => (
                        <Column
                            key={color.id}
                            id={color.id}
                            color={color.color}
                            locked={color.locked}
                            setLock={setLock}
                            setColors={setColors}
                            copyColor={copyColor}
                            setIsNotify={setIsNotify}
                            labelColor={setLabelColor(color)}
                        />
                    ))}
                </div>
                <div className={`controls animated ${isControlsOpen ? "show" : ""}`}>
                    <MenuButton
                        className="openControlsBtn"
                        setIsControlsOpen={setIsControlsOpen}
                        isControlsOpen={isControlsOpen}
                    />
                    <div className="controlsContainer">
                        <button
                            className="btn reloadBtn"
                            onClick={() => setRandomColors(setColors, [])}>
                            RELOAD COLORS
                        </button>
                        <CurrentUrl
                            url={currentUrl}
                            setIsNotify={setIsNotify}
                            copyUrl={copyUrl}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
