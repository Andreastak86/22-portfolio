import axios from "axios";
import React, { useState } from "react";
import "./ApiCall.css"; // Import your CSS file

const baseURL = "https://api.chucknorris.io/jokes/random";

export default function ApiCall() {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getJoke = () => {
        setLoading(true);
        axios
            .get(baseURL)
            .then((response) => {
                setJoke(response.data.value);
                setError(null);
            })
            .catch((error) => {
                setJoke(null);
                setError("Error fetching Chuck Norris joke");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className='api-call-container'>
            <h5>Hva med en daglig dose Chuck Norris?</h5>
            <h2>Trykk på knappen</h2>
            {loading && <p>Loading...</p>}
            {error && <p className='error-message'>{error}</p>}
            {joke && <h1 className='line_up'>{joke}</h1>}
            <button className='btn btn-primary' onClick={getJoke}>
                Gi meg en Norris
            </button>
        </div>
    );
}
