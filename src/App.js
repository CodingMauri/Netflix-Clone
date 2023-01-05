import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { DataContext } from "./DataContext";
import { useState } from "react";
function App() {
  
  const searchOptions = {
    movieKey: process.env.REACT_APP_MOVIE_KEY,
    api: "https://api.themoviedb.org/3/",
    language: "language=en-US",
  };

  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="App">
      <DataContext.Provider value={{ searchOptions, imagePath }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
               
              />
            }
          />
       
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
