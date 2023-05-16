// import React from "react";
import { Cart, Footer, Hero, Navbar, Sales, Stories } from "./components";
import { heroapi, topratesales, popularsales, story, footerAPI } from "./data/data.js"

const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main className="flex flex-col gap-16 relative bg-indigo-200		">
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExists/>
      <Sales endpoint={topratesales}/>
      <Stories story={story}/>
    </main>
    <Footer footerAPI={footerAPI} />
    </>
    
  )
}

export default App;