import { FeedPageContainer } from "../styles/pages/feedPage";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import useRequestData from "../hooks/useRequestData";
import Loading from "../components/Loading";

function FeedPage() {
  const { data, requestData } = useRequestData([], "posts");
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
      <PostForm requestData={requestData} />
      {posts && posts.length > 0 ? renderPosts() : <Loading />}
    </FeedPageContainer>
  );
}

export default FeedPage;
