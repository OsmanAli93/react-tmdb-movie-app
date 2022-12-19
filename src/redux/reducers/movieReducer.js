import {
  REQUEST_MOVIES_FAILED,
  REQUEST_MOVIES_SUCCESS,
  SET_SPINNER,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  REQUEST_MOVIE_SUCCESS,
} from "../../constant";

const INITIAL_STATE = {
  movies: [],
  errorMsg: "",
  spinner: true,
};

export const requestMoviesResult = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        total_results: action.total_results,
      };
    case REQUEST_MOVIES_FAILED:
      return {
        ...state,
        errorMsg: action.error,
      };
    case SET_SPINNER:
      return {
        ...state,
        spinner: action.status,
      };
    default:
      return state;
  }
};

export const favouritesMovies = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      const existingMovie = data.find((movie) => movie.id === action.data.id);

      if (!existingMovie) {
        return [...data, action.data];
      }
      return data;
    case REMOVE_FROM_FAVOURITES:
      const updateFavouriteList = data.filter(
        (movie) => movie.id !== action.data
      );
      return [...updateFavouriteList];
    default:
      return data;
  }
};

export const requestMovieDetail = (payload = {}, action) => {
  switch (action.type) {
    case REQUEST_MOVIE_SUCCESS:
      return {
        ...payload,
        movie: action.payload,
      };
    default:
      return payload;
  }
};
