import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import DepositBalance from './Modal/DepositBalance';

const MainTransaction = () => {
    return (
        <div className='mt-3 mb-3'>
            <div className="text-center ">
                <p>Total Balance</p>
                <h4>₹10000</h4>
                <button data-bs-toggle="modal" data-bs-target="#depositBalanceModal" className="btn btn-danger"
                    aria-label="Close">
                    ADD CASH
                </button>
            </div>
            <div className="white_card_body m-3">
                <div className="QA_section">
                    <div className="QA_table mb_30">

                        <table className="table lms_table_active3 table-bordered">
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