import React from "react";
import axios from 'axios';
import NoticiaItem from "../components/layout/noticias/NoticiaItem";
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../styles/components/pages/NoticiasPage.css';

 const Noticias = (props) => {
    const [loading, setLoading] = useState(false);
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const cargarNoticias = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/noticias');
            setNoticias(response.data);
            setLoading(false);
        };
        cargarNoticias();
    }, []);

    return(
        <section className="holder">
            <h2>NOTICIAS</h2>
            {loading ? (<Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>) : (
                            noticias.map(item => <NoticiaItem key={item.id} titulo={item.titulo} bajada={item.bajada} imagen={item.imagen} cuerpo={item.cuerpo} piefoto={item.piefoto} date={item.date} />)
                        )};
           
        </section>
    )
 };
 export default Noticias;