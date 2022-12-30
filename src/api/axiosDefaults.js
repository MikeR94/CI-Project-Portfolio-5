import axios from "axios";

axios.defaults.baseURL = "https://drf-api-league-hub.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multi-part/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
