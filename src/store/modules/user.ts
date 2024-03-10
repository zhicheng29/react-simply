import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserStateType } from "@/store/interface/index";

const userState: UserStateType = {
  token: "",
  userInfo: { name: "Simply" }
};

// createSlice 创建子模板
const useUserSlice = createSlice({
  name: "user",
  initialState: userState, // 初始数据状态
  reducers: {
    // 设置 token
    setToken(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    // 设置用户基本信息
    setUserInfo(state, { payload }: PayloadAction<string>) {
      state.userInfo.name = payload;
    }
  }
});

const { setUserInfo, setToken } = useUserSlice.actions;

// 导出创建 actions 的对象
export { setUserInfo, setToken };
// 导出 reducer 函数
export default useUserSlice.reducer;
