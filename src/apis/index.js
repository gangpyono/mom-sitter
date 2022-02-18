import axios from "axios";
import { config } from "../../config";

export const fetcher = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    authorization: config.auth,
    Accept: "application/vnd.github.v3+json",
  },
});
