import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                minWidth: "100vw",
            }}
        >
            <header
                style={{
                    background: "#343a40",
                    color: "#fff",
                    padding: "20px",
                }}
            >
                <div className="container">
                    <h1 className="font-weight-bold">Événement Technologie</h1>
                </div>
                <button style={{ marginTop: 20 }}>s'inscrire</button>
            </header>

            <main className="container my-5">
                <h2>Programme de l'événement 🚀</h2>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h3>Journée 1</h3>
                        <hr />
                        <ul>
                            <li>9:00 - Ouverture</li>
                            <li>
                                10:00 - Conférence sur l'intelligence
                                artificielle
                            </li>
                            <li>12:00 - Déjeuner</li>
                            <li>14:00 - Ateliers pratiques</li>
                            <li>17:00 - Cocktail de réseautage</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>Journée 2</h3>
                        <hr />
                        <ul>
                            <li>9:00 - Séminaire sur la cybersécurité</li>
                            <li>
                                11:00 - Présentation des dernières technologies
                            </li>
                            <li>13:00 - Pause déjeuner</li>
                            <li>
                                15:00 - Table ronde sur l'avenir de la
                                technologie
                            </li>
                            <li>17:00 - Clôture de l'événement</li>
                        </ul>
                    </div>
                </div>
            </main>
            <footer
                style={{
                    background: "#343a40",
                    color: "#fff",
                    padding: "20px",
                    position: "relative", // Changed from absolute to relative
                    width: "100%",
                    marginTop: "auto", // Ensures the footer is pushed to the bottom
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Contact</h3>
                            <p>Email: info@evenementtechnologie.com</p>
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
