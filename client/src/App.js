import React from "react";
import {
  Login,
  Verify,
  Aadhaar,
  VotingPanel,
  Success,
  Missing,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="aadhaar" element={<Aadhaar />} />
          <Route path="verify" element={<Verify />} />
          <Route path="voting_panel" element={<VotingPanel />} />
          <Route path="success" element={<Success />} />
          <Route exact path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
