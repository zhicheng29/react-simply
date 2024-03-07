import { configureStore } from "@reduxjs/toolkit";
import useUserStore from "./modules/user";

export const store = configureStore({
  reducer: {
    user: useUserStore
  }
});
