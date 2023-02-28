import React from "react";
import band_data from "./metal.json";
import "./MetalMeta.css";

const MetalMeta = () => {
  const numBands = band_data.length;

  return (
    <div className='meta-data'>
      <h2>Metal Bands 🤘</h2>
      <p>Bands: {numBands}</p>
    </div>
  );
};

export default MetalMeta;
