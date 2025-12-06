import MenuIcon from "./../assets/icons/menu.svg?react";
import MenuCloseIcon from "./../assets/icons/menu-close.svg?react";
import styles from "./../styles/MenuButton.module.css";

const MenuButton = ({ isControlsOpen, setIsControlsOpen }) => {
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
