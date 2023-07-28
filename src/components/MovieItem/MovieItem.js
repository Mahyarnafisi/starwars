import React, { useCallback, useEffect, useState } from "react";
import movieItemStyle from "./MovieItem.module.css";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
function MovieItem(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [profileData, setProfileData] = useState(props.charactersData);
  const [charName, setCharName] = useState();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const singleMovie = props.fetchedData.find((item) => item.episode_id === parseInt(movieId));
  const { title, release_date } = singleMovie;

  //
  const charactersItem = profileData.find((item) => item.id === parseInt(movieId));
  const { characters: characters } = charactersItem;

  const profileDataFetchHandler = useCallback(async () => {
    setFetchError(false);
    setIsLoading(true);
    try {
      const response = await Promise.all(characters.map((url) => fetch(url)));

      const data = await Promise.all(response.map((item) => item.json()));
      setCharName(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    profileDataFetchHandler();
  }, []);
  console.log(charName);
  return (
    <div className={movieItemStyle.movieItem}>
      <div>
        <h2 className={movieItemStyle.title}>{title}</h2>
        <p className={movieItemStyle.releaseDate}>({release_date.slice(0, 4)})</p>
      </div>
      {isLoading && <span className={movieItemStyle.loading}></span>}
      {!isLoading && charName && (
        <div className={movieItemStyle.list}>
          {charName.map((name, i) => (
            <li className={movieItemStyle.listItem}>
              {name.name} <span className={movieItemStyle.itemTag}>{i + 1}</span>
            </li>
          ))}
        </div>
      )}
      {!isLoading && charName && (
        <button className="button-primary" onClick={() => navigate(-1)}>
          get back to home
        </button>
      )}
    </div>
  );
}

export default MovieItem;
