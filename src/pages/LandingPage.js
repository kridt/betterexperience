import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <Navigation />

      <div
        style={{
          display: "flex",
          backgroundColor: "#3C3E42",
          padding: "2rem",
          color: "white",
        }}
      >
        <div
          style={{
            flex: "1",
            borderRadius: "15px",
            backgroundColor: "#707070",
            marginRight: "1rem",
            padding: "1rem",
          }}
        >
          <div
            style={{
              lineHeight: ".5",
              textAlign: "center",
            }}
          >
            <h2>Better Experience</h2>
            <h4>The way to serve!</h4>
          </div>
          <div
            style={{
              maxWidth: "300px",
              margin: "auto",
            }}
          >
            <p>
              <strong>
                Velkommen til Better Experience, dit netværksparadis online! Vi
                er stolte af at præsentere dig for en verden med unikke
                applikationer, som kan forvandle dit liv til noget helt
                ekstraordinært.
              </strong>
            </p>
            <p>
              <strong>
                Be er verdens førende online markedsføringsplatform, hvor du kun
                finder dedikerede personer til at give dig den bedste oplevelse
                og start på din rejse!
              </strong>
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h2>Sociale Medier</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/wearebeofficial_"
                >
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src="./insta.png"
                    alt="facebook"
                  />
                </Link>
              </div>
              <div>
                <Link target="_blank" to="https://discord.gg/ZD8VxBPpvA">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src="./discord.webp"
                    alt="discord"
                  />
                </Link>
              </div>
              <div>
                <Link target="_blank" to="https://network23.team/">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src="./n23.webp"
                    alt="n23"
                  />
                </Link>
              </div>
              <div>
                <Link target="_blank" to="https://be.club">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src="./be.png"
                    alt="be"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: "3",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",

              borderRadius: "15px",
            }}
            src="./map-human-brain.jpg"
            alt="brain"
          />
        </div>
      </div>
    </div>
  );
}
