import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { Toaster } from "react-hot-toast";

const renderElement = document.getElementById("root");
const root = ReactDOM.createRoot(renderElement!);
root.render(
    <React.StrictMode>
        <Toaster />
        <App />
    </React.StrictMode>,
);
