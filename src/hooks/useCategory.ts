import axios from "axios";

function useCategory() {
  const { VITE_APP_SERVICE_URL } = import.meta.env;

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        `${VITE_APP_SERVICE_URL}/category/all-category`
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const getMemeByCategories = async (id: string | undefined) => {
    try {
      const response = await axios.get(
        `${VITE_APP_SERVICE_URL}/category/${id}`
      );
      const data = response.data.data;

      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  return { getAllCategories, getMemeByCategories };
}

export default useCategory;
