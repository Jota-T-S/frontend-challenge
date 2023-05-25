import axios from "axios";

function useRol() {
  const { VITE_APP_SERVICE_URL } = import.meta.env;

  const getAllRoles = async () => {
    try {
      const response = await axios.get(`${VITE_APP_SERVICE_URL}/rol/all-rol`);
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const getUserByRol = async (id: string | undefined) => {
    try {
      const response = await axios.get(`${VITE_APP_SERVICE_URL}/rol/${id}`);
      const data = response.data.data;

      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return { getAllRoles, getUserByRol };
}

export default useRol;
