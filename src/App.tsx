import LayoutPage from "components/LayoutPage/LayoutPage";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <LayoutPage />
    </BrowserRouter>
  );
};

export default App;
