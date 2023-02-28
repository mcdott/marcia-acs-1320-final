import React from "react";
import band_data from "./metal.json";

const MetalMeta = () => {
  const numBands = band_data.length;

  return (
    <div>
      <h2>Metal Bands 🤘</h2>
      <p>Bands: {numBands}</p>
    </div>
  );
};

export default MetalMeta;
