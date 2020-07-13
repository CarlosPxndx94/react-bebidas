import React, { useContext } from 'react';
import Coctel from './Coctel';
import { CoctelesContex } from '../context/CoctelesContex';

const ListaCocteles = () => {

    const { cocteles } = useContext(CoctelesContex);

    if (cocteles.length === 0) return null;

    return (
        <div className="row mt-5">
            {cocteles.map(coctel => (
                <Coctel
                    key={coctel.idDrink}
                    coctel={coctel}
                />
            ))}
        </div>
    );
}

export default ListaCocteles;