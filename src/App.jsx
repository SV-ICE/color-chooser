import { useEffect, useState, useContext } from "react";
import { setRandomColors } from "./modules/setRandomColors";
import { initialColors } from "./data/initialColors.js";
import { updateColorsHash } from "./modules/updateColorsHash.js";
import { getColorsFromHash } from "./modules/getColorsFromHash.js";
import { copyUrl } from "./modules/copyUrl.js";
import "./App.css";
import Column from "./components/Column";
import CurrentUrl from "./components/CurrentUrl.jsx";
import MenuButton from "./components/MenuButton.jsx";
import Modal from "./components/Modal.jsx";
import { NotifyContext } from "./context/NotifyContext.jsx";

function App() {
    const [colors, setColors] = useState(initialColors);
    const [colorsFromHash, setColorsFromHash] = useState([]);
    const [currentUrl, setCurrentUrl] = useState(window.location.href);
    const [isControlsOpen, setIsControlsOpen] = useState(false);
    const { isNotify, setIsNotify } = useContext(NotifyContext);

    useEffect(() => {
        const notifyTimer = setTimeout(() => {
            setIsNotify("");
        }, 1600);

        return () => clearTimeout(notifyTimer);
    }, [isNotify]);

    useEffect(() => {
        getColorsFromHash(setColorsFromHash);

        window.addEventListener("keydown", (e) => {
            e.preventDefault();
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
                <div className="colorsList">
                    {colors.map((color) => (
                        <Column key={color.id} props={color} setColors={setColors} />
                    ))}
                </div>
                <div className={`controls animated ${isControlsOpen ? "show" : ""}`}>
                    <MenuButton
                        setIsControlsOpen={setIsControlsOpen}
                        isControlsOpen={isControlsOpen}
                    />
                    <div className="controlsContainer">
                        <button
                            className="btn reloadBtn"
                            onClick={() => setRandomColors(setColors, [])}>
                            RELOAD COLORS
                        </button>
                        <CurrentUrl url={currentUrl} copyUrl={copyUrl} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
