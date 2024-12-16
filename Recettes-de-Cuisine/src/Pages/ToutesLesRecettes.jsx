import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ToutesLesRecettes.css"; // Assurez-vous de définir ce fichier CSS

function ToutesLesRecettes() {
  const [recettes, setRecettes] = useState([]);

  // Récupérer toutes les recettes depuis l'API
  useEffect(() => {
    const fetchRecettes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/recettes');
        const data = await response.json();
        setRecettes(data); // Met à jour l'état avec les recettes récupérées
      } catch (error) {
        console.error('Erreur de récupération des recettes:', error);
      }
    };

    fetchRecettes();
  }, []);

  return (
    <div className="ListeRecettes-container">
      <h2>Toutes les Recettes</h2>
      <div className="ListeRecettes-list">
        {recettes.length === 0 ? (
          <p>Aucune recette trouvée.</p>
        ) : (
          recettes.map((recette) => (
            <div className="ListeRecettes-item" key={recette._id}>
              <Link to={`/recette/${recette._id}`} className="Recettes-link">
                <div className="ListeRecettes-image-container">
                  <img
                    src={`http://localhost:5000/${recette.image}`}
                    alt={recette.title}
                  />
                  <h3 className="ListeRecettes-title">{recette.title}</h3>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ToutesLesRecettes;
