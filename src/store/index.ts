import { configureStore } from "@reduxjs/toolkit";

import useUserStore from "@/store/modules/user";

export const store = configureStore({
  reducer: {
    user: useUserStore
  }
});
