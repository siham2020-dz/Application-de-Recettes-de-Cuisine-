import React, { useState } from 'react';
import axios from 'axios';
import "./AjouterRecette.module.css";

function AjouterRecette() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [type, setType] = useState('entrée'); // Alignez avec les valeurs du modèle
    const [message, setMessage] = useState('');
    const [recettes, setRecettes] = useState([]);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        const formData = new FormData();
        formData.append('title', title); // Alignez avec les noms du modèle
        formData.append('description', description);
        formData.append('image', image);
        formData.append('type', type); // Incluez correctement le type

        try {
            const response = await axios.post('http://localhost:5000/api/recettes', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setMessage('Recette ajoutée avec succès !');
            setRecettes([...recettes, response.data]);
            setTitle('');
            setDescription('');
            setImage(null);
            setType('entrée'); // Réinitialisez le type
        } catch (error) {
            console.error('Erreur :', error);
            setMessage('Erreur lors de l\'ajout de la recette.');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Ajouter une recette</h2>
                <div>
                    <label>Titre :</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description :</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Image :</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <div>
                    <label>Type :</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="entrée">Entrée</option>
                        <option value="plat">Plat</option>
                        <option value="dessert">Dessert</option>
                    </select>
                </div>
                <button type="submit">Ajouter</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AjouterRecette;

