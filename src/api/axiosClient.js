import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const HttpClient = axios.create({
  baseURL: "https://ancient-ravine-94736.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;