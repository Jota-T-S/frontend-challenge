import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MemeCard } from "../../components/Cards/MemeCard/MemeCard";
import useCategory from "../../hooks/useCategory";

interface Category {
  _id: string;
  name: string;
  description: string;
  image: string;
}

export const CategoryPage = () => {
  const { getAllCategories, getMemeByCategories } = useCategory();
  const { id } = useParams();
  const [categories, setcategories] = useState<Category[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoyData = await getMemeByCategories(id);
        setcategories(categoyData);
        const allCategory = await getAllCategories();
        const category = allCategory.find(
          (category: Category) => category._id === id
        );
        setCategoryName(category.name);
        setBackgroundImage(category.image);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  return (
    <div>
      <h1>{categoryName}</h1>
      <img src={backgroundImage} alt="" />
      {categories.map((meme) => (
        <MemeCard key={meme._id} id={meme._id} />
        // <MemeCard key={category._id} id={category.name} />
      ))}
    </div>
  );
};
