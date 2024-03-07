import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "@/store/interface/index";

const userStaet: UserState = {
  token: "",
  userInfo: { name: "Symbol" }
};

const useUserStore = createSlice({
  name: "user",
  initialState: userStaet,
  reducers: {
    setName(state, action) {
      state.userInfo.name = action.payload;
    }
  }
});

export default useUserStore.reducer;
