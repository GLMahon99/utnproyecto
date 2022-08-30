import React, { useState } from "react";
import "../styles/components/pages/ContactoPage.css";
import axios from "axios";

const Contacto = (props) => {

  const initialForm = {
    nombre: '',
    apellido: '',
    telefono:'',
    email: '',
    mensaje:''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }

  return (
    <main className="holder ">
      <div className="row container row-cols-2">
        <div className="col">
          <h3>Contacto</h3>
          <form className="form-control mb-4" action="/contacto" method="post" onSubmit={handleSubmit}>
            <div className="row row-cols-2">
              <div className="col">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  <label for="floatingInput">Nombre</label>
                </div>
              </div>
              <div className="col">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                  />
                  <label for="floatingInput">Apellido</label>
                </div>
              </div>
            </div>

            <div class="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
              <label for="floatingInput">Teléfono</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="mensaje" value={formData.mensaje}
                    onChange={handleChange} placeholder="Escriba su consulta aquí"></textarea>
            </div>
            <div className="row row-cols-3">
              <div className="col">
              <input type="submit" className="btn btn-primary col"
                value="Enviar"
              />
              </div>
              
            </div>
          </form>
          {sending ? <div class="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                      </div> : null}
      {msg ? <div class="alert alert-success" role="alert">
      <i class="bi bi-check2-all">{msg}</i>
                
            </div> : null}
        </div>

        <div className="col">
          <h3>Otras vías de contacto</h3>
          <p>
            Tambien puede contactarse con nosotros usando los siguientes medios
          </p>
          <ul>
            <li>Teléfono: 45665215</li>
            <li>Email: contacto@gmail.com</li>
            <li>Facebook:</li>
            <li>Instagram:</li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Contacto;
