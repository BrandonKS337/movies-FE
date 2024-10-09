"use cors";
import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";

function App() {
  // Movies Array variable
  const [movies, setMovies] = useState();

  // Function handling GET request
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies"); // Promise statement that awaits for a response from endpoint before proceeding.
      // TODO:  include logic that checks against HTTP response and only if response is good does it update the movies variable

      console.log(response.data); //NOTE: logs data in the console window.

      setMovies(response.data); //NOTE: Updates the state of the movies variable based on the returned data
    } catch (err) {
      console.log(err);
    }
  };

  //NOTE: used to relaunch the getMovies function if the movies array is adjusted is updated
  useEffect(() => {
    getMovies();
  }, [ ]);

  return (
    <div className="App">
      {/* define the Routes */}
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
