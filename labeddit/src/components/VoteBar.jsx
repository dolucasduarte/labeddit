import { useState } from "react";
import { votePost } from "../services/api";
import { VotingBarContainer } from "../styles/components/postCard";
import arrowDownSelected from "../images/arrow-down-selected.svg";
import arrowDownUnselected from "../images/arrow-down-unselected.svg";
import arrowUpSelected from "../images/arrow-up-selected.svg";
import arrowUpUnselected from "../images/arrow-up-unselected.svg";

function VoteBar({ id, votesCount, userVoteDirection }) {
  const [userVote, setUserVote] = useState(userVoteDirection);
  const [votesCounter, setVotesCounter] = useState(votesCount);

  const voteHandler = vote => {
    setUserVote(vote);

    if (userVote === 0) {
      vote === 1 && setVotesCounter(votesCounter + 1);
      vote === -1 && setVotesCounter(votesCounter - 1);
    }

    if (userVote === 1) {
      vote === 0 && setVotesCounter(votesCounter - 1);
      vote === -1 && setVotesCounter(votesCounter - 2);
    }

    if (userVote === -1) {
      vote === 0 && setVotesCounter(votesCounter + 1);
      vote === 1 && setVotesCounter(votesCounter + 2);
    }

    const body = {
      direction: vote
    };

    votePost(body, id);
  };

  return (
    <VotingBarContainer>
      {userVote === 1 ? (
        <img
          src={arrowUpSelected}
          alt="Upvoted"
          onClick={() => voteHandler(0)}
        />
      ) : (
        <img
          src={arrowUpUnselected}
          alt="Vote up"
          onClick={() => voteHandler(1)}
        />
      )}

      {votesCounter}

      {userVote === -1 ? (
        <img
          src={arrowDownSelected}
          alt="Downvoted"
          onClick={() => voteHandler(0)}
        />
      ) : (
        <img
          src={arrowDownUnselected}
          alt="Vote down"
          onClick={() => voteHandler(-1)}
        />
      )}
    </VotingBarContainer>
  );
}

export default VoteBar;
