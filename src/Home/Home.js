import React, { Fragment } from 'react';
import ville from '../png/ville.png';
import './Home.css';

function Home() {
    return (
        <Fragment>
            <div id="Home">
                <div id="home-title">
                    <h1>Binate Soualiho</h1>
                    <h2>Votre Chauffeur Privée</h2>
                </div>
                <div id="home-image">
                    <img src={ville} alt="ville" />
                </div>
            </div>
        </Fragment>
    )
}

export default Home
