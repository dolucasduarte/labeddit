import {
  PostCardContainer,
  PostContentContainer,
  CommentsCounterContainer
} from "./PostCard.style";
import VoteBar from "./VoteBar";
import { useHistory, useLocation } from "react-router-dom";
import commentBalloon from "images/comment-balloon.svg";
import elapsedTime from "utils/elapsedTime";

function PostCard({ post }) {
  const pathname = useLocation().pathname;
  const history = useHistory();

  const goToPost = (history, id) => {
    history.push(`/${id}`);
  };

  return (
    <PostCardContainer pathname={pathname}>
      <VoteBar post={post} />
      <PostContentContainer onClick={() => goToPost(history, post.id)}>
        <time>
          Posted by u/{post.username.split(" ").join("")}{" "}
          {elapsedTime(post.createdAt)}
        </time>
        <h3>{post.title}</h3>
        <article>{post.text}</article>
        <CommentsCounterContainer>
          <img src={commentBalloon} alt="See comments" />
          <figcaption>
            {post.commentsCount + " "}
            {post.commentsCount !== 1 ? "comments" : "comment"}
          </figcaption>
        </CommentsCounterContainer>
      </PostContentContainer>
    </PostCardContainer>
  );
}

export default PostCard;
