const CurrentUrl = ({url, setIsNotify, copyUrl}) => {
    return (
        <div className="currentUrl">
			<input type="text" value={url} />
            <button onClick={() => copyUrl(url, setIsNotify)}>Copy URL</button>
        </div>
    );
};

export default CurrentUrl;
