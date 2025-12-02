import { useState } from "react";
import "./App.css";
import Column from "./components/Column";

function App() {
    const [colors, setColors] = useState([
        { id: 1, color: "#dcbcbc", locked: false },
        { id: 2, color: "#a3d5a3", locked: false },
        { id: 3, color: "#70a8ff", locked: false },
        { id: 4, color: "#dcdcae", locked: false },
        { id: 5, color: "#c597c5", locked: false },
    ]);
    
    return (
        <div className="App">
            <div className="container">
                <div className="colors">
                    {colors.map((color) => (
                        <Column key={color.id} color={color.color} locked={color.locked} />
                    ))}
                </div>
                <div className="controls"></div>
            </div>
        </div>
    );
}

export default App;
