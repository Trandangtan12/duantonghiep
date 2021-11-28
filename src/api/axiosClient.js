import axios from "axios";
import { UserApi } from "../service/userService";
const HttpClient = axios.create({
  baseURL: "https://obscure-taiga-19745.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
HttpClient.interceptors.request.use(function (config) {
  var {data} = UserApi.isAuthenticated()
  if (data) {
    config.headers.Authorization = "Bearer " + data.token;
  }
  return config;
});
export default HttpClient;