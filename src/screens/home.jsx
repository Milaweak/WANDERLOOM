import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold mb-8">WANDERLOOM</h1>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">Itinéraires</h2>
        {/* Ajoutez ici vos cartes de jeux récents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Exemple de carte de jeu */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Nom du Jeu 1</h3>
            <p className="text-gray-700">Description du Jeu 1.</p>
            <Link
              to="/jeu1"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Jouer
            </Link>
          </div>

          {/* Exemple de carte de jeu */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Nom du Jeu 2</h3>
            <p className="text-gray-700">Description du Jeu 2.</p>
            <Link
              to="/jeu2"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Jouer
            </Link>
          </div>

          {/* Ajoutez plus de cartes de jeux ici */}
        </div>
        <Link
          to="/inscription"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {" "}
          S'inscrire{" "}
        </Link>
        <Link
          to="/Login"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {" "}
          login{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
