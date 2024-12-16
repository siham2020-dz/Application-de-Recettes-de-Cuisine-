import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Chef from './Components/Chefs/Chef';
import Recette from './Components/Recettes/Recettes';
import RecetteDetails from './Pages/RecetteDetails';
import AjouterRecette from './Pages/AjouterRecette';
import ToutesLesRecettes from './Pages/ToutesLesRecettes';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Header : s'affiche sur toutes les pages */}
      <Header />

        {/* Routes */}
        <Routes>
          {/* Route principale : Affichage de la bannière, chefs et recettes */}
          <Route
            path="/"
            element={
              <>
                <div className="text-App">
                  <h1>Découvrez de Délicieuses Recettes avec <span>Sisila</span> !</h1>
                </div>
                <Banner /> {/* Bannière uniquement sur la page d'accueil */}
                {/*<Chef /> */}  {/* Chefs uniquement sur la page d'accueil */}
                <Recette /> {/* Recettes uniquement sur la page d'accueil */}
              </>
            }
          />

          {/* Page des détails de la recette */}
          <Route path="/recette/:id" element={<RecetteDetails />} />
          {/* Route pour afficher toutes les recettes */}
          <Route path="/toutes-les-recettes" element={<ToutesLesRecettes />} />
          
          {/* Route pour la page d'ajout */}
          <Route path="/ajouter" element={<AjouterRecette />} />
          
        </Routes>

        {/* Footer : s'affiche sur toutes les pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
