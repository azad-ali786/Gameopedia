import React, { useEffect } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";
import axios from "axios";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
