import { useState, useEffect } from "react";
import { FeedPageContainer } from "../styles/pages/feedPage";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";
import { getPosts } from "../services/get";

function FeedPage() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts(setPosts, setIsLoading);
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
    <FeedPageContainer>
      <PostForm updatePosts={setPosts} />
      {isLoading ? <Loading /> : renderPosts()}
    </FeedPageContainer>
  );
}

export default FeedPage;
