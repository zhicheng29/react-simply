// import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persist, store } from "@/stores";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";

import "antd/dist/reset.css";
import "@/assets/fonts/font.less";
import "@/assets/iconfont/iconfont.css";
import "@/styles/index.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persist}>
      {/*<React.StrictMode>*/}
      <App />
      {/*</React.StrictMode>*/}
    </PersistGate>
  </Provider>
);
