import { useDispatch as useReduxDisPatch, useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist"; // 持久化
import storage from "redux-persist/lib/storage"; // 存储
import { thunk } from "redux-thunk"; // 异步

import user from "@/store/modules/user";
import theme from "@/store/modules/theme";

import type { Middleware } from "@reduxjs/toolkit";

// persist 配置
const persistConfig = {
  key: "redux_state",
  storage
};

// 使用 combineReducers 合并子模块
const reducer = combineReducers({ user, theme });

// 使用 persistReducer 包裹 reducer，以便在持久化时进行处理
const persistedReducer = persistReducer(persistConfig, reducer);

// 异步中间件
const middlewares: Middleware[] = [thunk];

// 创建所有 reducer 与 异步中间件
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares)
});

// 创建持久化 store
export const persist = persistStore(store);

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 使用 useDispatch 和 useSelector
export const useDispatch = () => useReduxDisPatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootStateType> = useReduxSelector;
