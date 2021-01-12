import {
  CardContainer,
  ContentContainer,
  CommentsIconContainer
} from "./PostCard.style";
import VoteBar from "./VoteBar";
import { useHistory, useLocation } from "react-router-dom";
import elapsedTime from "../../utils/elapsedTime";
import commentBalloon from "../../images/comment-balloon.svg";

function PostCard({ post }) {
  const pathname = useLocation().pathname;
  const history = useHistory();

  const goToPost = (history, id) => {
    history.push(`/${id}`);
  };

  return (
    <CardContainer pathname={pathname} id={post.id}>
      <VoteBar post={post} />
      <ContentContainer onClick={() => goToPost(history, post.id)}>
        <span>
          Posted by u/{post.username.split(" ").join("")}{" "}
          <time>{elapsedTime(post.createdAt)}</time>
        </span>
        <h3>{post.title}</h3>
        <article>{post.text}</article>
        <CommentsIconContainer>
          <img src={commentBalloon} alt="See comments" />
          <figcaption>
            {post.commentsCount + " "}
            {post.commentsCount !== 1 ? "comments" : "comment"}
          </figcaption>
        </CommentsIconContainer>
      </ContentContainer>
    </CardContainer>
  );
}

export default PostCard;
