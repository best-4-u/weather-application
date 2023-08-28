import axios from "axios";

const baseAxios = axios.create({
  baseURL: "/",
  headers: {
    "Content-type": "application/json",
  },
});

export default baseAxios;
