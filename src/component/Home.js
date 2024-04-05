import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';


export const Home = () => {
    //on affiche ce message dacceuil au lancement du programme
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <Modal  show={show} onHide={handleClose}>
            <Modal.Body className="text-center border shadow p-4" >
                <h2>Bienvenue sur Budget Malin ! </h2>
                <h6>/Brunel Kompaore</h6>
                <p>Prenez le contrôle de vos finances dès maintenant avec notre application intuitive et pratique. Suivez vos dépenses, planifiez vos budgets </p>
                <button className="btn btn-primary" onClick={handleClose} >Continuer</button>
            </Modal.Body>
        </Modal>
    )
}
