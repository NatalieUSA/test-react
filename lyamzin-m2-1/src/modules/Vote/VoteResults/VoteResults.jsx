import PropTypes from "prop-types";

//import styles from "../../Vote/vote.module.css";

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

VoteResults.propTypes = {
  total: PropTypes.func.isRequired,
  femalePercent: PropTypes.func.isRequired,
  malePercent: PropTypes.func.isRequired,
};
