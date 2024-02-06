import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold mb-8">WANDERLOOM</h1>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">Itinéraires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"></div>
        <Link
          to="/inscription"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          S'inscrire
        </Link>
        <Link
          to="/Login"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          login
        </Link>
        <Link
          to="/favoris"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {" "}
          Mes favoris{" "}
        </Link>
        <Link
          to="/MapPage"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {" "}
          map
        </Link>
        <Link
          to="/itinaryForm"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {" "}
          itinaryForm
        </Link>
      </div>
    </div>
  );
};

export default Home;
