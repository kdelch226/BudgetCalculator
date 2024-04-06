import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    // États pour stocker le texte, le montant et le type de transaction
    const [textIn, setText] = useState('');
    const [montantIn, setMontant] = useState('');
    const [transacType, setType]= useState('');

    // Récupération de la fonction addTransaction et de la liste des transactions à partir du contexte global
    const { addTransaction } = useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext);

    // Fonction appelée lors de la soumission du formulaire
    const onSubmit = e => {
        e.preventDefault();
        let montantFinal;
        let idcheck = transactions.length + 1;
        let checkId = trans => trans.id === idcheck;
        
        // Boucle pour générer un nouvel identifiant unique pour la transaction
        while (transactions.some(checkId)) {
            idcheck++;
        }

        console.log(transacType);
        // Calcul du montant final en fonction du type de transaction (entree ou depense)
        if(transacType==='depense') montantFinal= -Math.abs(montantIn);
        else montantFinal= +Math.abs(montantIn);

        
        // Création de la nouvelle transaction
        const newTrans = {
            id: idcheck,
            text: textIn,
            amount: montantFinal
        };

        // Ajout de la transaction en appelant la fonction addTransaction du contexte global
        addTransaction(newTrans);

        // Réinitialisation des champs texte et montant après l'ajout de la transaction
        setText('');
        setMontant('');
    }

    // Rendu du composant
    return (
        <div>
            <h3 className='title'>Ajouter une transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='group mb-3'>
                    <label htmlFor="tansactype" className='form-label' > Type de la transaction</label>
                    <select id='tansactype' className="form-select" aria-label="Default select example" value={transacType} onChange={ (e) => setType(e.target.value)} required>
                        <option value="entree">Entree</option>
                        <option value="depense">Depense</option>
                    </select>
                </div>

                <div className='group mb-3'>
                    <label htmlFor="tansacName" className='form-label'>Nom de transaction</label>
                    <input type='text' id='tansacName' value={textIn} onChange={(e) => setText(e.target.value)} className='transactionName form-control' placeholder='enter name' required></input>
                </div>
                <div className='group mb-3'>
                    <label htmlFor="tansacamount" className='form-label'>Montant de la transaction </label>
                    <input type='number' id='tansacamount' value={montantIn} onChange={(e) => setMontant(e.target.value)} className='transactionName form-control' placeholder='enter montant' required></input>
                </div>
                <button type='submit' className='btn btn-danger'>ajouter transaction</button>
            </form>
        </div>
    )
}
