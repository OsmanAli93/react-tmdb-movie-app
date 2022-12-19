import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <Header title="Movies" container="container" background="bg-header" />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="/search/:search" element={<Search />}></Route>
      </Routes>
    </>
  );
};

export default App;
