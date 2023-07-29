import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Main from "./components/Main/Main";
import Error from "./components/Pages/Error";
import Footer from "./components/Footer/Footer";
import MovieItem from "./components/MovieItem/MovieItem";
import "./App.css";

function App() {
  // States
  const [fetchError, setFetchError] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [charactersData, setCharactersData] = useState();

  // redux
  const dispatch = useDispatch();
  const loadingValue = useSelector((state) => state.appLoading);
  const loadingIsOn = () => {
    dispatch({ type: "LOADING" });
  };

  //

  const fetchDataHandler = useCallback(async () => {
    setFetchError(false);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      const data = await response.json();
      const dataResults = data.results;
      setFetchedData(dataResults);

      //Modifying fetched data into a new object
      const charactersData = [];
      for (const key in dataResults) {
        charactersData.push({ id: dataResults[key].episode_id, characters: dataResults[key].characters });
      }
      setCharactersData(charactersData);
      //
    } catch (error) {
      setFetchError(false);
      console.log("error");
    }
    loadingIsOn();
  }, []);

  useEffect(() => {
    fetchDataHandler();
    console.log("fetch");
  }, [fetchDataHandler]);
  //

  return (
    <div className="App">
      <Header />
      {loadingValue && <Loading />}
      <Routes>
        <Route path="/" element={<Main fetchedData={fetchedData} />} />
        <Route path="/:movieId" element={<MovieItem fetchedData={fetchedData} charactersData={charactersData} />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
