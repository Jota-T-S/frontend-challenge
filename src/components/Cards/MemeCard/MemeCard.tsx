import { useState, useEffect } from "react";
import useMeme from "../../../hooks/useMeme";
import { Meme } from "../../../interfaces/meme";
import useUser from "../../../hooks/useUser";
import "./MemeCard.css";
import iconLike from "../../../assets/icons/heart2.png";
import iconDisLike from "../../../assets/icons/heart.png";

export const MemeCard = ({ id }) => {
  const { getMemesById, deleteMeme } = useMeme();
  const { likeMemeUser, dislikeMemeUser } = useUser();
  const [meme, setMeme] = useState<Meme | null>(null);
  const [user, setUser] = useState<string>();
  const [isLiked, setIsLiked] = useState(false);
  const userData = localStorage.getItem("user");

  const Admin: string = import.meta.env.VITE_APP_ID_ADMIN;

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const memeData = await getMemesById(id);

        setMeme(memeData);
        setIsLiked(memeData.likedBy.includes(user));
      } catch (error) {
        console.log((error as Error).message);
      }
    };

    const fetchUser = () => {
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser.id);
      }
    };

    fetchMeme();
    fetchUser();
  }, []);

  const handleLike = async () => {
    try {
      if (isLiked) {
        await dislikeMemeUser(user, meme._id);
      } else {
        await likeMemeUser(user, meme._id);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handleDeleteUser = async (memeId: string) => {
    try {
      await deleteMeme(memeId);
      setMeme(undefined);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <>
      {meme && (
        <div className="meme-card">
          <img src={meme.file} alt={meme.name} className="meme-card__img" />
          <h3>{meme.name}</h3>
          <p>{meme.description}</p>
          <div className="meme-card__buttons-like">
            {isLiked ? (
              <button onClick={handleLike} className="meme-card__like">
                <img src={iconDisLike} alt="" />
              </button>
            ) : (
              <button onClick={handleLike} className="meme-card__like">
                <img src={iconLike} alt="" />
              </button>
            )}
            {(user === meme.userId || user === Admin) && (
              <div className="meme-card__buttons">
                <button
                  onClick={() => handleDeleteUser(meme._id)}
                  className="meme-card__delete"
                >
                  X
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
