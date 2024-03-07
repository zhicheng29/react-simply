import RouterProvider from "@/routers/index";
import { Provider } from "react-redux";

import store from "@/store";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider />
      </Provider>
    </>
  );
};
export default App;
