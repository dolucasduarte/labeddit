import {
  CardContainer,
  PostContainer,
  PostInfo,
  CommentsContainer
} from "../styles/components/postCard";
import VoteBar from "./VoteBar";

import commentBalloon from "../images/comment-balloon.svg";

function PostCard() {
  return (
    <CardContainer>
      <VoteBar />
      <PostContainer>
        <PostInfo>Posted by u/jojoquinha 4 minutes ago</PostInfo>
        <h3>Nome do post</h3>
        <p>Conteúdo do post.</p>
        <CommentsContainer>
          <img src={commentBalloon} alt="See comments" />
          <figcaption>0 comments</figcaption>
        </CommentsContainer>
      </PostContainer>
    </CardContainer>
  );
}

export default PostCard;
