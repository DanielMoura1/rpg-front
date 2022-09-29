import { Link ,useNavigate } from "react-router-dom";


export default function Login(props){
    const navigate = useNavigate();
    function a(){
        navigate("/cadastro")
    }
    function b(){
        navigate("/jogar")
    }
return(<>
    <p className="cor"> ok LOGIN ok</p>
    <p  onClick={ ()=>{a()}}>cadastrar</p>
    <p onClick={()=> b()}>entrar</p>
</> 
)
}