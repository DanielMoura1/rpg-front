import { Link ,useNavigate } from "react-router-dom";


export default function Cadastro(props){
    const navigate = useNavigate();
    function a(){
        navigate("/")
    }
return( <>
    <p className="cor"> ok cadastro ok</p>
    <p onClick={()=> a()}>pagina 1</p>
   
</>)
}