import React, { useCallback, useEffect, useState } from "react";
import movieItemStyle from "./MovieItem.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
function MovieItem(props) {
  const [fetchError, setFetchError] = useState(false);
  const [profileData, setProfileData] = useState(props.charactersData);
  const [charName, setCharName] = useState();
  const navigate = useNavigate();
  const { movieId } = useParams();

  // Redux
  const dispatch = useDispatch();
  const loadingOn = () => {
    dispatch({ type: "LOADING-ON" });
  };
  const loadingOff = () => {
    dispatch({ type: "LOADING-OFF" });
  };
  //

  //fetching Characters names from link's array
  const profileDataFetchHandler = useCallback(async () => {
    setFetchError(false);
    loadingOn();

    try {
      const response = await Promise.all(characters.map((url) => fetch(url)));

      const data = await Promise.all(response.map((item) => item.json()));
      setCharName(data);
    } catch (error) {
      setFetchError(error.message);
      console.log(error.message);
      return;
    }
    loadingOff();
  }, []);

  useEffect(() => {
    profileDataFetchHandler();
  }, [profileDataFetchHandler]);
  //

  // modifying data to extract id and name from fetched data
  const charactersItem = profileData.find((item) => item.id === parseInt(movieId));
  const { characters: characters } = charactersItem;

  const singleMovie = props.fetchedData.find((item) => item.episode_id === parseInt(movieId));
  const { title, release_date } = singleMovie;
  //

  return (
    <div className={movieItemStyle.movieItem}>
      <div>
        <h2 className={movieItemStyle.title}>{title}</h2>
        <p className={movieItemStyle.releaseDate}>({release_date.slice(0, 4)})</p>
      </div>

      {charName && (
        <div className={movieItemStyle.list}>
          {charName.map((name, i) => (
            <li key={i} className={movieItemStyle.listItem}>
              {name.name} <span className={movieItemStyle.itemTag}>{i + 1}</span>
            </li>
          ))}
        </div>
      )}

      {charName && (
        <button className="button-primary" onClick={() => navigate(-1)}>
          get back to home <i class="bi bi-chevron-right"></i>
        </button>
      )}
    </div>
  );
}

export default MovieItem;
