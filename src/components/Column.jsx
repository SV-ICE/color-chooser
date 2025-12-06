import { useContext } from "react";
import { NotifyContext } from "../context/NotifyContext";
import Lock from "../assets/icons/lock.svg?react";
import Unlock from "../assets/icons/unlock.svg?react";
import { setLock } from "../modules/setLock";
import styles from "../styles/Column.module.css";

const Column = ({ props, setColors, copyColor, labelColor }) => {
    const { id, color, locked } = props;
    const { setIsNotify } = useContext(NotifyContext);

    return (
        <div className={styles.col} style={{ backgroundColor: color }}>
            <h2 className={styles.colTitle} style={{ color: labelColor }} onClick={() => copyColor(color, setIsNotify)}>
                {color}
            </h2>
            <button
                onClick={() => {
                    setLock(id, locked, setColors, setIsNotify);
                }}
                className={styles.lockBtn}>
                {locked ? (
                    <Lock color={labelColor} className={styles.lockIcon} />
                ) : (
                    <Unlock color={labelColor} className={styles.lockIcon} />
                )}
            </button>
        </div>
    );
};

export default Column;
