const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/recettes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur de connexion MongoDB :', err));

module.exports = mongoose;
