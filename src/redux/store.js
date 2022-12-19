import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import movieSaga from "./saga";
import createSagaMiddleware from "@redux-saga/core";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(movieSaga);

export default store;
