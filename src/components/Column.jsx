import Lock from "../assets/icons/lock.svg?react";
import Unlock from "../assets/icons/unlock.svg?react";

const Column = ({color, locked}) => {
    return (
        <div className="col" style={{backgroundColor: color}}>
            <h2 data-type="color">{color}</h2>
            <button className="lock-btn" data-type="lock">
                {locked ? <Lock width="50" height="50"/> : <Unlock width="50" height="50"/>}
            </button>
        </div>
    );
};

export default Column;
