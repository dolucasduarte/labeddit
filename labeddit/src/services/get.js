import api from "./api";

const getPosts = (setData, setIsLoading) => {
  api
    .get("posts", {
      headers: {
        authorization: localStorage.getItem("token")
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

export { getPosts };
