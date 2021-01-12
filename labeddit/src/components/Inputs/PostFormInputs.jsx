<<<<<<< HEAD
import { Input } from "./Inputs.style";
import { TextArea } from "./Inputs.style";

function PostTitleInput({ form, onChange }) {
  return (
    <Input
=======
import { PostFormInput } from "./PostFormInputs.style";
import { TextArea } from "./TextArea.style";

function PostTitleInput({ form, onChange }) {
  return (
    <PostFormInput
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
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
