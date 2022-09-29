import { Link ,useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function OK(props){
    const {deck,fun,setCamp, setSelecionar,setNumero} = props
    const navigate = useNavigate();
    function a(){
        navigate("/")
    }
    function j(){
        console.log(deck[0])
    }
    const [cor,setCor] =useState('card')
    let num =0
    function MudarCor(){
        alert('MUDARCOR')
        setCor("blue")
    }
    function MudarNum(){
        alert('MUDARnum')
        //num=1
    }
    let nome=deck.nome
    let img=deck.img
    let vida=deck.vida
    function deletar(){
        nome=""
        img=""
        vida=""
    }

return( <>
   
    <div className={cor} onClick={() =>fun(nome,MudarCor,deletar,MudarNum,setCamp,setSelecionar,setNumero,deck.lote)}>
        <img className="imgCard" src={img}></img>
        <p className="nome">{nome}</p>
        <p>{vida}</p>
        <p>{deck.ataque}</p>
    </div>
</>)
}