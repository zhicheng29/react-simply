import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { ThemeStateType } from "@/redux/interface";

const themeState: ThemeStateType = {
  isDark: false,
  themeColor: "",
  language: null,
  isCollapsed: false,
  layout: "classic",
  beginAnimation: true
};

// 创建样式 stores
const themeSlice = createSlice({
  name: "theme",
  initialState: themeState,
  reducers: {
    setTheme<T extends keyof ThemeStateType>(
      state: ThemeStateType,
      { payload }: PayloadAction<{ key: T; value: ThemeStateType[T] }>
    ) {
      state[payload.key] = payload.value;
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
