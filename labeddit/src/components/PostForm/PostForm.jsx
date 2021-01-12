import { PostFormContainer, Form } from "./PostForm.style";
import { PostTitleInput, PostTextArea } from "../Inputs/PostFormInputs";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/post";
import { Button } from "../Buttons/Buttons";

function PostForm({ updatePosts }) {
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
    createPost(body, resetForm, updatePosts);
  };

  return (
    <PostFormContainer>
      <Form onSubmit={submitPost}>
        <h4>Create a post</h4>
        <PostTitleInput form={form} onChange={onChange}></PostTitleInput>
        <PostTextArea form={form} onChange={onChange}></PostTextArea>
        <Button CTA="Post" />
      </Form>
    </PostFormContainer>
  );
}

export default PostForm;
