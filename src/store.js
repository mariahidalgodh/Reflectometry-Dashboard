import { configureStore } from "@reduxjs/toolkit"
import filtersReducer from "./Filters/filtersSlide"

export default configureStore({
  reducer: {
    query: filtersReducer
  }
});
