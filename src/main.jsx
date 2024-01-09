import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./locales/i18n.js";
import "halfmoon/css/halfmoon.min.css";
import "@fontsource/comfortaa/400.css";
import "@fontsource/comfortaa/500.css";
import "@fontsource/comfortaa/700.css";
import '@fontsource/laila/600.css';
import '@fontsource/laila/700.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/spectral/600.css';
import "@fontsource/roboto/400.css";
import "./styles/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
    <App/>
);