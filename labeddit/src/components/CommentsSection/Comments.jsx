import { CommentsSectionContainer } from "./Comments.style";
import elapsedTime from "../../utils/elapsedTime";

function Comments({ post }) {
  const comments = post.comments;

  const renderComments = () => {
    return comments
      .sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
      .map(comment => {
        return (
          <span>
            <aside>
              <address>{comment.username} · </address>
              <time> {elapsedTime(comment.createdAt)}</time>
            </aside>
            <article>{comment.text}</article>
          </span>
        );
      });
  };

  return (
    <CommentsSectionContainer>{renderComments()}</CommentsSectionContainer>
  );
}

export default Comments;
