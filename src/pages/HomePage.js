import React from "react";
import '../styles/components/pages/HomePage.css';

 const HomePage = (props) => {
    return(
        <main className="holder">
            <div className="homeImg">
                <img src="" alt=""/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>BIENVENIDOS</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="testimonios">
                    <h2>TESTIMONIOS</h2>
                    <div className="testimonio">
                        <span className="cita">Excelente servicio</span>
                        <span className="autor">Marcos Palma</span>
                    </div>
                </div>
            </div>
        </main>
        
    )
 };
 export default HomePage;