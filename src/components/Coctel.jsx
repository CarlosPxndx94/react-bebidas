import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Coctel = ({ coctel }) => {

    //modal
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    //fin modal
    const { receta, setIdReceta, setReceta } = useContext(ModalContext);
    const { idDrink, strDrink, strDrinkThumb } = coctel;

    const handleMostrarIngredientes = receta => {
        let ingredientes = [];

        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} : {receta[`strMeasure${i}`]}</li>
                );
            }
        }

        return ingredientes;
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {strDrink}
                </h2>
                <img
                    className="card-img-top"
                    src={strDrinkThumb}
                    alt={`Imagen de ${strDrink}`}
                />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdReceta(idDrink);
                            handleOpen();
                        }}
                    >Ver Receta</button>

                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={() => {
                            setIdReceta(null);
                            setReceta({});
                            handleClose();
                        }}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div style={modalStyle} className={classes.paper}>
                                <h2>{receta.strDrink}</h2>
                                <h3 className="mt-4">Instrucciones</h3>
                                <p>
                                    {receta.strInstructions}
                                </p>
                                <img
                                    className="img-fluid my-4"
                                    src={receta.strDrinkThumb}
                                    alt={`Imagen de ${receta.strDrink}`}
                                />

                                <h3>Ingredientes</h3>
                                <ul>
                                    {handleMostrarIngredientes(receta)}
                                </ul>
                            </div>
                        </Fade>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Coctel;