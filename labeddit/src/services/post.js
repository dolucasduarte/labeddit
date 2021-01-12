<<<<<<< HEAD
import api, { token } from "./api";
=======
import api from "./api";
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
import { getFeed, getPost } from "./get";

const signUp = (body, history) => {
  api
    .post("signup", body)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      history.push("/");
    })
    .catch(error => {
      alert("Couldn't sign up");
    });
};

const signIn = (body, history) => {
  api
    .post("login", body)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      history.push("/");
    })
    .catch(error => {
      alert("Couldn't sign in");
    });
};

const createPost = (body, resetForm, updatePosts) => {
  api
    .post("posts", body, {
      headers: { authorization: token }
    })
    .then(response => {
      resetForm();
      getFeed(updatePosts);
    })
    .catch(error => {
      alert("Couldn't create post");
    });
};

const createComment = (id, body, resetForm, updatePost) => {
  api
    .post(`posts/${id}/comment`, body, {
<<<<<<< HEAD
      headers: { authorization: token }
=======
      headers: { authorization: localStorage.getItem("token") }
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0
    })
    .then(response => {
      resetForm();
      getPost(id, updatePost);
    })
    .catch(error => {
      alert(error);
    });
};

export { signUp, signIn, createPost, createComment };
