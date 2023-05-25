import axios from "axios";
import { Meme } from "../interfaces/meme";

function useMeme() {
  const { VITE_APP_SERVICE_URL } = import.meta.env;

  const getAllMemes = async () => {
    try {
      const response = await axios.get(
        `${VITE_APP_SERVICE_URL}/meme/all-memes`
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const createMemes = async (memeData: Meme) => {
    const { id } = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await axios.post(
        `${VITE_APP_SERVICE_URL}/meme/create-meme/${id}`,
        memeData
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const getMemesById = async (id: string | undefined) => {
    try {
      const response = await axios.get(`${VITE_APP_SERVICE_URL}/meme/${id}`);
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateMeme = async (memeData: Meme, id: string) => {
    try {
      const response = await axios.put(
        `${VITE_APP_SERVICE_URL}/meme/update-meme/${id}`,
        memeData
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteMemeByUser = async (memeId: string | undefined) => {
    const { id } = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await axios.delete(
        `${VITE_APP_SERVICE_URL}/meme/delete-meme/${memeId}/${id}`
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteMeme = async (id: string | undefined) => {
    try {
      const response = await axios.delete(
        `${VITE_APP_SERVICE_URL}/meme/delete-meme/${id}`
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const searchMeme = async (name: string) => {
    try {
      const response = await axios.get(
        `${VITE_APP_SERVICE_URL}/meme/search-meme/${name}`
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const getMemesByUser = async () => {
    const { id } = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await axios.get(
        `${VITE_APP_SERVICE_URL}/meme/memes-by-user/${id}`
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    getAllMemes,
    getMemesById,
    createMemes,
    deleteMemeByUser,
    deleteMeme,
    updateMeme,
    searchMeme,
    getMemesByUser,
  };
}
export default useMeme;
