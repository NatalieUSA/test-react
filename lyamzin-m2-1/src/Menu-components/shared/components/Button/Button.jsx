import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ children, onClick, type }) => {
  console.log(children);
  return (
    <button onClick={onClick} className={styles.btn} type={type}>
      {children}
    </button>
  );
};
export default Button;

Button.protoTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  children: PropTypes.element.isRequired,
};
