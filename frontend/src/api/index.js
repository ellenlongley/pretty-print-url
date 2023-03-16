import axios from "axios";

const BASE_URL = "https://cyderes-project-backend.onrender.com";

export const fetchWhoIsData = (domainName) => {
  const url = `${BASE_URL}?domainName=${domainName}`;
  return axios.get(url);
};
