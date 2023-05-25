import useMeme from "../../../hooks/useMeme";
import { useState } from "react";
import "./SearchMeme.css";

export const SearchMeme = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { searchMeme } = useMeme();

  const handleSearch = async (e) => {
    const inputValue = e.target.value;

    if (inputValue.length < 2) {
      setSearchResults([]);
    } else {
      try {
        const data = await searchMeme(inputValue);
        setSearchResults(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container-search">
      <input type="text" placeholder="Search Meme" onChange={handleSearch} />
      <div>
        {searchResults.map((result) => (
          <div key={result._id} className="search-result">
            <img src={result.file} alt={result.name} />
            <div className="search-result__info">
              <h3>{result.name}</h3>
              <p>{result.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
