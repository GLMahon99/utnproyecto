import React, {useState} from "react";
import '../styles/components/pages/ContactoPage.css';
import {Alert , AlertTitle , Grid, TextField} from '@mui/material';

import ButtonSendContacto from "./ButtonSendContacto";

 const Contacto = (props) => {
  const [show, setShow] = useState(true);

    return(
        <main className="holder">
            <div>
                <h2>CONTACTO</h2>
                
                
                   {show ? (
                    <div>
                   <Grid container spacing={3}/>
                   <Grid item xs={4}>
                     <TextField
                       required
                       id="firstName"
                       name="firstName"
                       label="Nombre"
                       fullWidth
                       autoComplete="given-name"
                       variant="standard"
                     />
                     <TextField
                       required
                       id="lastName"
                       name="lastName"
                       label="apellido"
                       fullWidth
                       autoComplete="family-name"
                       variant="standard"
                     />
                     <TextField
                       required
                       id="address1"
                       name="address1"
                       label="telefono"
                       fullWidth
                       autoComplete="shipping address-line1"
                       variant="standard"
                     />
                     <TextField
                       required
                       id="address2"
                       name="address2"
                       label="email"
                       fullWidth
                       autoComplete="shipping address-line2"
                       variant="standard"
                     />
                   </Grid>
                    <Grid item xs={8}>
                      <TextField fullWidth label="Mensaje" id="fullWidth" multiline rows={5} maxRows={10} />
                    </Grid>
                   <ButtonSendContacto eventClick={() => {setShow(!show)}}/>
                   </div>)
                   :
                   (<Alert severity="success">
                    <AlertTitle>Mensaje enviado correctamente</AlertTitle>
                     Pronto recibiras nuestra respuesta via email.<strong>Gracias por comunicarte.</strong> 
                    </Alert>)} 
                
            </div>
            <div className="datos">
                <h2>Otras vías de contacto</h2>
                <p>También puede comunicarse por:</p>
                <ul>
                    <li>Telefono: 4565231</li>
                    <li>Email: lalalal@gmail.com</li>
                    <li>Facebook:</li>
                    <li>Twiter:</li>
                </ul>
            </div>
        </main>
    )
 };
 export default Contacto;