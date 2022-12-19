import { combineReducers } from "redux";
import { requestMoviesResult, favouritesMovies } from "./reducers/movieReducer";

export default combineReducers({
  requestMoviesResult,
  favouritesMovies,
});
