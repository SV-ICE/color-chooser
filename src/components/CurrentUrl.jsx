const CurrentUrl = ({url, setIsNotify, copyUrl}) => {
    return (
        <div className="currentUrl">
            <p>{url}</p>
            <button className="btn" onClick={() => copyUrl(url, setIsNotify)}>Copy URL</button>
        </div>
    );
};

export default CurrentUrl;
