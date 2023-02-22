import styles from "./button.module.css";

const Button = ({ onClick, text, type }) => {
  return (
    <button onClick={onClick} className={styles.btn} type={type}>
      {text}
    </button>
  );
};
export default Button;
