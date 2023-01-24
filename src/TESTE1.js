import { Link ,useNavigate } from "react-router-dom";


export default function Sele(props){
    const {deck} = props
    const navigate = useNavigate();
    function a(){
        
        navigate("/selecao")
    }

return( <>
   
   <p className="cor2"> deck vazio :</p>
    <button className="botaodeck" onClick={()=> a()}>Montar deck</button>
</>)
}