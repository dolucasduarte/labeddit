import { useState } from "react";
import { VotingBarContainer } from "../styles/components/postCard";
import arrowDownSelected from "../images/arrow-down-selected.svg";
import arrowDownUnselected from "../images/arrow-down-unselected.svg";
import arrowUpSelected from "../images/arrow-up-selected.svg";
import arrowUpUnselected from "../images/arrow-up-unselected.svg";

function VoteBar({ votesCount }) {
  const [vote, setVote] = useState();
  const [votesCountFront, setVotesCountFront] = useState(votesCount);

  const voteHandler = vote => {
    setVote(vote);
  };

  return (
    <VotingBarContainer>
      <img
        src={arrowUpUnselected}
        alt="Vote up"
        onClick={() => voteHandler(1)}
      />
      {votesCountFront}
      <img src={arrowDownUnselected} alt="Vote down" />
    </VotingBarContainer>
  );
}

export default VoteBar;
