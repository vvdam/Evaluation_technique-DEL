import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Je découvre Bootstrap et je suis extrêmement surpris de sa facilité de prise en main. Je ne l'avais jamais utilisé par le passé et je ne suis pas déçu.

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Outlet />

            <footer
                style={{
                    background: "#343a40",
                    color: "#fff",
                    padding: "20px",
                    position: "absolute",
                    width: "100VW",
                    bottom: 0,
                    left: 0,
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Contact</h3>
                            <p>Email: maaalouladam@gmail.com</p>
                            <p>Téléphone: +1234567890</p>
                        </div>
                        <div className="col-md-6">
                            <h3>Liens utiles</h3>
                            <ul>
                                <li>
                                    <a href="#">Politique de confidentialité</a>
                                </li>
                                <li>
                                    <a href="#">Conditions d'utilisation</a>
                                </li>
                                <li>
                                    <a href="#">Mentions légales</a>
                                </li>
                                <li>
                                    <a href="https://github.com/vvdam">
                                        github
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
