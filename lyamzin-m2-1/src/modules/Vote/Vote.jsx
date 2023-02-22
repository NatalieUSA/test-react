import { Component } from "react";
import styles from "./vote.module.css";
//import cssBtn from "../../Menu-components/shared/MainMenu/main-menu.module.css";
import VoteVariants from "./VoteVariants/VoteVariants";
import VoteResults from "./VoteResults/VoteResults";
import VoteBlock from "./VoteBlock/VoteBlock";

class Vote extends Component {
  state = {
    female: 0,
    male: 0,
  };

  calcTotal() {
    const { female, male } = this.state;
    // console.log(this.state.female);
    const total = female + male;
    // console.log(total);
    return total;
  }

  calcPercent(propName) {
    console.log(propName);
    const total = this.calcTotal();
    console.log(total);
    if (!total) {
      return 0;
    }
    const value = this.state[propName]; // this.state.democrats
    console.log(value);
    const result = ((value / total) * 100).toFixed(2);
    console.log(Number(result));
    return Number(result);
  }

  //   increaseFemaleVote = () => {
  //     this.setState((prevState) => {
  //       return { female: prevState.female + 1 };
  //     });
  //   };
  //   increaseMaleVote = () => {
  //     this.setState((prevState) => {
  //       return { male: prevState.male + 1 };
  //     });
  //   };

  leaveVote = (name) => {
    // console.log(this);
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const total = this.calcPercent();

    console.log(total);
    const femalePercent = this.calcPercent("female");
    const malePercent = this.calcPercent("male");

    return (
      <div className={styles.vote}>
        <h3 className={styles.title}>your gender</h3>
        <div className={styles.wrapper}>
          <VoteBlock title="vote results">
            <VoteVariants leaveVote={this.leaveVote} />
          </VoteBlock>

          <VoteBlock title="vote results">
            <VoteResults
              total={total}
              femalePercent={femalePercent}
              malePercent={malePercent}
            />
          </VoteBlock>
        </div>
      </div>
    );
  }
}
export default Vote;
