/* Project pages */
import { MainPage, SearchPage, TrailerPage, MoviePage } from "./pages/index";
/* react router dom */
import { Route, Routes } from "react-router-dom";
/* Layuot */
import Layout from "./layout";
/* react */
import { useState } from "react";
/* contexts */
import { filterContext } from "./contexts/filter-movie-context";


export default function App() { 

  const [filterMovie, setFilterMovie] = useState("hidden")

  return (
    <filterContext.Provider value={{filterMovie, setFilterMovie}}>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/search/:searchText" element={<SearchPage/>} />
          <Route path="/localMovie/:movieId/:movieName" element={<MoviePage/>} />
          <Route path="/trailer/:movieId/:trailerId" element={<TrailerPage/>} />
        </Routes>
      </Layout>
    </filterContext.Provider>
  );
}