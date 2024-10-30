import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsList from "./components/NewList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<NewsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
