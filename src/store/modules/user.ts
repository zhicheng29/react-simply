import { createSlice } from "@reduxjs/toolkit";
import { UserStateType } from "@/store/interface/index";

const userState: UserStateType = {
  token: "",
  userInfo: { name: "Simply" }
};

// createSlice 创建一个模板
const useUserStore = createSlice({
  name: "user",
  initialState: userState, // 初始数据状态
  reducers: {
    // 设置用户名
    setUserName(state, name) {
      state.userInfo.name = name.payload;
    }
  }
});

const { setUserName } = useUserStore.actions;

// 导出创建 actions 的对象
export { setUserName };
// 导出 reducer 函数
export default useUserStore.reducer;
