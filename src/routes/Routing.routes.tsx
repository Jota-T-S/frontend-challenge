import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { AdminPage } from "../pages/AdminPage/AdminPage";
import { AdminRoute } from "./AdminRoute.routes";
import { UserRoute } from "./UserRoute.routes";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { NavBar } from "../components/UI/NavBar/NavBar";
import { MemesPage } from "../pages/MemesPage/MemesPage";
import { ProfileUserPage } from "../pages/ProfileUserPage/ProfileUserPage";
import { CategoryPage } from "../pages/CategoryPage/CategoryPage";
import { Footer } from "../components/UI/Footer/Footer";
import { GiphyPage } from "../pages/GiphyPage/GiphyPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<AdminRoute />}>
          <Route path="admin" element={<AdminPage />}>
            <Route element={<AdminPage />} />
          </Route>
        </Route>
        <Route element={<UserRoute />}>
          <Route path="/profile">
            <Route index element={<ProfileUserPage />} />
          </Route>
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all-memes" element={<MemesPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/giphy" element={<GiphyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
