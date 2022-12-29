import React from "react";
import LG from "../../assets/lg.png";
import "./home.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <img src={LG} alt="Logo" className="logo" />
      <div className="w-full flex flex-col items-center space-y-3">
        <p className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro
          facilis repudiandae doloremque quo laborum vero officiis ullam,
          aliquid magni qui saepe pariatur quam, harum nemo eligendi. Repellat,
          repudiandae praesentium.
        </p>
        <div className="space-x-4">
          <Link to="/client">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-3 rounded">
              See all clients
            </button>
          </Link>
          <Link to="/list">
            <button className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-3 rounded">
              See all list
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
