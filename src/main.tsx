import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { TanStackProvider } from "./plugins/TanStackQueryProvider";
import { Router } from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TanStackProvider>
        <Router />
      </TanStackProvider>
    </BrowserRouter>
  </React.StrictMode>
);
