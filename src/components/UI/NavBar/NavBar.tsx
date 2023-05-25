import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../context/UserProvider";
import logo from "../../../assets/img/logo-purple.png";
import "./NavBar.css";

export const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? null
  );

  const Admin: string = import.meta.env.VITE_APP_ID_ADMIN;

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="navbar">
      <div>
        <NavLink to="/">
          <img src={logo} alt="" className="logo" />
        </NavLink>
      </div>
      <div className="links">
        <NavLink to="/all-memes">Memes</NavLink>
        <NavLink to="/giphy">Giphy</NavLink>

        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            {user && user.id === Admin ? (
              <NavLink to="/admin" className="link-log">
                Admin
              </NavLink>
            ) : (
              <NavLink to="/profile" className="link-log">
                Profile
              </NavLink>
            )}
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};
