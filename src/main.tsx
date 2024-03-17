// import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persist, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";

import "antd/dist/reset.css";
import "@/styles/reset.less";
import "@/assets/fonts/font.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persist}>
      {/*<React.StrictMode>*/}
      <App />
      {/*</React.StrictMode>*/}
    </PersistGate>
  </Provider>
);
