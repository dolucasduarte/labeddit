import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/"
});

const token = localStorage.getItem("token");

export default api;
export { token };
