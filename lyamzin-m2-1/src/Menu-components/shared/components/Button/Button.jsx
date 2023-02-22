import styles from "./button.module.css";

const Button = ({ children, onClick, text, type }) => {
  console.log(children);
  return (
    <button onClick={onClick} className={styles.btn} type={type}>
      {children}
    </button>
  );
};
export default Button;
