import { useEffect, useRef } from "react";
import ScrollUpIcon from "./../assets/icons/scrollup.svg?react";
import styles from "./../styles/ScrollUpIndicator.module.css";

const ScrollUpIndicator = () => {
	const scrollIconRef = useRef();

    useEffect(() => {
        const delIcon = setTimeout(() => {
            scrollIconRef.current.remove();
        }, 4000);

        return () => {
            clearTimeout(delIcon);
        };
    });

    return <ScrollUpIcon ref={scrollIconRef} className={styles.icon} />;
};

export default ScrollUpIndicator;
