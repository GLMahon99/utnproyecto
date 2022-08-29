import React from "react";
import Divider from "@mui/material/Divider";

const NoticiaItem = (props) => {
  const { titulo, bajada, imagen, cuerpo, piefoto } = props;

  return (
    <>
      <div>
        <h1>{titulo}</h1>
        <h5 className="my-3">{bajada}</h5>
        <img src={imagen}  className="rounded"/>
        <p className="mt-1 mb-4">{piefoto}</p>
        {/* danger.. en el caso de que tengamos textos es una propiedad importante para los tome bien  */}
        <div className="cuerpo" dangerouslySetInnerHTML={{ __html: cuerpo }}></div>
      </div>
      <Divider className="my-5"/>
    </>
  );
};

export default NoticiaItem;
