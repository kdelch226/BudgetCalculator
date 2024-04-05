import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Comparaison = () => {

    const { transactions } = useContext(GlobalContext);

    // Calcule du montant pour les entres et pour les depenses (entre- depense)
    const amounts = transactions.map (transs => transs.amount);
    
    const  negatif = amounts.filter(item => item < 0 ).reduce((acc,curr) => acc + curr, 0).toFixed(2);//les entrees dargent
    const  positif = amounts.filter(item => item > 0 ).reduce((acc,curr) => acc + curr, 0).toFixed(2);// les depences


  return (

    <div className='row text-center border p-2 compa shadow-sm'>
        <div className='col border-end'>
           <h4>Entree</h4> 
           <p className='money text-success '>${Math.abs(positif)} </p>
        </div>
        <div className='col'>
           <h4>Depence </h4> 
           <p className='money text-danger'>${Math.abs(negatif)}</p>
        </div>
    </div>

  )
}
