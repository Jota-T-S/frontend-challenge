import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useUser from "../../../hooks/useUser";
import "../Forms.css";

type Inputs = {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  thumbnail: string;
  rol?: string;
};

export const Formregister = () => {
  const { registerUsers } = useUser();
  const { register, handleSubmit } = useForm<Inputs>();

  const formRef = useRef(null);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    if (formRef.current) {
      const formData: unknown = new FormData(formRef.current);

      await registerUsers(formData);
    }
  };

  return (
    <div className="content-form">
      <div className="content-form__title">
        <h1>REGISTER</h1>
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
          <input placeholder="Lastname" type="text" {...register("lastName")} />
          <input
            placeholder="Username"
            type="text"
            {...register("userName", {
              required: "required",
            })}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "required",
            })}
          />
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "required",
            })}
          />
          <input
            placeholder="Image upload"
            type="file"
            {...register("thumbnail", {
              required: "required",
            })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
