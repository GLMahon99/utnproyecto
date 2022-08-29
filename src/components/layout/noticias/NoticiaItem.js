import React from 'react';

const NoticiaItem = (props) => {
    const {titulo, bajada, imagen , cuerpo, piefoto} = props;

    return ( <div>
                <h1>{titulo}</h1>
                <h5>{bajada}</h5>
                <img src={imagen}/>
                <p>{piefoto}</p>
                {/* danger.. en el caso de que tengamos textos es una propiedad importante para los tome bien  */}
                <div dangerouslySetInnerHTML={{__html: cuerpo}}></div>
            </div> 
    );
}
 
export default NoticiaItem;