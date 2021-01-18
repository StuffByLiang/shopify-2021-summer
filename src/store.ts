import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import nominationReducer from "./slices/nominationSlice";

export default configureStore({
  reducer: {
    movie: movieReducer,
    nomination: nominationReducer,
  },
});
