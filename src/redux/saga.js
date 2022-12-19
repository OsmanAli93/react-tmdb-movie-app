import { takeEvery, put, call, all, fork } from "redux-saga/effects";
import {
  REQUEST_MOVIES,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_FAILED,
  SEARCH_MOVIES,
} from "../constant";
import * as API from "../api/moviesApi";

function* fetchMovies(action) {
  try {
    const result = yield call(API.requestGetMovies, action.currentPage);

    yield put({ type: REQUEST_MOVIES_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: REQUEST_MOVIES_FAILED, errorMsg: error });
  }
}

function* searchMovies(action) {
  try {
    const result = yield call(
      API.requestSearchMovies,
      action.query,
      action.currentPage
    );

    yield put({ type: REQUEST_MOVIES_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: REQUEST_MOVIES_FAILED, errorMsg: error });
  }
}

function* sagaWatcher() {
  yield takeEvery(REQUEST_MOVIES, fetchMovies);
  yield takeEvery(SEARCH_MOVIES, searchMovies);
}

export default sagaWatcher;
