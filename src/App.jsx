// import React from "react";
import { Cart, Footer, Hero, Navbar, Sales, Stories } from "./components";
import Render from "./components/Render";
import Rendericer from "./components/Rendericer";
import { heroapi, topratesales, popularsales, story, footerAPI } from "./data/data.js"

const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main className="flex flex-col gap-16 relative bg-zinc-200 text-white		">
      <Hero heroapi={heroapi}/>
      <Rendericer endpoint={popularsales}/>
      <Sales endpoint={popularsales} ifExists/>
      <Stories story={story}/>
      <Sales endpoint={topratesales}/>
    </main>
    <Footer footerAPI={footerAPI} />
    </>
    
  )
}

export default App;