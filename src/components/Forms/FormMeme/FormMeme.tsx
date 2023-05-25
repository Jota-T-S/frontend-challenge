import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useMeme from "../../../hooks/useMeme";
import { Category } from "../../../interfaces/category";
import useCategory from "../../../hooks/useCategory";
import "../Forms.css";

type Inputs = {
  name: string;
  description: string;
  file: string;
  categories: string;
  // likeCount?: number;
};

export const FormMeme = () => {
  const { createMemes } = useMeme();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [categories, setCategories] = useState<Category[]>([]);
  const { getAllCategories } = useCategory();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categorysData = await getAllCategories();
        setCategories(categorysData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  const formRef = useRef(null);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    if (formRef.current) {
      const formData: unknown = new FormData(formRef.current);
      await createMemes(formData);
      reset();
    }
  };

  return (
    <div className="content-form">
      <div className="content-form__subtitle">
        <h2>upload meme</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
        encType="multipart/form-data"
      >
        <div className="form-group">
          <input
            placeholder="Name"
            type="text"
            {...register("name", {
              required: "required",
            })}
          />
          <input
            placeholder="description"
            type="text"
            {...register("description")}
          />
        </div>
        <div className="form-group">
          <select {...register("categories")}>
            <option>Select category</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            placeholder="Image upload"
            type="file"
            {...register("file", {
              required: "required",
            })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
