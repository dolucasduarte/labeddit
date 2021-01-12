import { PageContainer } from "styles/pageContainer";
import { PostDetailsContainer } from "pages/PostPage/PostPage.style";
import PostCard from "components/PostCard/PostCard";
import Loading from "components/Loading/Loading";
import CommentForm from "components/CommentForm/CommentForm";
import Comments from "components/Comments/Comments";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "services/get";

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
          <CommentForm post={post} updatePost={setPost} />
          <Comments post={post} />
        </PostDetailsContainer>
      )}
    </PageContainer>
  );
}

export default PostPage;
