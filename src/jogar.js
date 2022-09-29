import { Link ,useNavigate } from "react-router-dom";
import TESTE1 from "./TESTE1"
import TESTE2 from "./TESTE2"
import { useState, useEffect } from 'react';
export default function JOGAR(props){
    const acaoDoTurno={idLote1:1,idINIMIGO:0}
    const {deck,setDeck} = props
    const navigate = useNavigate();
    const [nome,setNome] =useState("lote1")
    const lotess =[{name:nome,img:'',ataque:0,vida:0},{name:'lote 2',img:'',ataque:0,vida:0},{name:"lote 3",img:'',ataque:0,vida:0},{name:'lote 4',img:'',ataque:0,vida:0},{name:'lote 5',img:'',ataque:0,vida:0}]
    const [lotes,setLotes] =useState(lotess)
    const [selecionar,setSelecionar] =useState("")
    const [camp,setCamp] =useState(false)
    const [numero,setNumero] =useState(-1)
    function a(){
        navigate("/")
    }
    function j(){
        console.log(camp)
    }
    function colarCardCampoDeBatalha(nome,cor,deletar,num,setCamp,setSelecionar,setNumero,n){
        if(camp ===false){
            alert('OIOI')
            setSelecionar(nome)
            alert('OIOI2')
            setCamp(true)
            cor()
            num()
            alert('OIOI2')
            setCamp(true)
            setNumero(n)
        }
    }
    function colocar1(n){
        if(camp==true){
            lotes[n].name =selecionar
            lotes[n].img =deck[numero].img
            lotes[n].vida =deck[numero].vida
            lotes[n].ataque =deck[numero].ataque
            console.log(lotes[n])
            alert('console')
            setLotes(lotes)
            setNome(selecionar)
          
            deck[numero].nome="mudeiNome"
            deck[numero].img="mudeiNome"
            deck[numero].vida=""
            deck[numero].ataque=''
            //setDeck(...deck[numero])
            alert('console1')
           
        }
    }
    
    const aat=[1]
return( <>

    <div className="card" onClick={() =>colocar1(0)}>
        <img className="imgCard" src={lotes[0].img}></img>
        <p className="nome">{lotes[0].name}</p>
        <p>ataque: {50}</p>
        <p>vida: {305}</p>
    </div>
   
    <p onClick={j()} className="cor"> ok ok</p>
    <p onClick={()=> a()}>------- pagina ------</p>
    <div className="tabuleiro">
    <div className="card" onClick={() =>colocar1(0)}>
        <img className="imgCard" src={lotes[0].img}></img>
        <p className="nome">{lotes[0].name}</p>
        <p>ataque: {lotes[0].ataque}</p>
        <p>vida: {lotes[0].vida}</p>
    </div>
    <div className="card" onClick={() =>colocar1(1)}>
        <img className="imgCard" src={lotes[1].img}></img>
        <p className="nome">{lotes[1].name}</p>
        <p>ataque: {lotes[1].ataque}</p>
        <p>vida: {lotes[1].vida}</p>
    </div>
    <div className="card" onClick={() =>colocar1(2)}>
        <img className="imgCard" src={lotes[2].img}></img>
        <p className="nome">{lotes[2].name}</p>
        <p>ataque: {lotes[2].ataque}</p>
        <p>vida: {lotes[2].vida}</p>
    </div>
    <div className="card" onClick={() =>colocar1(3)}>
        <img className="imgCard" src={lotes[3].img}></img>
        <p className="nome">{lotes[3].name}</p>
        <p>ataque: {lotes[3].ataque}</p>
        <p>vida: {lotes[3].vida}</p>
    </div>
    <div className="card" onClick={() =>colocar1(4)}>
        <img className="imgCard" src={lotes[4].img}></img>
        <p className="nome">{lotes[4].name}</p>
        <p>ataque: {lotes[4].ataque}</p>
        <p>vida: {lotes[4].vida}</p>
    </div>
    
    </div>
    <div className="tabuleiro">
    {aat.map((decks)=>{
            if(deck.length ===0){
                return (
            <>
                <TESTE1></TESTE1>
            </>)}else{
                return(  
                deck.map((decks)=>{
                return (
                    <>  
                        <TESTE2 deck={decks} fun={colarCardCampoDeBatalha} setSelecionar={setSelecionar} setCamp={setCamp} setNumero={setNumero}></TESTE2>
                    </>
                )}
                ))
              
            }
        
    })}
    </div>
          
   
</>)
}