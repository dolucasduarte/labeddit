import { useState, useEffect } from "react";
import { PageContainer } from "../styles/pages/authenticatedPages";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard/PostCard";
import Loading from "../components/Loading";
import { getFeed } from "../services/get";

function FeedPage() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFeed(setPosts, setIsLoading);
  }, []);

  const renderPosts = () => {
    return posts
      .sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
      .map(post => {
        return <PostCard key={post.id} post={post} />;
      });
  };

  return (
    <PageContainer>
      <PostForm updatePosts={setPosts} />
      {isLoading ? <Loading /> : renderPosts()}
    </PageContainer>
  );
}

export default FeedPage;
