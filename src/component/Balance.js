import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

export const Balance = () =>{

    const { transactions } = useContext(GlobalContext);

    // Calcule du montant totla (entre- depense)
    const amounts = transactions.map (transs => transs.amount);
    const  totalamount = amounts.reduce((acc,curr) => acc + curr, 0).toFixed(2);

    return(
        <div className="d-flex align-items-center justify-content-between">
            <h4>Compte en banque :</h4>
            <h1 className=" balance shadow-sm"> ${totalamount} </h1>
        </div>

    )
}