import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-67125/us-central1",
});

export default instance;
