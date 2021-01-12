import api, { token } from "./api";

const getFeed = (setData, setIsLoading) => {
  api
    .get("posts", {
      headers: {
        authorization: token
      }
    })
    .then(response => {
      setData(response.data.posts);
      setIsLoading && setIsLoading(false);
    })
    .catch(error => {
      alert("Erro ao carregar posts");
      setIsLoading && setIsLoading(false);
    });
};

const getPost = (id, setData, setIsLoading) => {
  api
    .get(`posts/${id}`, {
      headers: {
        authorization: token
      }
    })
    .then(response => {
      setData(response.data.post);
      setIsLoading && setIsLoading(false);
    })
    .catch(error => {
      alert("Pane no");
      setIsLoading && setIsLoading(false);
    });
};

export { getFeed, getPost };
