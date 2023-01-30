import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import CardsSelecao from "./cards-loja"
export default function Loja(props){
    let voltar ='<<<---'
    function voltajogar(){
        navigate("/jogar")
    }
    const {setDeck,deck,token,setToken,card,setCard} = props
    let n=-1
    const navigate = useNavigate();
    function a(){
        navigate("/")
    }
    const [cards,setCardS] =useState([{
    foto: "",
    id: 0,
    nome: "",
    ouroCard: [{cardId: 0,
        id: 0,
        ouro: 0}],
    poder: 150,
    vida: 1500}])
    const [num,setNum] =useState(0)
    const [time,setTime] =useState('apagado')
    const [compra,setCompra] =useState('lojas')
    const [perfil,setPerfil] =useState([{foto:'',nome:'',fase:0,vitorias:0,ouro:0}])
    
    function ck(){
        console.log('cards[0].nome')
        console.log(cards)
    }
    function pegar(c,cards,n,setCardS,setNum,ok,chave,setCor){
        //cards.push(c)
        console.log('loja')
       setCardS([c])
       console.log(cards)
       setCompra('caixa')
      
       
       if(num===9){
        setTime('acesso')
       }
        
    }
    function fechar(){
        setCompra('lojas')
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
        async function getpg2(){
            try{//https://daniel-moura-rpg.herokuapp.com/inimigos
               const promessa=await axios.get('http://localhost:5000/perfil',{headers: {
                   authorization : token
                }})
                setPerfil(promessa.data)
            }catch(e){
               console.log('ruim no getpg2')
            }
           }
       
         getpg1()
         getpg2()
        
         }, []);
    async function b(){
        if( cards[0].ouroCard[0].ouro<=perfil[0].ouro ){
            try {
                alert('oi')
                    //mudar
                const resposta = await axios.post(`http://localhost:5000/loja`,cards,{headers: {
                    authorization : token
                }})
                
                navigate("/jogar")
            } catch (err) {
                console.log(err)
                if (err.response.data === undefined) {
                    alert('servidor off')
                } else {
                    alert(err.response.data)
                }
            }
        }else{
            alert('ouro insuficiente')
        }
       
    }
return( <>
   
    <div className="selecao" >
        <div className="butaoselek">
            <p onClick={voltajogar} className="cor">{voltar}  Voltar</p>
            <p className="num" >ouro : {perfil[0].ouro}</p>
        </div>
    {
    card.map((cd)=>{
        n=n+1
        return (
            <>  
                <CardsSelecao pegar={pegar} setNum={setNum} setCardS={setCardS} card={cd} cards={cards} ></CardsSelecao>
            </>
        )}
        )}
        <div className={compra}>
            <img className="imgloja" src={cards[0].foto}/>
            <div>
                <p>Custo : {cards[0].ouroCard[0].ouro}</p>
            </div>
            <div>
                <p>Nome: {cards[0].nome}</p>
            </div>
           <div>
            <button onClick={fechar} className="botaoVermelho">cancelar</button>
            <button onClick={b} className={ cards[0].ouroCard[0].ouro<=perfil[0].ouro ?"botaoAzul":"botaoCinza"}>comprar</button>
           </div>
            
        </div>
    </div>
  
</>)
}