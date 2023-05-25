import { useEffect, useState } from "react";
import useMeme from "../../../hooks/useMeme";
import { MemeCard } from "../../Cards/MemeCard/MemeCard";
import "./ContainerMemes.css";
import { SearchMeme } from "../../Forms/SearchMeme/SearchMeme";

export const ContainerMemes = () => {
  const [memes, setMemes] = useState([]);
  const { getAllMemes } = useMeme();

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const memeData = await getAllMemes();
        setMemes(memeData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMemes();
  }, []);

  return (
    <div className="container-memes">
      <h1>
        FUNNY <span>*</span> MEMES
      </h1>
      <div className="container-memes__search">
        <SearchMeme />
      </div>
      <div className="container-memes__cards">
        {memes &&
          memes.map((meme) => <MemeCard key={meme._id} id={meme._id} />)}
      </div>
    </div>
  );
};
