import useForm from "../../hooks/useForm";
import { CommentFormContainer } from "../../styles/components/CommentsSection/commentForm";
import { CommentTextArea } from "../Inputs";
import { createComment } from "../../services/post";

function CommentForm({ post }) {
  const { form, onChange, resetForm } = useForm({
    commentText: ""
  });

  const submitComment = event => {
    event.preventDefault();
    const body = {
      text: form.commentText
    };
    createComment(post.id, body, resetForm);
  };

  return (
    <CommentFormContainer>
      <form onSubmit={submitComment}>
        <label for="commentText">
          Comment as {localStorage.getItem("username")}
        </label>
        <CommentTextArea form={form} onChange={onChange} />
        <button>Comment</button>
      </form>
    </CommentFormContainer>
  );
}

export default CommentForm;
