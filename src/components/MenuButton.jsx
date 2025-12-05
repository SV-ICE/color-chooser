import MenuIcon from "./../assets/icons/menu.svg?react";
import MenuCloseIcon from "./../assets/icons/menu-close.svg?react";

const MenuButton = ({ isControlsOpen, setIsControlsOpen }) => {
    return (
        <button
            onClick={() => setIsControlsOpen(!isControlsOpen)}
            className="openControlsBtn" title={isControlsOpen ? 'Close' : 'Open'}>
            {isControlsOpen ? (
                <MenuCloseIcon className="menuIcon" />
            ) : (
                <MenuIcon className="menuIcon" />
            )}
        </button>
    );
};

export default MenuButton;
