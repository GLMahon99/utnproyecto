import React from "react";

const ButtonSendContacto = (props) => {

    const handleClick = e =>{
        if(props.eventClick){
            props.eventClick("Enviado")
        }
    }
    return ( 
        <p className="acciones">
            <input type="submit" value="enviar" onClick={handleClick}/>
        </p>
     );
}
 
export default ButtonSendContacto;