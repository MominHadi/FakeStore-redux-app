
import React, { useState } from 'react';
import './App.css';
import { Header } from './containers/Header';
import { About } from './containers/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ProductListing } from './containers/ProductListing';
import { ProductDetails } from './containers/ProductDetails';
import { Form } from './containers/Form';


function App() {
 const[mode,setMode]=useState("light")

 const switchMode=()=>{
   if(mode="light"){setMode("dark")
  document.body.style.backgroundColor="#000B49"}
  else{setMode("light")
document.body.style.backgroundColor="white"}
 }
  return (
   <React.Fragment>
     {document.body.style.backgroundColor="#000B49"}
     <Router>
     <Header  mode={mode} switchMode={switchMode}/>
   
       <Routes>
     <Route path="/" exact element={<ProductListing/>}/>
     <Route path="/product/:productId" exact element={<ProductDetails/>}/>
     <Route path="/About" exact element={<About/>}/>
     <Route path="/UserLogin" exact element={<Form/>}/>
     
     </Routes>
     </Router>
   </React.Fragment>
  );
}

export default App;
