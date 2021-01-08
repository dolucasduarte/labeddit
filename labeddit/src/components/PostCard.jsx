import {
  CardContainer,
  ContentContainer,
  PostInfo,
  CommentsContainer
} from "../styles/components/postCard";
import VoteBar from "./VoteBar";
import commentBalloon from "../images/comment-balloon.svg";
import timePassed from "../utils/timePassed";

function PostCard({ post }) {
  console.log({ post });
  return (
    <CardContainer>
      <VoteBar
        id={post.id}
        votesCount={post.votesCount}
        userVoteDirection={post.userVoteDirection}
      />
      <ContentContainer>
        <PostInfo>
          Posted by u/{post.username.split(" ").join("")}{" "}
          {timePassed(post.createdAt)}
        </PostInfo>
        <h3>{post.title}</h3>
        <p>{post.text}</p>
        <CommentsContainer>
          <img src={commentBalloon} alt="See comments" />
          <figcaption>
            {post.commentsCount + " "}
            {post.commentsCount !== 1 ? "comments" : "comment"}
          </figcaption>
        </CommentsContainer>
      </ContentContainer>
    </CardContainer>
  );
}

export default PostCard;
