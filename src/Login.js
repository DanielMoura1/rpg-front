import { Link ,useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";


export default function Login(props){
    const {setToken} = props
    const localStorageTeste = JSON.parse(localStorage.getItem('token'))
  let token = localStorage.getItem('token') !== null ? localStorageTeste:""
  const updateToken = () => {
    localStorage.setItem('token',JSON.stringify(token))
  }

 
    const [email,setEmail] =useState('')
    const [senha,setSenha] =useState('')
    const navigate = useNavigate();
    function a(){
        navigate("/cadastro")
    }
    function b(){
        navigate("/jogar")
    }
    async function login(e){
        e.preventDefault();
        if(senha==='' || email===''){
            return alert('digite a senha e o email')
        }
        //http://localhost:5000/
        try {
            const resposta = await axios.post(`https://daniel-moura-rpg.herokuapp.com/login`, {
                email: email, senha: senha
            })
            token =resposta.data
            setToken(resposta.data)
            updateToken(token)
            navigate("/jogar")
        } catch (err) {
            console.log(err)
            if (err.response.data === undefined) {
                alert('servidor off')
            } else {
                alert(err.response.data)
            }
        }
    }
return(<div className="login">
    <div className="login-caixa">
    <p className="cor"> LOGIN</p>
    <form  onSubmit={login}>
        <div>
            <input className="input" type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e-mail'></input>
        </div>
        <div>
            <input className="input" type={'password'} placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
        </div>
        <div>
            <button className="bt" >Login</button>
        </div>
        <div>
            <p1 onClick={() => navigate("/cadastro")}> Primeira Vez? Crie sua conta !</p1>
        </div>

    </form>

    </div>
    
</div> 
)
}