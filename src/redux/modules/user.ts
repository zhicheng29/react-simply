import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserStateType } from "@/redux/interface";

const userState: UserStateType = {
  token: "",
  userInfo: { name: "" }
};

// createSlice 创建子模板
const userSlice = createSlice({
  name: "user",
  initialState: userState, // 初始数据状态
  reducers: {
    // 设置 token
    setToken(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    // 设置用户基本信息
    setUserInfo<T extends keyof UserStateType["userInfo"]>(
      state: UserStateType,
      { payload }: PayloadAction<{ key: T; value: UserStateType["userInfo"][T] }>
    ) {
      state.userInfo[payload.key] = payload.value;
    }
  }
});

const { setUserInfo, setToken } = userSlice.actions;

// 导出创建 actions 的对象
export { setUserInfo, setToken };
// 导出 reducer 函数
export default userSlice.reducer;
