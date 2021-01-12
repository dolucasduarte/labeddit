import api, { token } from "./api";

const voteOnPost = (body, id) => {
  api
    .put(`posts/${id}/vote`, body, {
      headers: { authorization: token }
    })
    .then(response => {})
    .catch(error => {
      alert(error);
    });
};

export { voteOnPost };
