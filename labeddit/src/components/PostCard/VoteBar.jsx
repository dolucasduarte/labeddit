import { VotingBarContainer, VotingIcon } from "./VoteBar.style";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { voteOnPost } from "services/put";
import arrowDownSelected from "images/arrow-down-selected.svg";
import arrowDownUnselected from "images/arrow-down-unselected.svg";
import arrowUpSelected from "images/arrow-up-selected.svg";
import arrowUpUnselected from "images/arrow-up-unselected.svg";

function VoteBar({ post }) {
  const pathname = useLocation().pathname;
  const [userVote, setUserVote] = useState(post.userVoteDirection);
  const [votesCounter, setVotesCounter] = useState(post.votesCount);

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

    voteOnPost(body, post.id);
  };

  return (
    <VotingBarContainer pathname={pathname}>
      {userVote === 1 ? (
        <VotingIcon
          src={arrowUpSelected}
          alt="Upvoted"
          onClick={() => voteHandler(0)}
        />
      ) : (
        <VotingIcon
          src={arrowUpUnselected}
          alt="Vote up"
          onClick={() => voteHandler(1)}
        />
      )}

      {votesCounter}

      {userVote === -1 ? (
        <VotingIcon
          src={arrowDownSelected}
          alt="Downvoted"
          onClick={() => voteHandler(0)}
        />
      ) : (
        <VotingIcon
          src={arrowDownUnselected}
          alt="Vote down"
          onClick={() => voteHandler(-1)}
        />
      )}
    </VotingBarContainer>
  );
}

export default VoteBar;
