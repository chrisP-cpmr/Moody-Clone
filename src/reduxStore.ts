import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import errorReducer from "./error/errorSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV !== "production"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;