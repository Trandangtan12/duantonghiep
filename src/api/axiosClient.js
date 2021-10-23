import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const HttpClient = axios.create({
  baseURL: "https://aqueous-dusk-28926.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;