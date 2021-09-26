import axios from "axios";
const HttpClient = axios.create({
  baseURL: "https://headphoneapi.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;