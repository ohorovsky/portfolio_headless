import React from "react";
import { createRoot } from "react-dom/client";
import "./scss/App.scss";
import Router from "./components/Router";
import registerServiceWorker from "./registerServiceWorker";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Router />);
registerServiceWorker();

