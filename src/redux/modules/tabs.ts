import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { TabPropType } from "../interface";

const initialTabsState: TabPropType[] = [];

const tabSlice = createSlice({
  name: "tabs",
  initialState: initialTabsState,
  reducers: {
    setTabsList(_state, { payload }: PayloadAction<TabPropType[]>) {
      return payload;
    },
    addTabItem(state, { payload }: PayloadAction<TabPropType>) {
      if (state.every(item => item.path !== payload.path)) {
        state.push(payload);
      }
    },
    deteleTabItem(state, { payload }: PayloadAction<TabPropType>) {
      return state.filter(item => item.path !== payload.path);
    }
  }
});

export const { setTabsList, addTabItem, deteleTabItem } = tabSlice.actions;
export default tabSlice.reducer;
