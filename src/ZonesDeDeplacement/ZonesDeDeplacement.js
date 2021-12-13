import React, { Fragment } from 'react';
import './Zones_de_deplacement.css';
import hotel from '../png/hotel.jpg';

function ZonesDeDeplacement() {
    return (
        <Fragment> 
            <div id="zones-deplacement"> 
                <h2>Zones de déplacement</h2> 
                <hr />
                <div id="lieux">
                    <div className="lieu">
                        <img src={hotel} className="zones" alt="hotel" />
                        <h3>Hotel</h3>
                    </div>    
                    <div className="lieu">
                        <img src={hotel} className="zones" alt="hotel" />
                        <h3>Hotel</h3>
                    </div> 
                    <div className="lieu">
                        <img src={hotel} className="zones" alt="hotel" />
                        <h3>Hotel</h3>
                    </div>    
                    <div className="lieu">
                        <img src={hotel} className="zones" alt="hotel" />
                        <h3>Hotel</h3>
                    </div> 
                </div>
            </div> 
        </Fragment>
    )
}

export default ZonesDeDeplacement
