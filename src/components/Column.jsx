import Lock from "../assets/icons/lock.svg?react";
import Unlock from "../assets/icons/unlock.svg?react";

const Column = ({
    id,
    color,
    locked,
    setLock,
    setColors,
    copyColor,
    setIsNotify,
    labelColor,
}) => {
    return (
        <div className="col" style={{ backgroundColor: color }}>
            <h2 style={{ color: labelColor }} onClick={() => copyColor(color, setIsNotify)}>
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
