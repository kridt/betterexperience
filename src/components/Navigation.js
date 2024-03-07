import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div
      style={{
        display: "grid",
        grid: "1fr / 1fr auto",
      }}
    >
      <div
        style={{
          gridArea: "1/1/3/3",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="/navbackground.webp"
          alt="IG Logo"
        />
      </div>
      <nav style={{ gridArea: "2/1/3/3", zIndex: "99" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/">Startside</Link>
          </li>
          <li>
            <Link to="/starter-pakke">Starter Pakke</Link>
          </li>
          <li>
            <Link to="/trading">Trading</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
