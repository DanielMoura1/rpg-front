import { Link ,useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function OK(props){
    const {deck,fun,setCamp, setSelecionar,setNumero,n} = props
    const navigate = useNavigate();
    function a(){
        navigate("/")
    }
    const [chave,setChave] =useState(true)
    function j(){
        console.log(deck[0])
    }
    const [cor,setCor] =useState('card')
    let num =0
    function MudarCor(){
       
        setCor("blue")
    }
    function MudarNum(){
       
        //num=1
    }
    let nome=deck.nome
    let img=deck.foto
    let vida=deck.vida
    function deletar(){
        nome=""
        img=""
        vida=""
    }

return( <>
   
    <div className={cor} onClick={() =>fun(nome,MudarCor,deletar,MudarNum,setCamp,setSelecionar,setNumero,n,chave,setChave)}>
        <img className="imgCard" src={img}></img>
        <p className="nome">{nome}</p>
        <p> Vida: {vida}</p>
        <p>  {deck.poder >= 0 ? `Ataque :${deck.poder}`:`Habilidade: cura ${deck.poder*-1}`}</p>
    </div>
</>)
}