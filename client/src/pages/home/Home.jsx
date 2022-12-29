import React from "react";
import LG from "../../assets/lg.png";
import "./home.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <img src={LG} alt="Logo" className="logo" />
      <Link to="/client">
        <button className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </Link>
      <p className="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro
        facilis repudiandae doloremque quo laborum vero officiis ullam, aliquid
        magni qui saepe pariatur quam, harum nemo eligendi. Repellat,
        repudiandae praesentium.
      </p>
    </div>
  );
}

export default HomePage;
