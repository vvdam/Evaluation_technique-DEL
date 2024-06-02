import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
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
                <Link to="/signup">
                    <button
                        style={{ marginTop: 20 }}
                        className="btn btn-primary"
                    >
                        S'inscrire
                    </button>
                </Link>
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
        </div>
    );
}

export default Home;
