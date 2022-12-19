import {
  REQUEST_MOVIES,
  REQUEST_MOVIES_FAILED,
  REQUEST_MOVIE_FAILED,
  SET_SPINNER,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SEARCH_MOVIES,
} from "../../constant";

export const requestMovies = (currentPage) => {
  return {
    type: REQUEST_MOVIES,
    currentPage,
  };
};

export const requestMoviesFailed = () => {
  return {
    type: REQUEST_MOVIES_FAILED,
  };
};

export const setLoadingSpinner = (status) => {
  return {
    type: SET_SPINNER,
    status,
  };
};

export const addToFavourites = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    data,
  };
};

export const removeFromFavourites = (data) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    data,
  };
};

export const movieSearch = (query, currentPage) => {
  return {
    type: SEARCH_MOVIES,
    query,
    currentPage,
  };
};
