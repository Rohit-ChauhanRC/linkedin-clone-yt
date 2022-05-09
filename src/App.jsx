import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/*  App Body*/}
      <div className="app__body">
        {/*  Sidebar*/}
        <Sidebar />
        {/*  Feed*/}
        <Feed />
        {/*  Widgets*/}
      </div>
    </div>
  );
}

export default App;
