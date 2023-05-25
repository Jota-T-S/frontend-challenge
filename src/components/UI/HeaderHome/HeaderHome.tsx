import imgHeaderHome from "../../../assets/img/cabecera-home.jpg";
import "./HeaderHome.css";

export const HeaderHome = () => {
  return (
    <div className="header-home">
      <img src={imgHeaderHome} alt="picture" className="w-full" />
    </div>
  );
};
