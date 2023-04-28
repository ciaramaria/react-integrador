// import React from "react";
import { Hero, Sales } from "./components";
import { heroapi, topratesales, popularsales } from "./data/data.js"

const App = () => {
  return (
    <>
    <main>
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales} />
      <Sales endpoint={topratesales}/>
    </main>
    </>
    
  )
}

export default App;