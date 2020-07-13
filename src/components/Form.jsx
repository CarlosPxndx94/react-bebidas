import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { CoctelesContex } from '../context/CoctelesContex';

const Form = () => {

    const { categorias } = useContext(CategoriasContext);
    const { setBusqueda, setConsultar } = useContext(CoctelesContex);
    const [datos, setDatos] = useState({
        ingrediente: '',
        categoria: ''
    });

    const handlerDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const handlerForm = e => {
        e.preventDefault();
        setBusqueda(datos);
        setConsultar(true);
    }

    return (
        <form
            className="col-12"
            onSubmit={handlerForm}
        >
            <fieldset className="text-center">
                <legend>
                    Buscar receta de cócteles por Categoría o ingredientes
                </legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="ingrediente"
                        className="form-control"
                        placeholder="Buscar por ingrediente"
                        onChange={handlerDatos}
                    />
                </div>

                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={handlerDatos}
                    >
                        <option value="">-- Seleccione categoria --</option>
                        {categorias.map(opcion => (
                            <option
                                key={opcion.strCategory}
                                value={opcion.strCategory}
                            >{opcion.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar"
                    />
                </div>
            </div>
        </form>
    );
}

export default Form;