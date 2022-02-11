import axios from "axios";

export const getApi = async (apiUrl) => {
  const response = await axios.get(apiUrl);

  return await response.data;
};
