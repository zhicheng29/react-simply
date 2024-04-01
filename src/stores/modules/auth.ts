import { createSlice } from "@reduxjs/toolkit";
import { AuthState, FlatMenuType } from "@/stores/interface";

import { getFlatMenuList } from "@/utils";

import type { PayloadAction } from "@reduxjs/toolkit";

interface PermissionState {
  authMenuList: AuthState["authMenuList"];
  flatMenuList: FlatMenuType;
}

const initialAuthState: PermissionState = {
  authMenuList: [],
  flatMenuList: []
};

// 权限模块
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
