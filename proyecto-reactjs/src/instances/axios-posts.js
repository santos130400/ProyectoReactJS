import axios from "axios";

const instance = axios.create({
  baseURL: "https://hello-world-react-sabana-2022-default-rtdb.firebaseio.com/",
});

export default instance;