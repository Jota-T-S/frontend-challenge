import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCategory from "../../../hooks/useCategory";
import "./ContainerCategory.css";

interface Category {
  _id: string;
  name: string;
  description: string;
  image: string;
}

export const ContainerCategory = () => {
  const { getAllCategories } = useCategory();
  const [categories, setCategories] = useState<Category[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await getAllCategories();
        setCategories(categoryData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="container-category">
      <h2>CATEGORIES</h2>
      <div className="container-category__categories">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => navigate(`/category/${category._id}`)}
            className="container-category__item"
            style={{
              content: `url(${category.image})`,
            }}
          >
            {category.name}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};
