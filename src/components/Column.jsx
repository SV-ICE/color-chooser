import Lock from "../assets/icons/lock.svg?react";
import Unlock from "../assets/icons/unlock.svg?react";

const Column = ({id, color, locked, setLock, setColors, copyColor}) => {
    return (
        <div className="col" style={{backgroundColor: color}}>
            <h2 onClick={() => copyColor(color)} data-type="color">{color}</h2>
            <button onClick={() => {setLock(id, setColors)}} className="lock-btn" data-type="lock">
                {locked ? <Lock className="lockIcon" width="50" height="50"/> : <Unlock className="lockIcon" width="50" height="50"/>}
            </button>
        </div>
    );
};

export default Column;
