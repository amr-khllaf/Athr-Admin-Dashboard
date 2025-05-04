import React from "react";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-grids/styles/material.css";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./Contexts/ContextProvider.jsx";
import Footer from "./Components/Footer/Footer";
// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2XFhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5WdkRjXHtcc3BRQ2hcWkZ/"
);

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextProvider>
);
