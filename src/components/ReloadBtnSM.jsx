import styles from "./../styles/ReloadBtnSM.module.css";
import ReloadIcon from "./../assets/icons/reload.svg?react";

const ReloadBtnSM = ({setRandomColors, setColors}) => {

	return (
		<button className={styles.reloadBtnMobile} onClick={() => setRandomColors(setColors, [])}>
			<ReloadIcon className={styles.reloadIcon} />
		</button>
	);
};

export default ReloadBtnSM;
