import { useState } from "react";
import { ArrowsContainer } from "../styles/components/postCard";
import arrowDownSelected from "../images/arrow-down-selected.svg";
import arrowDownUnselected from "../images/arrow-down-unselected.svg";
import arrowUpSelected from "../images/arrow-up-selected.svg";
import arrowUpUnselected from "../images/arrow-up-unselected.svg";

function VoteBar() {
  const [vote, setVote] = useState();

  const voteHandler = vote => {
    setVote(vote);
  };

  return (
    <ArrowsContainer>
      <img
        src={arrowUpUnselected}
        alt="Vote up"
        onClick={() => voteHandler(1)}
      />
      0
      <img src={arrowDownUnselected} alt="Vote down" />
    </ArrowsContainer>
  );
}

export default VoteBar;
