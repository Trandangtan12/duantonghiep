import axios from "axios";
const HttpClient = axios.create({
  baseURL: "https://aqueous-atoll-03220.herokuapp.com/api",
  // baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;