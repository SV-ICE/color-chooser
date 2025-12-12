import { useEffect, useState, useContext, useRef } from "react";
import { setRandomColors } from "./modules/setRandomColors";
import { initialColors } from "./data/initialColors.js";
import { updateColorsHash } from "./modules/updateColorsHash.js";
import { getColorsFromHash } from "./modules/getColorsFromHash.js";
import "./App.css";
import Modal from "./components/Modal.jsx";
import { NotifyContext } from "./context/NotifyContext.jsx";
import Controls from "./components/Controls.jsx";
import ScrollUpIndicator from "./components/ScrollUpIndicator.jsx";
import ColorsList from "./components/ColorsList.jsx";

function App() {
    const [colors, setColors] = useState(initialColors);
    const [colorsFromHash, setColorsFromHash] = useState([]);
    const [currentUrl, setCurrentUrl] = useState(window.location.href);
    const { isNotify, setIsNotify } = useContext(NotifyContext);

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
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
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
            <ScrollUpIndicator/>
            <Modal text={isNotify} />
            <div className="container">
                <ColorsList colors={colors} setColors={setColors}/>
                <Controls
                    currentUrl={currentUrl}
                    setRandomColors={setRandomColors}
                    setColors={setColors}
                />
            </div>
        </div>
    );
}

export default App;
