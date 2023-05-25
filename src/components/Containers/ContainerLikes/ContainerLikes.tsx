import { useState, useEffect } from "react";
import useUser from "../../../hooks/useUser";
import { MemeCard } from "../../Cards/MemeCard/MemeCard";
import "./ContainerLikes.css";

export const ContainerLikes = () => {
  const [memes, setMemes] = useState([]);
  const { getLikedMemes } = useUser();

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const memesData = await getLikedMemes();
        console.log(memesData);
        setMemes(memesData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMemes();
  }, []);

  return (
    <div>
      <div className="container-users__subtitle">
        <h2>my likes</h2>
      </div>
      <div className="container-memes__cards">
        {memes &&
          memes.map((meme) => <MemeCard key={meme._id} id={meme._id} />)}
      </div>
    </div>
  );
};
