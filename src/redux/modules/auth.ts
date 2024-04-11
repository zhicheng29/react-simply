import { createSlice } from "@reduxjs/toolkit";

import { getFlatMenuList } from "@/utils";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "@/redux/interface";
import type { RouteObjectType } from "@/routers/interface";

interface PermissionState {
  authMenuList: AuthState["authMenuList"];
  flatMenuList: RouteObjectType[];
}

const initialAuthState: PermissionState = {
  authMenuList: [],
  flatMenuList: []
};

// 权限模块
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setAuthMenuList(state, { payload }: PayloadAction<AuthState["authMenuList"]>) {
      state.authMenuList = payload;
      state.flatMenuList = getFlatMenuList(payload);
    },
    clearAuthList(state) {
      state.authMenuList = [];
      state.flatMenuList = [];
    }
  }
});

export const { setAuthMenuList, clearAuthList } = authSlice.actions;
export default authSlice.reducer;
