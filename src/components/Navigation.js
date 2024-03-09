import React from "react";
import { Link, NavLink } from "react-router-dom";

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
        <h1
          style={{
            textAlign: "center",
            color: "white",
            textShadow: "2px 2px 4px #000000",
            fontSize: "3rem",
            textDecoration: "underline",
          }}
        >
          Better Experience
        </h1>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
          }}
        >
          <li>
            <NavLink className={"navLink"} to="/">
              Startside
            </NavLink>
          </li>
          <li>
            <NavLink className={"navLink"} to="/starter-pakke">
              Starter Pakke
            </NavLink>
          </li>
          <li>
            <NavLink className={"navLink"} to="/trading">
              Trading
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
