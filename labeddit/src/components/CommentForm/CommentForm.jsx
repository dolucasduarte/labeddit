import { CommentFormContainer, Form } from "./CommentForm.style";
import { CommentTextArea } from "components/Inputs/CommentFormInputs";
import { Button } from "components/Buttons/Buttons";
import useForm from "hooks/useForm";
import { createComment } from "services/post";

function CommentForm({ post, updatePost }) {
  const { form, onChange, resetForm } = useForm({
    commentText: ""
  });

  const submitComment = event => {
    event.preventDefault();
    const body = {
      text: form.commentText
    };
    createComment(post.id, body, resetForm, updatePost);
  };

  return (
    <CommentFormContainer>
      <Form onSubmit={submitComment}>
        <label for="commentText">
          Comment as {localStorage.getItem("username")}
        </label>
        <CommentTextArea form={form} onChange={onChange} />
        <Button callToAction="Comment" type="small">
          Comment
        </Button>
      </Form>
    </CommentFormContainer>
  );
}

export default CommentForm;
