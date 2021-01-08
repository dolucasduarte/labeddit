import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "../styles/pages/authenticatedPages";
import { getPost } from "../services/get";
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";

function PostPage() {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const pathParams = useParams();

  useEffect(() => {
    getPost(pathParams.id, setPost, setIsLoading);
  }, [pathParams]);

  return (
    <PageContainer>
      {isLoading ? <Loading /> : <PostCard post={post} />}
    </PageContainer>
  );
}

export default PostPage;
