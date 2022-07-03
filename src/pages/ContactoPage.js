import React from "react";
import '../styles/components/pages/ContactoPage.css';

import ButtonSendContacto from "./ButtonSendContacto";
const alertMensajeEnviado = () => {
    alert("el mensaje fue enviado.")
}

 const Contacto = (props) => {
    return(
        <main className="holder">
            <div>
                <h2>CONTACTO</h2>
                <form className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <ButtonSendContacto eventClick={alertMensajeEnviado}/>
                </form>
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