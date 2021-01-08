import { PostFormContainer } from "../styles/components/postForm";
import { TitleInput, PostTextArea } from "./Inputs";
import useForm from "../hooks/useForm";
import { createPost } from "../services/api";

function PostForm({ requestData }) {
  const { form, onChange, resetForm } = useForm({
    title: "",
    text: ""
  });

  const submitPost = event => {
    event.preventDefault();
    const body = {
      text: form.text,
      title: form.title
    };
    createPost(body, resetForm, requestData);
  };

  return (
    <PostFormContainer>
      <form onSubmit={submitPost}>
        <h4>Create a post</h4>
        <TitleInput form={form} onChange={onChange}></TitleInput>
        <PostTextArea form={form} onChange={onChange}></PostTextArea>
        <button>Post</button>
      </form>
    </PostFormContainer>
  );
}

export default PostForm;
