import React from "react";
import API from "./apicalls";

import "./instagram.css";

const instagram = () => {
  return (
    <div className='instagram__container'>
      {/* <h1>Instagram</h1>
      <p>Bilder</p> */}
      <API />
    </div>
  );
};

export default instagram;
