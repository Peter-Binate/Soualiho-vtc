import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Home/Home';
//import ZonesDeDeplacement from '../../ZonesDeDeplacement/ZonesDeDeplacement';
import './Navbar.css';

function Navbar() {
    
    // On initialise la valeur de l'icon burger
    const [click, setClick] = useState(false);
    // Si on clique sur l'icon burger la valeur de click = True
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <Fragment>
           <div class="container-grille">
                <nav className="navbar">

                    {/*LOGO*/}
                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                                <i className="fab fa-typo3" />
                        </Link>

                        {/*Icone du Menu burger (format mobile et tablette)*/}
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        
                        {/*Faire apparaitre le nav en format mobile lorsque l'on clique*/}
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                    <Link to='/zones-de-deplacement' className='nav-links' onClick={closeMobileMenu}>
                                        Zones de déplacement
                                    </Link>
                            </li>
                            <li className="nav-item">
                                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                        Services
                                    </Link>
                            </li>
                            <li className="nav-item">
                                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                        Contact
                                    </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main>
                    <Home/>
                </main>
                {/*<div id="zones-deplacement"> 
                    <ZonesDeDeplacement/>
                </div>*/}
                <div id="footer">
                    
                </div>
           </div>
        </Fragment>
    )
}

export default Navbar;
