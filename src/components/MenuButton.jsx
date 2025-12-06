import MenuIcon from "./../assets/icons/menu.svg?react";
import MenuCloseIcon from "./../assets/icons/menu-close.svg?react";
import styles from "./../styles/MenuButton.module.css";
import { ControlsContext } from "../context/ControlsContext";
import { useContext } from "react";

const MenuButton = () => {
    const { isControlsOpen, setIsControlsOpen } = useContext(ControlsContext);

    return (
        <button
            onClick={() => setIsControlsOpen(!isControlsOpen)}
            className={styles.openBtn}
            title={isControlsOpen ? "Close" : "Open"}>
            {isControlsOpen ? (
                <MenuCloseIcon className={styles.icon} />
            ) : (
                <MenuIcon className={styles.icon} />
            )}
        </button>
    );
};

export default MenuButton;
