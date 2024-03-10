import { configureStore } from "@reduxjs/toolkit";

import useUserReducer from "@/store/modules/user";
import useThemeSlice from "@/store/modules/theme";

// 创建根 store 与子模块
const store = configureStore({
  reducer: {
    user: useUserReducer,
    theme: useThemeSlice
  }
});

export type RootStateType = ReturnType<typeof store.getState>;

export default store;
