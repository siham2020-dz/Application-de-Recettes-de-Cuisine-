import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RecetteDetails.module.css";
import axios from "axios";

function RecetteDetails() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [recette, setRecette] = useState(null);
  const [rating, setRating] = useState(0); // État pour la note (étoiles)
  const [comment, setComment] = useState(""); // État pour le commentaire

  useEffect(() => {
    const fetchRecette = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://localhost:5000/api/recettes/${id}`);
          setRecette(response.data); // Met à jour les détails de la recette
        } catch (err) {
          console.error("Erreur lors de la récupération des détails :", err);
        }
      }
    };

    fetchRecette(); // Appelle l'API pour récupérer les détails de la recette
  }, [id]);

  if (!recette) return <h2>Chargement...</h2>;

  // Fonction pour découper la description en étapes
  const splitDescription = (description) => {
    return description.split(/(Étape [0-9]+)/g).map((part, index) => {
      if (part.startsWith("Étape")) {
        return <p key={index} className="etape-title">{part}</p>;
      } else {
        return <p key={index}>{part}</p>;
      }
    });
  };

  // Gérer le changement de note (étoiles)
  const handleRatingChange = (ratingValue) => {
    console.log(`Rating clicked: ${ratingValue}`);  // Debug
    setRating(ratingValue);
};

  // Gérer le changement du commentaire
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Fonction pour soumettre l'avis
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && comment) {
      // Enregistrer l'avis dans la base de données
      axios.post(`http://localhost:5000/api/recettes/${id}/avis`, { rating, comment })
        .then(response => {
          alert("Votre avis a été enregistré !");
          setRating(0);
          setComment("");
        })
        .catch(error => {
          console.error("Erreur lors de l'enregistrement de l'avis:", error);
        });
    } else {
      alert("Veuillez donner une note et un commentaire.");
    }
  };

  return (
    <div className="recette-details-container">
      <div className="frame-container">
        <h2>{recette.title}</h2>
        <div className="recette-content">
          <div className="recette-description">
            {splitDescription(recette.description)}
          </div>
          <img src={`http://localhost:5000/${recette.image}`} alt={recette.title} />
        </div>

        {/* Section pour les avis */}
        <div className="avis-section">
          <h3>Laissez votre avis</h3>
          <form onSubmit={handleSubmit}>
            <div className="rating-container">
              <span
                onClick={() => handleRatingChange(1)}
                className={rating >= 1 ? "star selected" : "star"}
              >
                ★
              </span>
              <span
                onClick={() => handleRatingChange(2)}
                className={rating >= 2 ? "star selected" : "star"}
              >
                ★
              </span>
              <span
                onClick={() => handleRatingChange(3)}
                className={rating >= 3 ? "star selected" : "star"}
              >
                ★
              </span>
              <span
                onClick={() => handleRatingChange(4)}
                className={rating >= 4 ? "star selected" : "star"}
              >
                ★
              </span>
              <span
                onClick={() => handleRatingChange(5)}
                className={rating >= 5 ? "star selected" : "star"}
              >
                ★
              </span>
            </div>

            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Donnez votre avis ici"
              rows="4"
              className="comment-textarea"
            />

            <button type="submit" className="submit-btn1">Soumettre</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecetteDetails;
