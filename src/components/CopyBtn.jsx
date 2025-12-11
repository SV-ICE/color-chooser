import styles from "./../styles/CopyBtn.module.css";
import CopyIcon from "./../assets/icons/copy.svg?react";
import { useContext } from "react";
import { NotifyContext } from "../context/NotifyContext";
import { copyUrl } from "./../modules/copyUrl.js";

const CopyBtn = ({ url }) => {
    const { setIsNotify } = useContext(NotifyContext);

    return (
        <button className={styles.btn} onClick={() => copyUrl(url, setIsNotify)}>
            <CopyIcon className={styles.icon} />
        </button>
    );
};

export default CopyBtn;
