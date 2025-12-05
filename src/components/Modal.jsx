const Modal = ({text}) => {
    return (
        <div className="modal">
            <div className={`modalContent ${text.length > 0 ? 'show' : ''}`}>
				<p>{text}</p>
			</div>
        </div>
    );
};

export default Modal;
