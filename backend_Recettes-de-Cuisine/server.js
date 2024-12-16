const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db'); 
const recetteRoutes = require('./routes/recetteRoutes'); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/uploads', express.static('uploads'));


app.use('/api/recettes', recetteRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
