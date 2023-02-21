import { Component } from "react";
import styles from "./togle-button.module.css";
import PropTypes from "prop-types";
console.log(styles);

class ToggleButton extends Component {
  static defaultProps = {
    type: "submit",
  };

  state = {
    active: false,
  };

  handleClick = () => {
    console.log(this.active);

    this.setState(({ active }) => {
      return { active: !active };
    });
  };

  render() {
    const { text, type } = this.props;
    const { active } = this.state;
    // const { handleClick } = this;
    return (
      <div>
        <h3>Menu-components. ToggleButton</h3>
        <button
          onClick={this.handleClick}
          style={
            ({ backgroundColor: getRandomHexColor() },
            { borderColor: getRandomHexColor() })
          }
          className={active ? `${styles.btn} ${styles.active}` : styles.btn}
          type={type}
        >
          {text}
        </button>
      </div>
    );
  }
}
export default ToggleButton;
ToggleButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["sumit", "button", "reset"]),
};

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
