import PropTypes from "prop-types";
import Button from "../../../Menu-components/shared/components/Button/Button";

const VoteVariants = ({ leaveVote }) => {
  return (
    <>
      <Button onClick={() => leaveVote("female")} type="button">
        female
      </Button>
      <Button onClick={() => leaveVote("male")} type="button">
        male
      </Button>
    </>
  );
};

export default VoteVariants;
VoteVariants.protoTypes = {
  leaveVote: PropTypes.func.isRequired,
};
