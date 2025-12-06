import { useContext } from "react";
import { NotifyContext } from "../context/NotifyContext";
import styles from "../styles/CurrentUrl.module.css";

const CurrentUrl = ({ url, copyUrl }) => {
    const { setIsNotify } = useContext(NotifyContext);

    return (
        <div className={styles.currentUrl}>
            <p className={styles.text}>{url}</p>
            <button className="btn" onClick={() => copyUrl(url, setIsNotify)}>
                Copy URL
            </button>
        </div>
    );
};

export default CurrentUrl;
