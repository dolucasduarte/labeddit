import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "../styles/pages/authenticatedPages";
import { PostDetailsContainer } from "../styles/pages/postPage";
import { getPost } from "../services/get";
import PostCard from "../components/PostCard/PostCard";
import Loading from "../components/Loading";
import CommentForm from "../components/CommentsSection/CommentForm";
import CommentsSection from "../components/CommentsSection/CommentsSection";

function PostPage() {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const pathParams = useParams();

  useEffect(() => {
    getPost(pathParams.id, setPost, setIsLoading);
  }, [pathParams]);

  return (
    <PageContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <PostDetailsContainer>
          <PostCard post={post} />
          <CommentForm post={post} />
          <CommentsSection post={post} />
        </PostDetailsContainer>
      )}
    </PageContainer>
  );
}

export default PostPage;
