import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "@/store";

import App from "./App.tsx";

import "antd/dist/reset.css";
import "@/styles/reset.less";
import "@/assets/fonts/font.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
