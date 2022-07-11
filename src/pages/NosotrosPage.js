import React, {useState} from "react";
import '../styles/components/pages/NosotrosPage.css';
import { Grid } from "@mui/material";

import Staff from "./Staff";

 const Nosotros = () => {
    // const [empleados, setEmpleados] = useState();
    const empleados = [
    {
        nombre:'Juan',
        apellido:'Alvarez',
        cargo:'Gerente General'    
    },
    {
        nombre:'Patricia',
        apellido:'Vecchio',
        cargo:'Jefe de Redacción'    
    },
    {
        nombre:'Emilio',
        apellido:'Roberts',
        cargo:'Periodista'    
    },
];

    return(
        <main className="holder">
            <div className="historia">
                <h2>HISTORIA</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="staff">
            <h2>STAFF</h2>
            <Grid container spacing={1}>{empleados.map((item) => <Staff {...item}/>)}</Grid>
            </div>
            
        </main>
    )
 };
 export default Nosotros;