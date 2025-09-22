import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ViewCounter from "./components/viewCounter/ViewCounter";

function App() {
  return (
    <div>
      <Main />
      <ViewCounter />
    </div>
  );
}

export default App;
