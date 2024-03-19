import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "@/stores/interface";

import { getFlatMenuList } from "@/utils";

import type { PayloadAction } from "@reduxjs/toolkit";

const initialAuthState: AuthState = {
  authMenuList: [],
  flatMenuList: []
};

// 菜单模块
const useAuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setAuthMenuList(state, { payload }: PayloadAction<AuthState["authMenuList"]>) {
      state.authMenuList = payload;
      state.flatMenuList = getFlatMenuList(payload);
    }
  }
});

export const { setAuthMenuList } = useAuthSlice.actions;
export default useAuthSlice.reducer;
