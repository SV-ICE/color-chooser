import { useContext } from "react";
import { NotifyContext } from "../context/NotifyContext";
import Lock from "../assets/icons/lock.svg?react";
import Unlock from "../assets/icons/unlock.svg?react";
import { setLock } from "../modules/setLock";

const Column = ({ props, setColors, copyColor, labelColor }) => {
    const { id, color, locked } = props;
    const { setIsNotify } = useContext(NotifyContext);

    return (
        <div className="col" style={{ backgroundColor: color }}>
            <h2
                style={{ color: labelColor }}
                onClick={() => copyColor(color, setIsNotify)}>
                {color}
            </h2>
            <button
                onClick={() => {
                    setLock(id, setColors, setIsNotify);
                }}
                className="lock-btn">
                {locked ? (
                    <Lock color={labelColor} className="lockIcon" />
                ) : (
                    <Unlock color={labelColor} className="lockIcon" />
                )}
            </button>
        </div>
    );
};

export default Column;
