import { useState } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header-container">
            <div className="logo">
                <img src="../../../public/logo.jpg" alt="Logo" />
            </div>
            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/toutes-les-recettes">Toutes les Recettes</Link></li>
                    <li><Link to="/ajouter">Ajouter une Recette</Link></li>
                    <li><a href="about.asp">Favoris</a></li>
                    <li><button className="connexion-button">Connexion</button></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Header;
