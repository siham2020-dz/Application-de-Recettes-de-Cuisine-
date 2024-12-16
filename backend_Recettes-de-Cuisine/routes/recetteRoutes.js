const express = require('express');
const multer = require('multer');
const Recette = require('../models/Recette');

const router = express.Router();

// Configuration de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Obtenir toutes les recettes ou filtrer par type
router.get('/', async (req, res) => {
  const { type } = req.query; // Récupération du type depuis les paramètres de requête

  try {
    let recettes;
    if (type) {
      recettes = await Recette.find({ type }); // Filtrer par type si un type est fourni
    } else {
      recettes = await Recette.find(); // Sinon, récupérer toutes les recettes
    }
    res.json(recettes);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des recettes' });
  }
});

// Ajouter une nouvelle recette
router.post('/', upload.single('image'), async (req, res) => {
  const { title, description, type } = req.body; // Assurez-vous que ces noms correspondent à ceux dans le frontend
  console.log(req.body); 
  const image = req.file ? req.file.path : null;
  console.log(req.file);
  try {
    const nouvelleRecette = new Recette({ title, description, type, image });
    await nouvelleRecette.save();
    res.status(201).json(nouvelleRecette);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la création de la recette.', error: err.message });
  }
});


// Obtenir une recette par ID
router.get('/:id', async (req, res) => {
  try {
    const recette = await Recette.findById(req.params.id);
    if (!recette) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.json(recette);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la recette' });
  }
});

module.exports = router;
