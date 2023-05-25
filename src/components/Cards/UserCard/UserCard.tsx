import { useState, useEffect } from "react";
import { User } from "../../../interfaces/user";
import useUser from "../../../hooks/useUser";
import "./UserCard.css";

export const UserCard = ({ id }) => {
  const { getUsersById, deleteUser } = useUser();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUsersById(id);
        setUser(userData);
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    fetchUser();
  }, []);

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
      setUser(null);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div className="user-card">
      {user && (
        <>
          <img src={user.thumbnail} alt="" />
          <h3>{user.userName}</h3>
          <button onClick={() => handleDeleteUser(user._id)}>X</button>
        </>
      )}
    </div>
  );
};
