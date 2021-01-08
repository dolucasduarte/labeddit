import api from "./api";

const voteOnPost = (body, id) => {
  api
    .put(`posts/${id}/vote`, body, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
    .then(response => {})
    .catch(error => {
      alert(error);
    });
};

export { voteOnPost };
