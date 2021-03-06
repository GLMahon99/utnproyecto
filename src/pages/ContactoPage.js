import React from "react";
import '../styles/components/pages/ContactoPage.css';
import {Alert , AlertTitle , Grid, TextField} from '@mui/material';

import ButtonSendContacto from "./ButtonSendContacto";
const alertMensajeEnviado = () => {
    
}

 const Contacto = (props) => {
    return(
        <main className="holder">
            <Alert severity="success">
                <AlertTitle>Mensaje enviado correctamente</AlertTitle>
                Pronto recibiras nuestra respuesta via email.<strong>Gracias por comunicarte.</strong> 
            </Alert>
            <div>
                <h2>CONTACTO</h2>
                
                <Grid container spacing={3}/>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="apellido"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="telefono"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
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
                    
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <ButtonSendContacto eventClick={alertMensajeEnviado}/>
                
            </div>
            <div className="datos">
                <h2>Otras v??as de contacto</h2>
                <p>Tambi??n puede comunicarse por:</p>
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