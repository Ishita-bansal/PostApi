import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postapi from "../Pages/postapi";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Postapi />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
