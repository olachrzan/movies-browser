import axios from "axios";

export const getApi = async (apiUrl) => {
  return (await axios.get(apiUrl)).data;
};