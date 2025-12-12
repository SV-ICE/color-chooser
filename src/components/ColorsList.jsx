import Column from "./Column";
import styles from "./../styles/ColorsList.module.css"

const ColorsList = ({ colors, setColors }) => {
    return (
        <div className={styles.list}>
            {colors.map((color) => (
                <Column key={color.id} props={color} setColors={setColors} />
            ))}
        </div>
    );
};

export default ColorsList;
