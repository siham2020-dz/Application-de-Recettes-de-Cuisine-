import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Recettes.css";

function Recettes() {
  const [recettes, setRecettes] = useState([]);
  const [filteredRecettes, setFilteredRecettes] = useState([]);
  const [type, setType] = useState("all");

  // Récupération des recettes depuis l'API
  useEffect(() => {
    const fetchRecettes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/recettes");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des recettes.");
        }
        const data = await response.json();
        setRecettes(data);
        setFilteredRecettes(data); // Initialement, afficher toutes les recettes
      } catch (error) {
        console.error("Erreur de récupération des recettes:", error);
      }
    };

    fetchRecettes();
  }, []);

  // Gestion du filtre par type
  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);

    if (selectedType === "all") {
      setFilteredRecettes(recettes); // Afficher toutes les recettes
    } else {
      const filtered = recettes.filter(
        (recette) => recette.type && recette.type === selectedType
      );
      setFilteredRecettes(filtered);
    }
  };

  return (
    <div className="Recettes-container">
      <div className="filter-container">
        <label htmlFor="type-filter">Filtrer par type :</label>
        <select id="type-filter" value={type} onChange={handleTypeChange}>
          <option value="all">Tous</option>
          <option value="entrée">Entrée</option>
          <option value="plat">Plat</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <div className="Recettes-grid">
        {filteredRecettes.length > 0 ? (
          filteredRecettes.map((recette) => (
            <div className="Recettes-item" key={recette._id}>
              <Link to={`/recette/${recette._id.toString()}`} className="Recettes-link">
                <div className="Recettes-image-container">
                  {recette.image ? (
                    <img
                      src={`http://localhost:5000/${recette.image}`}
                      alt={recette.title}
                    />
                  ) : (
                    <div className="Recettes-placeholder">
                      Image non disponible
                    </div>
                  )}
                  <h3 className="Recettes-title">{recette.title}</h3>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Aucune recette trouvée pour ce type.</p>
        )}
      </div>
    </div>
  );
}

export default Recettes;
