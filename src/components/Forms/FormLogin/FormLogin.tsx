import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useUser from "../../../hooks/useUser";
import "../Forms.css";

type Inputs = {
  email: string;
  password: string;
};

export const FormLogin = () => {
  const { loginUsers } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const formRef = useRef(null);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    const formData: unknown = new FormData(formRef.current);
    await loginUsers(formData);
  };

  return (
    <div className="content-form">
      <div className="content-form__title">
        <h1>LOGIN</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <div className="form-group">
          <div className="form-error">
            <input
              placeholder="Email"
              type="email"
              name="email"
              {...register("email", {
                required: "required",
              })}
            />
            {errors.email && <span>This field is required.</span>}
          </div>
          <div className="form-error">
            <input
              placeholder="Password"
              type="password"
              name="password"
              {...register("password", {
                required: "required",
              })}
            />
            {errors.password && <span>This field is required.</span>}
          </div>
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
