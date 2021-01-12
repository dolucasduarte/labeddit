import { PageContainer } from "styles/pageContainer";
import PostForm from "components/PostForm/PostForm";
import PostCard from "components/PostCard/PostCard";
import Loading from "components/Loading/Loading";
import { useState, useEffect } from "react";
import { getFeed } from "services/get";

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