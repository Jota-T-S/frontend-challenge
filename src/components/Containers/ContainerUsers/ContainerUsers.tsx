import { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";
import { User } from "../../../interfaces/user";
import { UserCard } from "../../Cards/UserCard/UserCard";
import "./ContainerUsers.css";
import { ContainerLikes } from "../ContainerLikes/ContainerLikes";

export const ContainerUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { getAllUsers } = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="container-users__title">
        <h2>ADMIN</h2>
      </div>
      <div className="container-users__items">
        {users.map((user) => (
          <UserCard key={user._id} id={user._id} />
        ))}
      </div>
      <ContainerLikes />
    </>
  );
};
