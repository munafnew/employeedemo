import axios from "axios";

const apiurl = "https://jsonplaceholder.typicode.com/";

export const axiosInstance = axios.create({
  baseURL: apiurl,
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});
