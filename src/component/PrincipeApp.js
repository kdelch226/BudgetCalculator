import React from 'react'
import { Header } from './Header'
import { Balance } from './Balance'
import { Comparaison } from './Comparaison'
import { TransactionList } from './TransactionList'
import { AddTransaction } from './AddTransaction'

export const PrincipeApp = () => {
    return (
        <div className='container general col-lg-4 col-md-6 border shadow my-5 p-3 rounded-2'>
            <div className='mt-3 text-center'> <Header /></div>
            <div className='mt-3'> <Balance /></div>
            <div className='p-2'><Comparaison /></div>
            <div className='mt-4'> <TransactionList /></div>
            <div className='my-3'> <AddTransaction /></div>
        </div>
    )
}
