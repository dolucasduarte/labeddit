import { PostFormContainer, Form } from "./PostForm.style";
<<<<<<< HEAD:labeddit/src/components/PostForm/PostForm.jsx
import { PostTitleInput, PostTextArea } from "components/Inputs/PostFormInputs";
import { Button } from "components/Buttons/Buttons";
import useForm from "hooks/useForm";
import { createPost } from "services/post";
=======
import { PostTitleInput, PostTextArea } from "../Inputs/PostFormInputs";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/post";
import { Button } from "../Buttons/Buttons";
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0:labeddit/src/components/PostForm.jsx

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
<<<<<<< HEAD:labeddit/src/components/PostForm/PostForm.jsx
        <Button callToAction="Post" type="small" />
=======
        <Button CTA="Post" />
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0:labeddit/src/components/PostForm.jsx
      </Form>
    </PostFormContainer>
  );
}

export default PostForm;
