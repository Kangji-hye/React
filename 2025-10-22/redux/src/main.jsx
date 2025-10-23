import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//추가할 코드
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다 */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);