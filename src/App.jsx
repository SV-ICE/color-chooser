import { useEffect, useState } from "react";
import "./App.css";
import Column from "./components/Column";
import { setRandomColors } from "./modules/setRandomColors";
import { setLock } from "./modules/setLock";
import { initialColors } from "./data/initialColors.js";

function App() {
    const [colors, setColors] = useState(initialColors);

    useEffect(() => {
        setRandomColors(setColors);
    }, []);

    const reloadColors = () => {
        setRandomColors(setColors);
    };

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
                        />
                    ))}
                </div>
                <div className="controls">
                    <button onClick={() => reloadColors()}>Reload colors</button>
                </div>
            </div>
        </div>
    );
}

export default App;
