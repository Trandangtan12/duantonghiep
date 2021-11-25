import axios from "axios";
const HttpClient = axios.create({
  baseURL: "https://obscure-taiga-19745.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;