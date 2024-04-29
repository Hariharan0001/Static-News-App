import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Navbar.css";
import "./index.css";
function Navbar({setCategory}) {
  const handleClick = (newCategory) => {
    setCategory(newCategory);
    console.log(newCategory);
  };

  return (
    <div id="Navbar" className="bg-black text-white p-4">
      <h1 style={{ color: "#B72727" }}>BB News</h1>
      <ul className="list-unstyled">
        <li onClick={() => handleClick("Top Stories")}>
          Top Stories
        </li>
        <li onClick={() => handleClick("World")}>
          
          Around the World
        </li>
        <li onClick={() => handleClick("Business")}>
          {" "}
          Business
        </li>
        <li onClick={() => handleClick("Health")}>
          {" "}
          Health
        </li>
        <li onClick={() => handleClick("Entertainment")}>
          Entertainment
        </li>
        <li onClick={() => handleClick("Sports")}>
          Sports
        </li>
        <li onClick={() => handleClick("Discussion")}>
          Discussion
        </li>
      </ul>
    </div>
  );
}

export default Navbar;