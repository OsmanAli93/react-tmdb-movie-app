import React from "react";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setLoadingSpinner,
  addToFavourites,
  removeFromFavourites,
} from "../../redux/actions/movieAction";
import MovieCardSkeleton from "./MovieCardSkeleton";

const Movie = (props) => {
  const { movie } = props;
  const dispatch = useDispatch();

  const [favourites, setFavourites] = useState(() => {
    const isFavourites = props.fav.find((item) => item.id === movie.id);
    return isFavourites ? true : false;
  });

  const handleFavourites = () => {
    if (favourites) {
      dispatch(removeFromFavourites(movie.id));
      setFavourites((prevState) => !prevState);
    } else {
      dispatch(addToFavourites(movie));
      setFavourites((prevState) => !prevState);
    }
  };

  // console.log("movie", props.spinner);

  return (
    <div className="col-lg-3 mb-4">
      <div className="movie-card position-relative text-center ">
        <MovieCardSkeleton show={props.spinner ? "show" : "hidden"} />

        <button
          type="button"
          className="position-absolute add-to-favourites rounded"
          title="Add To Favourites"
          onClick={handleFavourites}
        >
          <i className={`${favourites ? "bi-star-fill" : "bi-star"}`}></i>
        </button>
        <Link to={`/movie/${movie.id}`}>
          <img
            className="d-block w-100 h-100 rounded"
            onLoad={() => {
              dispatch(setLoadingSpinner(false));
            }}
            src={
              movie.poster_path !== null
                ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://via.placeholder.com/400"
            }
            alt={movie.title}
          />

          <h5 className="position-absolute bottom-0 px-3 mb-0 d-flex align-items-center justify-content-center w-100 text-white">
            {movie.title}
          </h5>
        </Link>

        {movie.release_date && (
          <span className="position-absolute movie-year bg-primary rounded">
            {movie.release_date.split("-")[0]}
          </span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    spinner: state.requestMoviesResult.spinner,
    fav: state.favouritesMovies,
  };
};

export default connect(mapStateToProps)(Movie);
