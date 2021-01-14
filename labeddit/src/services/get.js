import api, { token } from "./api";

const getFeed = setData => {
  api
    .get("posts", {
      headers: {
        authorization: token
      }
    })
    .then(response => {
      setData(response.data.posts);
    })
    .catch(error => {
      alert(error);
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
      alert(error);
      setIsLoading && setIsLoading(false);
    });
};

export { getFeed, getPost };
