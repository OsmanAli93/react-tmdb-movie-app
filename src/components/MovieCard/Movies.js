import React from "react";
import Movie from "./Movie";
import Pagination from "../Pagination";

const Movies = (props) => {
  const { onPageChange, currentPage, movies, total_pages } = props;

  return (
    <section className="section-gap">
      <div className="container">
        <div className="mb-4">
          Show results {currentPage} of {total_pages}
        </div>
        <div className="row">
          {movies &&
            movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
        </div>
        <Pagination onPageChange={onPageChange} />
      </div>
    </section>
  );
};

export default Movies;
