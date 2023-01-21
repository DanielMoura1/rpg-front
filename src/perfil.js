import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
export default function Perfil(props){
    const {token} = props
    const [perfil,setPerfil] =useState([{foto:'',nome:'',fase:0}])
    const [foto,setFoto] =useState('')
    const navigate = useNavigate();
    useEffect(() => {
           async function getpg3(){
            try{//https://daniel-moura-rpg.herokuapp.com/inimigos
               const promessa=await axios.get('http://localhost:5000/perfil',{headers: {
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
          function mudarFoto(){
            const promise =  axios.put(
                'http://localhost:5000/mudarfoto',
                {foto},{headers: {
                    authorization : token
                }}
            );
            navigate("/jogar")
         }
    return( <>
        <div className="cadastro">
            <div className="login-caixa">
                <img className="img2perfil" src={perfil[0].foto} />
                <p>{perfil[0].nome}</p>
                <p>Trocar foto</p>
                <input  className="input" type={'text'} placeholder='URL' value={foto} onChange={(e) => setFoto(e.target.value)}></input>
                <button onClick={mudarFoto}>ok</button>
            </div>
         </div>
    </>)
}
/*
const promise = axios.post(
    'http://localhost:5000/inimigos',
    {golpe},{headers: {
        authorization : token
    }}
);
*/