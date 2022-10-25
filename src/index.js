import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/theme.min.css";
import Index from "./components/Index";
import reportWebVitals from "./reportWebVitals";
import MarketPlace from "./components/Marketplace";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Index /> */}
    <MarketPlace />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
