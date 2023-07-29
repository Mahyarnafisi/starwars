import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Main from "./components/Main/Main";
import Error from "./components/Pages/Error";
import Footer from "./components/Footer/Footer";
import MovieItem from "./components/MovieItem/MovieItem";
import "./App.css";

function App() {
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [charactersData, setCharactersData] = useState();

  const fetchDataHandler = useCallback(async () => {
    setFetchError(false);
    setIsLoading(true);
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
      setIsLoading(false);
    } catch (error) {
      setFetchError(false);
      console.log("error");
    }
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);
  //

  return (
    <div className="App">
      <Header />
      {isLoading && <Loading />}
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
