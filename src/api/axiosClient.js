import axios from "axios";
const HttpClient = axios.create({
  baseURL: "https://infinite-dusk-71250.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;