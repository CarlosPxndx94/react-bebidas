import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const CategoriasContext = createContext();

//Provider

const CategoriasProvider = (props) => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const consularCategoriasApi = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);
            setCategorias(categorias.data.drinks);
        }

        consularCategoriasApi();
    }, []);

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;