import { Navigate, Outlet } from "react-router-dom";

interface User {
  id: string;
  rol: string;
  status: boolean;
  token: string;
}

export const UserRoute = () => {
  const user = localStorage.getItem("user") as unknown as User;
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
