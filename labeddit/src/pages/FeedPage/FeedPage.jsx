import { PageContainer } from "styles/pageContainer";
import PostForm from "components/PostForm/PostForm";
import PostCard from "components/PostCard/PostCard";
import Loading from "components/Loading/Loading";
import { useState, useEffect } from "react";
<<<<<<< HEAD:labeddit/src/pages/FeedPage/FeedPage.jsx
import { getFeed } from "services/get";
=======
import { PageContainer } from "../styles/pages/authenticatedPages";
import PostForm from "../components/PostForm/PostForm";
import PostCard from "../components/PostCard/PostCard";
import Loading from "../components/Loading/Loading";
import { getFeed } from "../services/get";
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0:labeddit/src/pages/FeedPage.jsx

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
