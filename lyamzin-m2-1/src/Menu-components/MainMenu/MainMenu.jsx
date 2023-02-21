//1 імпортувати з REACT класс  Component
import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./main-menu.module.css";

//2 - створити дочірній класс від класу Component,
//прописавши в ньому метод RENDER,
//який повертає HTML - розмітку компоненту
class MainMenu extends Component {
  static defaultProps = {
    items: [],
  };

  state = {
    activeIndex: 0,
  };

  handleClick = (idx) => {
    console.log(idx);
    this.setState({ activeIndex: idx });
  };

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;
    const { handleClick } = this;

    const elements = items.map(({ id, text, link }, index) => (
      <section>
        {" "}
        <div>
          <li key={id}>
            <a
              onClick={() => handleClick(index)}
              className={
                activeIndex === index
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              href={link}
            >
              {text}
            </a>
          </li>
        </div>
      </section>
    ));
    return <ul className={styles.menu}>{elements}</ul>;
  }
}

export default MainMenu;

MainMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};
