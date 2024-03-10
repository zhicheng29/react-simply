import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { ThemeStateType } from "@/store/interface/index";

const themeState: ThemeStateType = {
  isDark: false,
  themeColor: "",
  language: null
};

const useThemeSlice = createSlice({
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

const { setTheme } = useThemeSlice.actions;

export { setTheme };

export default useThemeSlice.reducer;
