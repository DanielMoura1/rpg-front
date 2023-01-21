import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Login from "./Login.js";
import Cadastro from "./Cadastro.js";
import Selecao from "./selacao";
import "./style.css";
import JOGAR from "./jogar.js";
import Perfil from "./perfil.js";
export default  function App() {
 
  const [card,setCard] =useState([])
  const [deck,setDeck] =useState([])
  const localStorageTeste = JSON.parse(localStorage.getItem('token'))
  let token = localStorage.getItem('token') !== null ? localStorageTeste:""
  //updateToken()
  const [tok,setToken] =useState(token)
  const ad =[{a:"asd"}]
return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login setToken={setToken} />} />
      <Route path="/cadastro" element={<Cadastro setToken={setToken}/>} />
      <Route path="/selecao"  element={<Selecao  setCard={setCard} card={card} setDeck={setDeck} token={tok} deck={deck} />} />
      <Route path="/jogar" element={<JOGAR deck={deck} token={tok} setDeck={setDeck} />} />
      <Route path="/perfil" element={< Perfil token={tok}/>} />
    </Routes>
    </BrowserRouter>
  </div>
 
)
}