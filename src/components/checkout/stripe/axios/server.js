import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/fir-9c63f/us-central1",
});

export default instance;
