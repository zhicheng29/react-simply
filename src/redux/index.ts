import { useDispatch as useReduxDisPatch, useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

import user from "@/redux/modules/user";
import auth from "@/redux/modules/auth";
import theme from "@/redux/modules/theme";
import tab from "@/redux/modules/tabs";

import type { Middleware } from "@reduxjs/toolkit";

// 使用 combineReducers 合并子模块
const reducer = combineReducers({ user, theme, auth, tab });

// persist 配置
const persistConfig = {
  key: "redux_state",
  storage,
  blacklist: ["auth"]
};

// 使用 persistReducer 包裹 reducer，以便在持久化时进行处理
const persistedReducer = persistReducer(persistConfig, reducer);

// 异步中间件
const middlewares: Middleware[] = [thunk];

// 创建所有 reducer 与 异步中间件
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares)
});

// 创建持久化 stores
export const persist = persistStore(store);

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 使用 useDispatch 和 useSelector
export const useDispatch = () => useReduxDisPatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootStateType> = useReduxSelector;

// 注意: gatState 与 useSelector 效果是一致的但是需要注意
// 1. gatState 获取的是整个 store 的状态，而 useSelector 只能获取指定模块的状态
// 2. gatState 获取的数据在组件内部无法触发重新渲染，而 useSelector 获取的数据在组件内部可以触发重新渲染
// 3. getState 通常是在组件外使用，而 useSelector 通常是在组件内部使用
