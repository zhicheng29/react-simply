import { createSlice } from "@reduxjs/toolkit";
import type { ThemeStateType } from "../interface/index";
import type { PayloadAction } from "@reduxjs/toolkit";

const themeState: ThemeStateType = {
  isDark: false,
  themeColor: "",
  language: null
};

const useThemeStore = createSlice({
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

const { setTheme } = useThemeStore.actions;

export { setTheme };

export default useThemeStore.reducer;
