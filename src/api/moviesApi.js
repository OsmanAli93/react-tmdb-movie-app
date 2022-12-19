import axios from "axios";

export const requestGetMovies = async (currentPage) => {
  const response = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=batman&page=${currentPage}&include_adult=false`
  );

  const { data } = await response;

  return data;
};

export const requestGetMovie = async (movie_id) => {
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );

  const { data } = await response;

  return data;
};

export const requestSearchMovies = async (query, currentPage) => {
  const response = await axios(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`
  );

  const { data } = await response;

  return data;
};
