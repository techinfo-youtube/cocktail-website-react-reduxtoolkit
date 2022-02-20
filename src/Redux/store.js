import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./features/cocktailSlice";

export default configureStore({
  reducer: {
    app: cocktailSlice,
  },
});
