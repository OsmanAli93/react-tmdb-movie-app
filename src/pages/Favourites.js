import React from "react";
import { connect, useDispatch } from "react-redux";
import Movie from "../components/MovieCard/Movie";

const Favourites = (props) => {
  console.log(props.favourites);

  return (
    <section className="favourites section-gap">
      <div className="container">
        <div className="row">
          {props.favourites.length > 0 ? (
            props.favourites.map((movie) => (
              <Movie movie={movie} key={movie.id} />
            ))
          ) : (
            <h3 className="text-center">You Have No Favourites Movies</h3>
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    favourites: state.favouritesMovies,
  };
};

export default connect(mapStateToProps)(Favourites);
