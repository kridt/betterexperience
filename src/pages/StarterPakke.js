import React from "react";
import Navigation from "../components/Navigation";

export default function StarterPakke() {
  return (
    <div>
      <Navigation />
      <h1>Starter Pakke</h1>
      <div
        style={{
          width: "100%",
          backgroundColor: "lightgrey",
          height: "100vh",
        }}
      ></div>
    </div>
  );
}
