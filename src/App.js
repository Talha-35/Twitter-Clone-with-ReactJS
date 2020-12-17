import React from "react";
import "./App.css";
// import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <h1>deneme</h1>
      {/* <Feed /> */}
      <Widgets />
    </div>
  );
}

export default App;