import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { GlobalStateType } from "@/stores/interface/index.ts";

const globalState: GlobalStateType = {
  isDark: false,
  themeColor: "",
  language: null,
  isCollapsed: false,
  layout: "classic",
  beginAnimation: true
};

// 创建样式 stores
const useGlobalSlice = createSlice({
  name: "global",
  initialState: globalState,
  reducers: {
    setGlobal<T extends keyof GlobalStateType>(
      state: GlobalStateType,
      { payload }: PayloadAction<{ key: T; value: GlobalStateType[T] }>
    ) {
      state[payload.key] = payload.value;
    }
  }
});

export const { setGlobal } = useGlobalSlice.actions;
export default useGlobalSlice.reducer;
