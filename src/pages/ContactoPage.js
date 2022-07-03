import React from "react";
 const Contacto = (props) => {
    return(
        <main className="holder">
            <div>
                <h2>CONTACTO</h2>
                <form>
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
                    <p className="acciones">
                        <input type="submit" value="enviar"/>
                    </p>
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