import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../Home/Home";
import Works from "../Works/Works";
import Project from "../Project/Project";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Website from "../Website/Website";

  
function Router() {
    
  return (
      <>
      <BrowserRouter>
      <Routes >
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Works" element={<Works/>}/>
        <Route exact path="/Project" element={<Project/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/Website" element={<Website/>}/>


      </Routes>
      </BrowserRouter>
      </>
  );
}
  
export default Router;