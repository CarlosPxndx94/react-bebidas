import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const CoctelesContex = createContext();

const CoctelesProvider = (props) => {

    const [cocteles, setCocteles] = useState([]);

    const [busqueda, setBusqueda] = useState({
        ingrediente: '',
        categoria: ''
    });

    const [consultar, setConsultar] = useState(false);

    useEffect(() => {

        if (consultar) {
            const consultarCoctelesApi = async () => {

                const { ingrediente, categoria } = busqueda;
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;

                const respuesta = await axios.get(url);
                //console.log(respuesta.data.drinks);
                setCocteles(respuesta.data.drinks);
            }

            consultarCoctelesApi();
        }
    }, [busqueda, consultar]);

    return (
        <CoctelesContex.Provider
            value={{
                cocteles,
                setBusqueda,
                setConsultar
            }}
        >
            {props.children}
        </CoctelesContex.Provider>
    );
}

export default CoctelesProvider;