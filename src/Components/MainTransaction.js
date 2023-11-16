import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import DepositBalance from './Modal/DepositBalance';

import TransactionServices from '../Services/TransactionServices';
import { useAuth } from '../Utils/Auth';


const MainTransaction = () => {
    const auth = useAuth();
    console.log("=======>>>>>>",auth)
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (auth.user) {
            TransactionServices.viewBalance( auth.user.id, auth.user).then((res) => {
                console.log("==========>",res.data )
                setBalance (res.data.amount.balance)
                }).catch(err => setBalance([]))
             }
  
    }, []);

   
   
   
    return (
        <div className='mt-3 mb-3'>
            <div className="text-center ">
                <p>Total Balance</p>
                <h4>₹{balance}</h4>
                <button data-bs-toggle="modal" data-bs-target="#depositBalanceModal" className="btn btn-danger"
                    aria-label="Close">
                    ADD CASH
                </button>
            </div>
            <div className="white_card_body m-3">
                <div className="QA_section">
                    <div className="QA_table mb_30">

                        <table className="table lms_table_active3  table-bordered table-sm table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
                            <thead >
                                <tr>
                                    <th scope="col" className='text-bolder fs-6 '>Username</th>
                                    <th scope="col" className='text-bolder fs-6 text-center'>Credit Ref.</th>
                                    <th scope="col" className='text-bolder fs-6 text-center'>Partnership</th>
                                    <th scope="col" className='text-bolder fs-6 text-center'>Balance</th>
                                    <th scope="col" className='text-bolder fs-6 text-center'>Exposeure</th>
                                    <th scope="col" className='text-bolder fs-6 text-center'>Avail. Bal.</th>
                                    <th scope="col" className='text-bolder fs-6 text-center'>Ref. P/L</th>
                                    <th scope="col" className='text-bolder fs-6 text-center'>Status</th>
                                    <th scope="col" className='text-bolder fs-6 text-center'>Actions</th>
                                </tr>
                            </thead>
                            <Card />
                        </table>
                    </div>
                </div>
            </div>
            <DepositBalance />
        </div>
    )
}

export default MainTransaction;