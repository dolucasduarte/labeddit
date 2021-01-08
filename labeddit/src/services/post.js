import api from "./api";
import { getPosts } from "./get";

const signUp = (body, history) => {
  api
    .post("signup", body)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      history.push("/");
    })
    .catch(error => {
      alert("erro");
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
      alert("erro");
    });
};

const createPost = (body, resetForm, updatePosts) => {
  api
    .post("posts", body, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(response => {
      resetForm();
      getPosts(updatePosts);
    })
    .catch(error => {
      alert("Fracasso");
    });
};

export { signUp, signIn, createPost };
