import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
export default function Cadastro(props){
    const {setToken} = props
    const localStorageTeste = JSON.parse(localStorage.getItem('token'))
  let token = localStorage.getItem('token') !== null ? localStorageTeste:""
  const updateToken = () => {
    localStorage.setItem('token',JSON.stringify(token))
  }


    const [email,setEmail] =useState('')
    const [senha,setSenha] =useState('')
    const [nome,setNome] =useState('')
    const [iniciar,setIniciar] =useState(true)
    const navigate = useNavigate();
    function a(){
        navigate("/cadastro")
    }
    function b(){
        navigate("/jogar")
    }
    async function login(e){
        e.preventDefault();
        try {//https://daniel-moura-rpg.herokuapp.com/
            if(iniciar){
                if(senha==='' || email==='' || nome ===''){
                    return alert('digite a senha, nome e o email')
                    
                }else if(nome.length>15){
                    return alert('Nome não pode ter mais que 15 caracteres')
                }
                    setIniciar(false)
                    const resposta = await axios.post(`http://localhost:5000/cadastro`, {
                        email: email, senha: senha,nome:nome
                    })
                    
                    token =resposta.data
                 
                    setToken(resposta.data)
                   
                    updateToken(token)
                
                    navigate("/jogar")
                   
                    
            }
        } catch (err) {
            console.log(err)
            if (err.response.data === undefined) {
                alert('servidor off')
            }else if(err.response.status === 422){
                alert('Seu email precisa seguir o formato alguma@coisa.com. exemplo: daniel@email.com')
            }else {
                alert(err.response.data)
            }
        }
    }
return( <div className="cadastro">
    <div className="login-caixa">
    <p className="cor3"> CADASTRO</p>
    <form onSubmit={login}>
        <div>
            <input  className="input" type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e-mail'></input>
        </div>
        <div>
            <input className="input" type={'password'} placeholder='password' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
        </div>
        <div>
            <input  className="input" type={'text'} placeholder='nome' value={nome} onChange={(e) => setNome(e.target.value)}></input>
        </div>
        <div>
            <button  className="bt"  > Login</button>
        </div>
        <div>
            <p1 onClick={() => navigate("/")}> Já é cadastrado ?  Faça login</p1>
        </div>

    </form>
    </div>
    
</div>)
}