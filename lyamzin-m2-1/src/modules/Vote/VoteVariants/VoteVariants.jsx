import styles from "../../Vote/vote.module.css";
import Button from "../../../Menu-components/shared/components/Button/Button";
const VoteVariants = ({ leaveVote }) => {
  return (
    <div className={styles.block}>
      <h4>vote variants</h4>
      <Button onClick={() => leaveVote("female")} text="female" type="button" />
      <Button onClick={() => leaveVote("male")} text="male" type="button" />
    </div>
  );
};

export default VoteVariants;
