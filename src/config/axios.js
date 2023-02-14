import axios from "axios";
import { getAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    if (getAccessToken()) {
      config.headers.authorization = `Bearer ${getAccessToken()}`;
    } //# check token if yes add key authorization too req header
    return config; // # if not return will not sent token and axios will not working
  },
  (err) => {
    //#interceptor stop error
    return Promise.reject(err);
  }
);
// .use -> config, err

export default axios;
