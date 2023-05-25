import { useContext } from "react";
import axios from "axios";
import { User } from "../interfaces/user";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function useUser() {
  const { VITE_APP_SERVICE_URL } = import.meta.env;
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        `${VITE_APP_SERVICE_URL}/user/all-users`
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const registerUsers = async (userData: User) => {
    try {
      const response = await axios.post(
        `${VITE_APP_SERVICE_URL}/user/register-user`,
        userData
      );
      const data = response.data.data;
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const loginUsers = async (userData: User) => {
    try {
      const response = await axios.post(
        `${VITE_APP_SERVICE_URL}/user/login-user`,
        userData
      );
      const data = response.data;
      localStorage.setItem("user", JSON.stringify(data));
      //para que actualice el estado y muestre el boton logout
      setIsLoggedIn(true);
      navigate("/");

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const getUsersById = async (id: string | undefined) => {
    try {
      const response = await axios.get(`${VITE_APP_SERVICE_URL}/user/${id}`);
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteUser = async (id: string | undefined) => {
    try {
      const response = await axios.delete(
        `${VITE_APP_SERVICE_URL}/user/delete-user/${id}`
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const likeMemeUser = async (userId: string | undefined, memeId: string) => {
    try {
      const response = await axios.put(
        `${VITE_APP_SERVICE_URL}/user/like-meme/${userId}`,
        { memeId }
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const dislikeMemeUser = async (
    userId: string | undefined,
    memeId: string
  ) => {
    try {
      const response = await axios.put(
        `${VITE_APP_SERVICE_URL}/user/dislike-meme/${userId}`,
        { memeId }
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const getLikedMemes = async () => {
    const { id } = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await axios.get(
        `${VITE_APP_SERVICE_URL}/user/liked-memes/${id}`
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    getAllUsers,
    registerUsers,
    loginUsers,
    getUsersById,
    deleteUser,
    likeMemeUser,
    dislikeMemeUser,
    getLikedMemes,
  };
}

export default useUser;
