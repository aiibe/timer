import { createRoot } from "react-dom/client";
import "./scss/style.scss";

import App from "./com/App";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
