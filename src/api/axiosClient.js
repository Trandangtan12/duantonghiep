import axios from "axios";
const HttpClient = axios.create({
  baseURL: "https://aqueous-dusk-28926.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;