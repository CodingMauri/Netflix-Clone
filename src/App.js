import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { DataContext } from "./DataContext";
import { useState } from "react";
function App() {
  
  const [trendingMovies, setTrendingMovies] = useState([])

  const searchOptions = {
    movieKey: process.env.REACT_APP_MOVIE_KEY,
    api: "https://api.themoviedb.org/3/",
    language: "language=en-US",
  };
  
  return (
    <DataContext.Provider value={{searchOptions}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home 
            setTrendingMovies  = {setTrendingMovies}
            trendingMovies = {trendingMovies}
          />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
