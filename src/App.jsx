import { useEffect, useState } from "react";
import "./App.css";
import Column from "./components/Column";
import { setRandomColors } from "./modules/setRandomColors";
import { setLock } from "./modules/setLock";
import { initialColors } from "./data/initialColors.js";
import { copyColor } from "./modules/copyColor.js";
import { updateColorsHash } from "./modules/updateColorsHash.js";
import { getColorsFromHash } from "./modules/getColorsFromHash.js";
import { setLabelColor } from "./modules/setLabelColor.js";

function App() {
    const [colors, setColors] = useState(initialColors);
    const [colorsFromHash, setColorsFromHash] = useState([]);
    const [isNotify, setIsNotify] = useState("");

    useEffect(() => {
        const notifyTimer = setTimeout(() => {
            setIsNotify("");
        }, 2000);

        return () => clearTimeout(notifyTimer);
    }, [isNotify]);

    useEffect(() => {
        getColorsFromHash(setColorsFromHash);
    }, []);

    useEffect(() => {
        setRandomColors(setColors, colorsFromHash);
    }, [colorsFromHash]);

    const reloadColors = () => {
        setRandomColors(setColors, []);
    };

    useEffect(() => {
        updateColorsHash(colors);
    }, [colors]);

    return (
        <div className="App">
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
                <div className="controls">
                    <button onClick={() => reloadColors()}>Reload colors</button>
                    {isNotify}
                </div>
            </div>
        </div>
    );
}

export default App;
