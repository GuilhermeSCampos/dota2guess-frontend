import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DotaProvider } from "./context/Provider.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DotaProvider>
    <App />
  </DotaProvider>
);
