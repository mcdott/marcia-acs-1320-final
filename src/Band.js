import React from "react";
import Like from "./Like";
import "./Band.css";

const Band = ({ band }) => {
  // Use object destructuring to get the properties from the band object
  const { band_name, formed, origin, fans, split, style } = band;

  const likesIfNotSplit = split === "-" ? <Like /> : <p></p>;

  return (
    <div className='band'>
      <h3>{band_name}</h3>
      <p>Origin: {origin}</p>
      <p>Fans: {fans}</p>
      <p>Formed: {formed}</p>
      <p>Split: {split}</p>
      <p>Style: {style}</p>
      {likesIfNotSplit}
    </div>
  );
};

export default Band;
