import React from "react";
import Like from "./Like";
import "./Band.css";

const Band = ({ band }) => {
  // Use object destructuring to get the properties from the band object
  const { band_name, formed, origin, fans, split, style } = band;

  const likesIfNotSplit = split === "-" ? <Like /> : <p></p>;

  let fans_full_num = fans * 1000;

  const styleList = style
    .split(",")
    .map((style, band_name) => <li key={band_name}>{style}</li>);

  return (
    <div className='band'>
      <h3>{band_name}</h3>
      <p>Origin: {origin}</p>
      <p>Fans: {fans_full_num.toLocaleString()}</p>
      <p>Formed: {formed}</p>
      <p>Split: {split}</p>
      <p>Style:</p>
      <ul>{styleList}</ul>
      {likesIfNotSplit}
    </div>
  );
};

export default Band;
