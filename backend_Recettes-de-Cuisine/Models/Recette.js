const mongoose = require('mongoose');

const recetteSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Alignez avec le nom utilisé dans le frontend
    description: { type: String, required: true },
    image: { type: String }, // Chemin de l'image si besoin
    type: { type: String, enum: ['entrée', 'plat', 'dessert'], required: true }, // Type de recette
});

module.exports = mongoose.model('Recette', recetteSchema);
