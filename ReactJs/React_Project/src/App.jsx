import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="container">
      <UserCard name="Pramod Nishad" />
      <UserCard name="Vikrant " />
      <UserCard name="Sagar" />
    </div>
  );
}

export default App;
