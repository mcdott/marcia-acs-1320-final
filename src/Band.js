import React from "react";

const Band = ({ band }) => {
  // Use object destructuring to get the properties from the band object
  const { band_name, formed, origin, fans } = band;

  return (
    <div>
      <h3>{band_name}</h3>
      <p>Formed: {formed}</p>
      <p>{origin}</p>
      <p>Fans: {fans}</p>
    </div>
  );
};

export default Band;