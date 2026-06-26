import Navbar from "./components/Navbar";
import Card from "./components/Card"
import ProductCard from "./components/Amazon";
import products from "./prodcut"
import { useState } from "react";
import Form from "./components/Form";
import Comp from "./components/Comp";
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
const App=()=>{
  
  return(
    <>
    <Routes>
      <Route path="/form" element={<Form/>}/>
      <Route path="/" element={<Home/>}/>
  
    </Routes>
    </>
   )
  }
   export default App;