import { Navigate, Outlet } from "react-router-dom";

interface User {
  id: string;
  rol: string;
  status: boolean;
  token: string;
}

export const AdminRoute = () => {
  const Admin: string = import.meta.env.VITE_APP_ID_ADMIN;
  const user = localStorage.getItem("user") as unknown as User;

  if (user.rol === Admin) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
