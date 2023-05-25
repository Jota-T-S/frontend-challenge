import axios from "axios";

const URL_GIPHY = import.meta.env.VITE_APP_GHIPHY_URL;
const VITE_APP_KEY = import.meta.env.VITE_APP_KEY;

export const getTrendingGiphy = async () => {
  try {
    const response = await axios.get(`${URL_GIPHY}/trending`, {
      params: {
        api_key: VITE_APP_KEY,
        limit: 9,
      },
    });
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getCategoryGiphy = async () => {
  try {
    const response = await axios.get(`${URL_GIPHY}/categories`, {
      params: {
        api_key: VITE_APP_KEY,
        // limit: 9,
      },
    });
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
