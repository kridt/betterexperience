import React from "react";
import Navigation from "../components/Navigation";

export default function LandingPage() {
  return (
    <div>
      <Navigation />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <main>
          <h2>Better Experience</h2>
          <p>
            Her kan du lære om trading og investering. Vi har en gratis
            starterpakke som du kan læse mere om.
          </p>
        </main>
        <aside>
          <img src="./map-human-brain.jpg" alt="brain" />
        </aside>
      </div>
    </div>
  );
}
