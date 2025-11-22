import React from "react";
import ReactDOM from "react-dom/client";
import { TanStackProvider } from "./pluggins/TanStackQueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanStackProvider>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </TanStackProvider>
  </React.StrictMode>
);
