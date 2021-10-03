import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const HttpClient = axios.create({
  baseURL: "https://614604dd38339400175fc7c4.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;