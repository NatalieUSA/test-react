import styles from "../../Vote/vote.module.css";

const VoteResults = ({ total, femalePercent, malePercent }) => {
  return (
    <>
      <p>total: {total}</p>
      <p>female: {femalePercent}</p>
      <p>male: {malePercent}</p>
    </>
  );
};
export default VoteResults;
