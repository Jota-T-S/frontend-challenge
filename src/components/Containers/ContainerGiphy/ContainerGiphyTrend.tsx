import { useEffect, useState } from "react";
import { getTrendingGiphy } from "../../../API/GiphyApi";
import "./ContainerGiphy.css";

export const ContainerGiphyTrend = () => {
  const [giphy, setGiphy] = useState([]);
  useEffect(() => {
    const fetchApiGiphy = async () => {
      try {
        const giphyData = await getTrendingGiphy();
        setGiphy(giphyData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApiGiphy();
  }, []);
  console.log(giphy);
  return (
    <div className="container-giphy">
      <h2>
        <span></span> GIPHY
      </h2>
      <div className="container-giphy__items">
        {giphy.map((gif) => {
          return (
            <div key={gif.id} className="container-giphy__item">
              <img
                src={gif.images.fixed_height.url}
                alt={gif.title}
                className="container-giphy__item__img"
              />
              <p className="container-giphy__item__title">{gif.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
