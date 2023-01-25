import React from "react";
import { AuthProvider } from "./context/AuthProvider";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
        <>kkkk</>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
</React.StrictMode>,
);
