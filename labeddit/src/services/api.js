import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/"
});

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

const createPost = (body, resetForm, requestData) => {
  api
    .post("posts", body, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(response => {
      getPosts();
      requestData();
    })
    .catch(error => {
      alert("Fracasso");
    });
};

const getPosts = setData => {
  // api
  //   .get("posts", {
  //     headers: {
  //       authorization: localStorage.getItem("token")
  //     }
  //   })
  //   .then(response => {
  //     setData(response.data);
  //   })
  //   .catch(error => {
  //     alert("Erro ao carregar posts");
  //   });
};

const votePost = (body, id) => {
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

const requestData = setData => {
  api
    .get("posts", {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      alert("Erro ao carregar informações");
    });
};

export { api, signUp, signIn, createPost, getPosts, votePost, requestData };
