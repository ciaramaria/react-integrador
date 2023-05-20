// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Cart, Footer, Hero, Navbar, Sales, Stories } from "./components";
import Render from "./components/Render";
import Rendericer from "./components/Rendericer";
import { heroapi, topratesales, popularsales, story } from "./data/data.js"
import Contacto from "./components/Contacto.jsx";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const App = () => {
  return (
    <Router>

    
    <Navbar/>
    <Cart/>
    <main className="flex flex-col gap-16 relative bg-zinc-200 text-white		">
      <Hero heroapi={heroapi}/>
      <Rendericer endpoint={popularsales}/>
      <Sales endpoint={popularsales} ifExists/>
      <Stories story={story}/>
      <Sales endpoint={topratesales}/>
      
    </main>
    <Switch>
          <Route path="/contacto" element={<Contacto/>} />
        </Switch>
    <Footer />
    </Router>

    
  )
}

export default App;