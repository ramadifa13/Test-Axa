import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Wrapper } from "./Components/Wrapper";
import { AppNavBar } from "./Components/AppNavBar";
import { Home } from "./Components/Home";

const App = () => {
  return (
    <Router>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:kategori" element={<Wrapper />} />
      </Routes>
    </Router>
  );
};

export default App;
