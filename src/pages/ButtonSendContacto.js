import React from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const ButtonSendContacto = (props) => {

    const handleClick = e =>{
        if(props.eventClick){
            props.eventClick("Enviado")
        }
    }
    return ( 
        <Button variant="contained" color="success" endIcon={<SendIcon/>} onClick={handleClick}>
            Enviar
        </Button>
     );
}
 
export default ButtonSendContacto;