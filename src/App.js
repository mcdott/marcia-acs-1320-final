import React from "react";
import Heading from "./Heading";
import "./App.css";
import MetalMeta from "./MetalMeta";
import Band from "./Band";
import band_data from "./metal.json";

function App() {
  const bands = band_data.map((band) => (
    <Band key={band.band_name} band={band} />
  ));

  return (
    <div className='App'>
      <Heading />
      <MetalMeta />
      <div className='bands'>{bands}</div>
    </div>
  );
}

export default App;
