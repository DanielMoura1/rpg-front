import { useState, useEffect } from 'react';

export default function CardsSelecao(props){
    const {card,n,pegar,cards,setCardS,setNum} = props
    const [chave,setChave] =useState(false)
    const [cor,setCor] =useState('card')
    
return( <>
       
    <div className={cor} onClick={()=>pegar(card,cards,n,setCardS,setNum,setChave,chave,setCor)}>
        <img className="imgCard" src={card.foto}></img>
        <p className="nome">{card.nome}</p>
        <p>Vida : {card.vida}</p>
        <p>{card.poder >=0 ? `Poder : ${card.poder}`:`Cura :  ${card.poder*-1}`} </p>
        <p>Ouro: {card.ouroCard[0].ouro}</p>
    </div>
</>)
}