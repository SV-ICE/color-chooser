import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NotifyProvider } from "./context/NotifyContext.jsx";
import {ControlsProvider} from "./context/ControlsContext.jsx"

createRoot(document.getElementById("root")).render(
    <NotifyProvider>
        <ControlsProvider>
            <App />
        </ControlsProvider>
    </NotifyProvider>
);
