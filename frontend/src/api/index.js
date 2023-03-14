import axios from "axios";

const BASE_URL = "http://localhost:5001";

export const fetchWhoIsData = (domainName) => {
  const url = `${BASE_URL}?domainName=${domainName}`;
  return axios.get(url);
};
