import {} from "../styles/postForm";
import { PostFormContainer } from "../styles/postForm";

function PostForm() {
  return (
    <PostFormContainer>
      <form>
        <h4>Create a post</h4>
        <input placeholder="Title"></input>
        <textarea placeholder="Text"></textarea>
        <button>Post</button>
      </form>
    </PostFormContainer>
  );
}

export default PostForm;
