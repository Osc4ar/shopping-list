import React from "react";
import "./App.css";
import Checklist from "./components/Checklist";
import { TotalContextProvider } from "./utils/state/TotalContext";

function App() {
  return (
    <div className="App">
      <TotalContextProvider>
        <Checklist />
      </TotalContextProvider>
    </div>
  );
}

export default App;
