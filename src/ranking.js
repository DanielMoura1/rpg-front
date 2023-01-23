import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
export default function Ranking(props){
    const {token} = props
    const [perfil,setPerfil] =useState([{foto:'',nome:'',ranking:''}])
    const [foto,setFoto] =useState('')
    const navigate = useNavigate();
    useEffect(() => {
           async function getpg3(){
            try{//https://daniel-moura-rpg.herokuapp.com/inimigos
               const promessa=await axios.get('http://localhost:5000/rank',{headers: {
                   authorization : token
                }})
                setPerfil(promessa.data)
                console.log('perfil')
                console.log(promessa.data)
            }catch(e){
               console.log('ruim no getpg2')
            }
           }
         getpg3()
        
         }, []);
    return( <>
        <div className="cadastro">
            <div className="login-caixa">
                <img className="img2perfil" src={perfil[0].foto} />
                <p>{perfil[0].nome}</p>
                <p>{perfil[0].ranking}</p>
            </div>
         </div>
    </>)
}