import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import CardsSelecao from "./cards-selecao"
export default function Loja(props){
    const {setDeck,deck,token,setToken,card,setCard} = props
    let n=-1


    const navigate = useNavigate();
    function a(){
        navigate("/")
    }
    const [cards,setCardS] =useState([])
    const [num,setNum] =useState(0)
    const [time,setTime] =useState('apagado')
    function pegar(c,cards,n,setCardS,setNum,ok,chave,setCor){
        if(chave ===false && num<10){
        cards.push(c)
        console.log(c)
      
       setCardS(cards)
       setNum(cards.length)
       ok(true)
       setCor('blue')
       
       if(num===9){
        setTime('acesso')
       }
        }else{
            alert('Seu deck só pode ter 10 cartas')
        }
    }
    useEffect(() => {
        async function getpg1(){
         try{
            //mudar
            const promessa=await axios.get('http://localhost:5000/loja',{headers: {
                authorization : token
             }})
             setCard(promessa.data)
          
             console.log(card)
            
         }catch(e){
            console.log('ruim no getpg1')
         }
        }
       
         getpg1()
       
        
         }, []);
    async function b(){
        try {
            alert('oi')
            if(num===10){//apagar if
                //mudar
            const resposta = await axios.post(`http://localhost:5000/adicionar`,cards,{headers: {
                authorization : token
             }})
            
            navigate("/jogar")
            }
        } catch (err) {
            console.log(err)
            if (err.response.data === undefined) {
                alert('servidor off')
            } else {
                alert(err.response.data)
            }
        }
       
    }
return( <>
   
    <p className="cor"> ok seleçao ok</p>
  
    <button className={time} onClick={()=> b()}>montar deck</button>
    <p className="num" >cards: {num}/10</p>
    <div className="selecao" >
    {
    card.map((cd)=>{
        n=n+1
        return (
            <>  
                <CardsSelecao pegar={pegar} setNum={setNum} setCardS={setCardS} card={cd} cards={cards} ></CardsSelecao>
            </>
        )}
        )}
    </div>
  
</>)
}