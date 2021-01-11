import api from "./api";
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
      headers: { authorization: localStorage.getItem("token") }
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
      headers: { authorization: localStorage.getItem("token") }
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
