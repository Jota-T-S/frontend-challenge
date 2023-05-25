import { useState, useEffect } from "react";
import useMeme from "../../../hooks/useMeme";
import { MemeCard } from "../../Cards/MemeCard/MemeCard";
import "../ContainerLikes/ContainerLikes.css";

export const ContainerCreateByUser = () => {
  const [memes, setMemes] = useState([]);
  const { getMemesByUser } = useMeme();

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const memesData = await getMemesByUser();
        console.log(memesData);
        setMemes(memesData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMemes();
  }, []);
  console.log(memes);

  return (
    <div>
      <div className="container-users__title">
        <h2>PROFILE</h2>
      </div>
      <div className="container-users__subtitle">
        <h2>my uploads</h2>
      </div>
      <div className="container-memes__cards">
        {memes &&
          memes.map((meme) => <MemeCard key={meme._id} id={meme._id} />)}
      </div>
    </div>
  );
};
