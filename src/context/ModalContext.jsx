import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idReceta, setIdReceta] = useState(null);
    const [receta, setReceta] = useState({});

    useEffect(() => {

        if (idReceta !== null) {
            const consultarRecetaApi = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
                const respuesta = await axios.get(url);

                setReceta(respuesta.data.drinks[0]);
            }
            consultarRecetaApi();
        }

    }, [idReceta]);


    return (
        <ModalContext.Provider
            value={{                
                receta,
                setIdReceta,
                setReceta
            }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;