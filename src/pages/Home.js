import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { REQUEST_MOVIES } from "../constant";
import Movies from "../components/MovieCard/Movies";
import { setLoadingSpinner } from "../redux/actions/movieAction";

const Home = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { movies, total_pages } = props;

  useEffect(() => {
    dispatch(setLoadingSpinner(true));
    dispatch({ type: REQUEST_MOVIES, currentPage });
  }, [currentPage]);

  console.log(props.movies);

  return (
    <>
      {props.movies ? (
        <Movies
          onPageChange={setCurrentPage}
          currentPage={currentPage}
          movies={movies}
          total_pages={total_pages}
        />
      ) : (
        <h3 className="text-center section-gap">Loading...</h3>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.requestMoviesResult.movies.results,
    total_pages: state.requestMoviesResult.movies.total_pages,
  };
};

export default connect(mapStateToProps)(Home);
