import { Link ,useNavigate } from "react-router-dom";
import TESTE1 from "./TESTE1"
import TESTE2 from "./TESTE2"
import axios from "axios";
import { useState, useEffect } from 'react';
export default function JOGAR(props){
    const golpee =[{
        loteId:0,
        inimigoId:0,
        dano:0,
        ativo:false
    },
    {
        loteId:0,
        inimigoId:0,
        dano:0,
        ativo:false
    },
    {
        loteId:0,
        inimigoId:0,
        dano:0,
        ativo:false
    },
    {
        loteId:0,
        inimigoId:0,
        dano:0,
        ativo:false
    },
    {
        loteId:0,
        inimigoId:0,
        dano:0,
        ativo:false
    }
]
    let contador =-1
    const [load,setLoad] =useState('button')
    const [texto,setA] =useState('Atacar')
    const [atq,setAtq] =useState('at')
    const [golpe,setGolpe] =useState(golpee)
    const acaoDoTurno={idLote1:1,idINIMIGO:0}
    const {deck,setDeck,token,setToken} = props
    const navigate = useNavigate();
    const [cor,setCor] =useState("card")
    const [cor1,setCor1] =useState("card")
    const [cor2,setCor2] =useState("card")
    const [cor3,setCor3] =useState("card")
    const [cor4,setCor4] =useState("card")
    const [cor5,setCor5] =useState("card")
    const [nome,setNome] =useState("card")
    const [inimigos,setInimigos] =useState([])
    const lotess =[{name:nome,img:'',ataque:0,vida:0,ativo:false,anima:"a"},{name:'lote 2',img:'',ataque:0,vida:0,ativo:false,anima:"a"},{name:"lote 3",img:'',ataque:0,vida:0,ativo:false,anima:"a"},{name:'lote 4',img:'',ataque:0,vida:0,ativo:false,anima:"a"},{name:'lote 5',img:'',ataque:0,vida:0,ativo:false,anima:"a"}]
    const [lotes,setLotes] =useState(lotess)
    const [selecionar,setSelecionar] =useState("")
    const [camp,setCamp] =useState(false)
    const [numero,setNumero] =useState(-1)
    const [corInig1,setCorIn1] =useState("card")
    const [corInig2,setCorIn2] =useState("card")
    const [corInig3,setCorIn3] =useState("card")
    const [corInig4,setCorIn4] =useState("card")
    const [corInig5,setCorIn5] =useState("card")
    const coresDoInimig =[corInig1,corInig2,corInig3,corInig4,corInig5]
    const mudar_cores_Do_Inimig=[setCorIn1,setCorIn2,setCorIn3,setCorIn4,setCorIn5]
    const [indice,setIndice] =useState(0)
    function ok(){
        alert('blz')
        setLoad('load')
        setA('OK')
        const promise = axios.post(
            'http://localhost:5000/inimigos',
            {golpe},{headers: {
                authorization : token
             }}
          );
          setTimeout(()=>setLoad('button'), 1000);
          setTimeout(()=>setAtq('atq'), 1000);
            setTimeout(()=>setAtq('at'), 2000);
            setTimeout(()=> window.location.reload(), 2100);
           

    }
    let n =-1
    useEffect(() => {
        async function getpg1(){
         try{
            const promessa=await axios.get('http://localhost:5000/criarUser',{headers: {
                authorization : token
             }})
             setDeck(promessa.data)
             console.log(promessa.data)
         }catch(e){
            console.log('ruim no getpg1')
         }
        }
        async function getpg2(){
            try{
               const promessa=await axios.get('http://localhost:5000/inimigos',{headers: {
                   authorization : token
                }})
                setInimigos(promessa.data)
                console.log(promessa.data)
            }catch(e){
               console.log('ruim no getpg2')
            }
           }
         getpg1()
         getpg2()
        
         }, []);
    function a(){
        navigate("/")
    }
    function j(){
        console.log(camp)
    }
    function colarCardCampoDeBatalha(nome,cor,deletar,num,setCamp,setSelecionar,setNumero,n,chave,setChave){
        if(camp ===false && chave==true){
  
            setSelecionar(nome)
         
            setCamp(true)
            cor()
            num()
           
            setNumero(n)
            setChave(false)
            console.log(n)
           
        }
    }
    function colocar1(n,fun,cor){
        if(camp==true && lotes[n].ativo==false){
            lotes[n].name =selecionar
            console.log(numero)
            alert('golpe')
            lotes[n].img =deck[numero].foto
            lotes[n].vida =deck[numero].vida
            lotes[n].ataque =deck[numero].poder
            lotes[n].ativo = true
            lotes[n].anima = "atq"
            alert('golpe')
            golpe[n].loteId=deck[numero].id
            golpe[n].dano=deck[numero].poder
            console.log(golpe)
            alert('id')
            console.log(lotes[n])
         
            setLotes(lotes)
            setNome(selecionar)
          
            deck[numero].nome=""
            deck[numero].foto="mudeiNome"
            deck[numero].vida=""
            deck[numero].poder=''
            //setDeck(...deck[numero])
            console.log(inimigos[0])
            console.log(inimigos)
            setCamp(false)
        }else if(camp===false && lotes[n].vida>0 && lotes[n].ataque>0){
            console.log(golpe)
            fun(cor)
            setCor(cor)
            setIndice(n)
            console.log(golpe)
        }else if(lotes[n].ataque<0){
            alert('Cartas de cura não podem atacar. Só dela estar no tabuleiro já cura uma carta aleatória que esteja no tabuleiro')
        }
    }
    function atacar(i,id,fun){
        let verifica ='ok'
        for(let j=0;j<golpe.length;j++){
            if(golpe[j].inimigoId===id){
                verifica ='nao'
                alert('Um inimgo não pode ser atacado por mais de um card')
            }
        }
        if(golpe[i].inimigoId==0 && golpe[i].ativo===false && cor!=='card' && verifica=="ok"){
            alert('okok')
            alert(golpe[i].inimigoId)
            alert(golpe[i].ativo )
            fun(cor)
            golpe[i].inimigoId=id
            alert(golpe[i].inimigoId)
            golpe[i].ativo =true
            console.log(golpe)
          
            alert('golpe')
            alert(i)
        }else{
            alert('nice')
            alert(golpe[i].inimigoId)
            console.log(golpe)
        }
       

    }

    const aat=[1]
return( <div className="body">
     <div className="tex-tabuleiro2"><p>Inimigos</p></div>
 <div className="tabuleiro2">
     {inimigos.map((inimigo)=>{
         contador=contador+1
        return(<>
           <div className={coresDoInimig[contador]} onClick={() => atacar(indice,inimigo.id,mudar_cores_Do_Inimig[inimigo.indice])}>
                <img className="imgCard" src={inimigos.length  === 0 ? '':inimigo.foto}></img>
                <p className="nome">{inimigos.length  === 0 ? '':inimigo.nome}</p>
                <p>ataque: {inimigos.length  === 0 ? '':inimigo.poder}</p>
                <p>vida: {inimigos.length  === 0 ? '':inimigo.vida}</p>
            </div>
            </>
        )
        
    })}
     </div>
  
   
   
    <div className="barra"><button className={load}  onClick={()=> ok()}><p>{texto}</p></button></div>
    <div className="tex-tabuleiro"><p>Tabuleiro</p></div>
    <div className="tabuleiro">

    <div className={cor1} id={atq} onClick={() =>colocar1(0,setCor1,"red")}>
        <img className="imgCard" src={lotes[0].img}></img>
        <p className="nome">{lotes[0].name}</p>
        <p> {lotes[0].ataque >= 0 ? `Ataque :${lotes[0].ataque}`:`Habilidade: cura ${lotes[0].ataque*-1}`}</p>
        <p>vida: {lotes[0].vida}</p>
    </div>
    <div className={cor2} id={atq} onClick={() =>colocar1(1,setCor2,'black')}>
        <img className="imgCard" src={lotes[1].img}></img>
        <p className="nome">{lotes[1].name}</p>
        <p>{lotes[1].ataque >= 0 ? `Ataque :${lotes[1].ataque}`:`Habilidade: cura ${lotes[1].ataque*-1}`}</p>
        <p>vida: {lotes[1].vida}</p>
    </div>
    <div className={cor3} id={atq} onClick={() =>colocar1(2,setCor3,'darkb')}>
        <img className="imgCard" src={lotes[2].img}></img>
        <p className="nome">{lotes[2].name}</p>
        <p>{lotes[2].ataque >= 0 ? `Ataque :${lotes[2].ataque}`:`Habilidade: cura ${lotes[2].ataque*-1}`}</p>
        <p>vida: {lotes[2].vida}</p>
    </div>
    <div className={cor4} id={atq} onClick={() =>colocar1(3,setCor4,'gold')}>
        <img className="imgCard" src={lotes[3].img}></img>
        <p className="nome">{lotes[3].name}</p>
        <p>{lotes[3].ataque >= 0 ? `Ataque :${lotes[3].ataque}`:`Habilidade: cura ${lotes[3].ataque*-1}`}</p>
        <p>vida: {lotes[3].vida}</p>
    </div>
    <div className={cor5} id={atq} onClick={() =>colocar1(4,setCor5,'thistle')}>
        <img className="imgCard" src={lotes[4].img}></img>
        <p className="nome">{lotes[4].name}</p>
        <p> {lotes[4].ataque >= 0 ? `Ataque :${lotes[4].ataque}`:`Habilidade: cura ${lotes[4].ataque*-1}`}</p>
        <p>vida: {lotes[4].vida}</p>
    </div>
    
    </div>
    <div className="tex-mao"><p>Sua mão</p></div>
    <div className="mao">
    {aat.map((decks)=>{
            if(deck.length ===0){
                return (
            <>
                <TESTE1></TESTE1>
            </>)}else{
                return(  
                deck.map((decks)=>{
                    n=n+1
                return (
                    <>  
                        <TESTE2 deck={decks} fun={colarCardCampoDeBatalha} setSelecionar={setSelecionar} setCamp={setCamp} setNumero={setNumero} n={n}></TESTE2>
                    </>
                )}
                ))
              
            }
        
    })}
    </div>
          
   
</div>)
}