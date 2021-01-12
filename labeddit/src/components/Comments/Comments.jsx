import { CommentsSectionContainer, CommentCard } from "./Comments.style";
import elapsedTime from "utils/elapsedTime";

function Comments({ post }) {
  const comments = post.comments;

  return (
    <CommentsSectionContainer>
      {comments
        .sort((a, b) => {
          return b.createdAt - a.createdAt;
        })
        .map(comment => {
          return (
            <CommentCard>
              <strong>{comment.username}</strong>
              <time>· {elapsedTime(comment.createdAt)}</time>
              <article>{comment.text}</article>
            </CommentCard>
          );
        })}
    </CommentsSectionContainer>
  );
}

export default Comments;
