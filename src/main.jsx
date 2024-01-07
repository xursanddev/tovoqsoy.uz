import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "halfmoon/css/halfmoon.min.css";
import "@fontsource/comfortaa/400.css";
import "halfmoon/css/cores/halfmoon.modern.css";


createRoot(document.getElementById("root"))
    .render(<StrictMode>
        <App/>
    </StrictMode>);