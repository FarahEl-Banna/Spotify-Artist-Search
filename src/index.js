import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import App from "./App";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import Albums from "./Pages/Albums";
import NotFound from "./Pages/NotFound";
import { ContextProvider } from "./Componenets/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="albums" element={<Albums />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
