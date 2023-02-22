import styles from "../../Vote/vote.module.css";

const VoteResults = ({ total, femalePercent, malePercent }) => {
  return (
    <div className={styles.block}>
      <h4>vote results</h4>
      <p>total: {total}</p>
      <p>female: {femalePercent}</p>
      <p>male: {malePercent}</p>
    </div>
  );
};
export default VoteResults;
