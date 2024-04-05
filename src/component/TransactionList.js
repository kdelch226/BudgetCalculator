import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3 className='title '>History</h3>
            <ul className='historyList list-group'>
                {transactions.map(transs => (
                    <Transaction key={transs.id} trans={transs}/>
                ))}
            </ul>
        </div>
    )
}
