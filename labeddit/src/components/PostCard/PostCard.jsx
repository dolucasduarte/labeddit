import { useHistory, useLocation } from "react-router-dom";
import {
  CardContainer,
  ContentContainer,
  CommentsIconContainer
} from "../../styles/components/PostCard/postCard";
import VoteBar from "./VoteBar";
import commentBalloon from "../../images/comment-balloon.svg";
import elapsedTime from "../../utils/elapsedTime";

function PostCard({ post }) {
  const pathname = useLocation().pathname;
  const history = useHistory();

  const goToPost = (history, id) => {
    history.push(`/${id}`);
  };

  return (
    <CardContainer pathname={pathname} id={post.id}>
      <VoteBar post={post} />
      <ContentContainer
        onClick={() => goToPost(history, post.id)}
        pathname={pathname}
        id={post.id}
      >
        <time>
          Posted by u/{post.username.split(" ").join("")}{" "}
          {elapsedTime(post.createdAt)}
        </time>
        <h3>{post.title}</h3>
        <p>{post.text}</p>
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
