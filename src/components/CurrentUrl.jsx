import { useContext } from "react";
import { NotifyContext } from "../context/NotifyContext";

const CurrentUrl = ({ url, copyUrl }) => {
    const { setIsNotify } = useContext(NotifyContext);

    return (
        <div className="currentUrl">
            <p>{url}</p>
            <button className="btn" onClick={() => copyUrl(url, setIsNotify)}>
                Copy URL
            </button>
        </div>
    );
};

export default CurrentUrl;
