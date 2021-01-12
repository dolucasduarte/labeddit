import { PostFormInput } from "./PostFormInputs.style";
import { TextArea } from "./TextArea.style";

function PostTitleInput({ form, onChange }) {
  return (
    <PostFormInput
      id="title"
      name="title"
      type="text"
      placeholder="Title"
      onChange={onChange}
      value={form.title}
      required
    />
  );
}

function PostTextArea({ form, onChange }) {
  return (
    <TextArea
      id="text"
      name="text"
      placeholder="Text"
      onChange={onChange}
      value={form.text}
      required
    />
  );
}

export { PostTitleInput, PostTextArea };
