import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

// Je ne suis pas assez avancé dans la formation pour cette partie-là.
// Désolé, merci de m'envoyer des conseils.
// Je suis ouvert aux critiques.

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "http://test-technique.pexa4457.odns.fr/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "SuperSecretToken1234",
                    },
                    body: JSON.stringify({ name, email }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
            } else {
                const errorData = await response.json();
                setMessage(errorData.error);
            }
        } catch (error) {
            console.error(":c Une erreur s'est produite :", error);
            setMessage(
                "Une erreur s'est produite. Veuillez réessayer plus tard :D"
            );
        }
    };

    return (
        <div>
            <h1 className="text-center mb-4">Formulaire d'inscription</h1>
            <form
                onSubmit={handleSubmit}
                className="row justify-content-center"
            >
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Nom
                        </label>
                        <input
                            id="name"
                            className="form-control"
                            style={{ backgroundColor: "white" }}
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            id="email"
                            className="form-control"
                            style={{ backgroundColor: "white" }}
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        S'inscrire
                    </button>
                </div>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default Signup;
