const Modal = ({text}) => {
    return (
        <div className="modal">
            <div className={`modalContent ${text.length > 0 ? 'show' : ''}`}>
				{text}
			</div>
        </div>
    );
};

export default Modal;
