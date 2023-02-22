import styles from "./vote-block.module.css";

const VoteBlock = ({ children, title }) => {
  return (
    <div className={styles.block}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};
export default VoteBlock;
