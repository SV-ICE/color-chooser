import { useEffect, useState, useContext } from "react";
import { setRandomColors } from "./modules/setRandomColors";
import { initialColors } from "./data/initialColors.js";
import { updateColorsHash } from "./modules/updateColorsHash.js";
import { getColorsFromHash } from "./modules/getColorsFromHash.js";
import "./App.css";
import Column from "./components/Column";
import CurrentUrl from "./components/CurrentUrl.jsx";
import MenuButton from "./components/MenuButton.jsx";
import Modal from "./components/Modal.jsx";
import { NotifyContext } from "./context/NotifyContext.jsx";
import { ControlsContext } from "./context/ControlsContext";

function App() {
    const [colors, setColors] = useState(initialColors);
    const [colorsFromHash, setColorsFromHash] = useState([]);
    const [currentUrl, setCurrentUrl] = useState(window.location.href);
    const { isNotify, setIsNotify } = useContext(NotifyContext);
    const { isControlsOpen } = useContext(ControlsContext);

    useEffect(() => {
        const notifyTimer = setTimeout(() => {
            setIsNotify("");
        }, 1600);

        return () => clearTimeout(notifyTimer);
    }, [isNotify]);

    useEffect(() => {
        getColorsFromHash(setColorsFromHash);

        const handleKeyDown = (e) => {
            e.preventDefault();
            if (e.code === "Space") {
                setRandomColors(setColors, []);
            }
        }
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }

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
            </div>
        </div>
    );
}

export default App;
