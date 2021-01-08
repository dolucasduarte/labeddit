import { FeedPageContainer } from "../styles/feedPage";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import useRequestData from "../hooks/useRequestData";
import { getPosts } from "../services/api";
import loadingIcon from "../images/logo-icon.svg";
import { LoadingContainer } from "../styles/loading";

function FeedPage() {
  const { data } = useRequestData([], getPosts);
  const posts = data.posts;

  const renderPosts = () => {
    console.log({ posts });
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
      <PostForm />
      {posts && posts.length > 0 ? (
        renderPosts()
      ) : (
        <LoadingContainer>
          <img src={loadingIcon} alt="Loading" />
          <span>Loading posts</span>
        </LoadingContainer>
      )}
    </FeedPageContainer>
  );
}

export default FeedPage;
