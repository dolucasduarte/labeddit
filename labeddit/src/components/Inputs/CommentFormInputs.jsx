import { TextArea } from "./Inputs.style";

function CommentTextArea({ form, onChange }) {
  return (
    <TextArea
      id="commentText"
      name="commentText"
      placeholder="What are your thoughts on this?"
      value={form.commentText}
      onChange={onChange}
      required
    />
  );
}

export { CommentTextArea };
