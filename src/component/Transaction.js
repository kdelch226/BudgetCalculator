import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Modal } from 'react-bootstrap';

export const Transaction = ({ trans }) => {
    const [show, setShow] = useState(false);

    // Fonction pour ouvrir le modal
    const handleShow = () => setShow(true);

    // Fonction pour fermer le modal
    const handleClose = () => setShow(false);

    // Contexte global pour accéder à la fonction deleteTransaction
    const { deleteTransaction } = useContext(GlobalContext);

    // Action à exécuter lors du clic sur le bouton de suppression
    const handleDelete = () => {
        deleteTransaction(trans.id);
        handleClose(); // Ferme le modal après la suppression
    };

    // Détermine le signe du montant (positif ou négatif)
    const sign = trans.amount < 0 ? '-' : '+';

    // Rendu du composant Transaction
    return (
        <>
            <div className='amount-group my-1 p-1 shadow-sm'>
                {/* Bouton pour ouvrir le modal */}
                <button className='btn-close' onClick={handleShow}></button>
                {/* Affichage de la transaction */}
                <li className={'  amount ' + (trans.amount < 0 ? 'minus' : 'plus')}>
                    {trans.text} <span>{sign}${Math.abs(trans.amount)}</span>
                </li>
            </div>

            {/* Modal de confirmation de suppression */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className="text-center border shadow p-4">
                    <h2>Êtes-vous sûr de vouloir supprimer cet élément ?</h2>
                    {/* Bouton pour confirmer la suppression */}
                    <button className="btn btn-primary" onClick={handleDelete}>Supprimer</button>
                </Modal.Body>
            </Modal>
        </>
    );
};
