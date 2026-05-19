import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./main.css";

import TransactionProvider from "./context/TransactionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </StrictMode>
);