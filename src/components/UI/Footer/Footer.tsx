import logoGreen from "../../../assets/img/logo-green.png";
import logoPurple from "../../../assets/img/logo-purple.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <img src={logoGreen} alt="logo" />
      <img src={logoPurple} alt="logo" />
    </div>
  );
};
