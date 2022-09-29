import { Link ,useNavigate } from "react-router-dom";


export default function Sele(props){
    const {deck} = props
    const navigate = useNavigate();
    function a(){
        navigate("/selecao")
    }

return( <>
   
   <p className="cor"> deck vazio</p>
    <p onClick={()=> a()}>montar deck</p>
</>)
}