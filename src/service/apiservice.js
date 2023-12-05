import axios from "axios";

axios.defaults.withCredentials = true;

const apiServices = axios.create({
  baseURL: `https://socinalnetapi.onrender.com/api/v1/`,
});

export default apiServices;
