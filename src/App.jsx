import {MoviePage} from "./pages/index"
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { MainPage, SearchPage, TrailerPage } from "./pages/index";

export default function App() { 
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/search/:searchText" element={<SearchPage/>} />
        <Route path="/localMovie/:movieId/:movieName" element={<MoviePage/>} />
        <Route path="/trailer/:movieId/:trailerId" element={<TrailerPage/>} />
      </Routes>
    </Layout>
  );
}