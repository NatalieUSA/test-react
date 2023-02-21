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
  render() {
    const { items } = this.props;
    const elements = items.map(({ id, text, link }) => (
      <li key={id}>
        <a className={styles.link} href={link}>
          {text}
        </a>
      </li>
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
