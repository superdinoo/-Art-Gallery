import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import style from "./index.module.scss";
import store from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
