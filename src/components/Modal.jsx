import styles from '../styles/Modal.module.css';

const Modal = ({text}) => {
    return (
        <div className={styles.modal}>
            <div className={`${styles.content} ${text.length > 0 ? styles.show : ''}`}>
				<p className={styles.text}>{text}</p>
			</div>
        </div>
    );
};

export default Modal;
