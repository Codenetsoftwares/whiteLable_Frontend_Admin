import React, { useState } from 'react'
import TransferBalance from './Modal/TransferBalance';
import EditCreditRefBalance from './Modal/EditCreditRefBalance';
import EditPartnerShipBalance from './Modal/EditPartnerShipBalance';
import { useAuth } from '../Utils/Auth';

const Card = ({ role, userName, creditRef, balance, loadBalance, refProfitLoss }) => {
    const auth = useAuth();
    const [id, setId] = useState("")


    const handleId = (id) => {
        setId(id)
    }
    
    console.log(id)
    return (
        <tbody>
            <tr>
                <th scope="row" className=''> 
                <button className='border border-1 w-75 text-center bg-success rounded-pill ' data-bs-toggle="modal" data-bs-target="#myModal" >{role}</button>
                <p>{userName}</p>
                </th>
                <td scope="row" className='fs-6 text-center'><span>{creditRef}</span><span className='m-2'>
                    <button className='border border-0 bg-white' ><i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#EditCreditRefBalance"
                        aria-label="Close"></i></button></span><span className='m-2'><i class="fa-regular fa-eye"></i></span></td>
                <td scope="row" className='fs-6 text-center'><span>100</span><span className='m-2'><i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#EditPartnerShipBalance"
                    aria-label="Close" z></i></span><span className='m-2'><i class="fa-regular fa-eye"></i></span></td>
                <td scope="row" className='fs-6 text-center'>{loadBalance}</td>
                <td scope="row" className='fs-6 text-center text-danger'>(7658)</td>
                <td scope="row" className='fs-6 text-center'>{balance}</td>
                <td scope="row" className='fs-6 text-center text-danger'>({refProfitLoss})</td>
                <td scope="row" className='fs-6 text-center'><p className='border border-1 w-75 text-center bg-success rounded-pill'>Active</p></td>
                <td scope="row" className='fs-6 text-center'><span className='mx-1'>
                    <button data-bs-toggle="modal" data-bs-target="#transferbalance" className='btn border border-2 rounded' title="Addmoney" onClick={() => { handleId(userName) }}><i class="fa-solid fa-circle-dollar-to-slot"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Setting"><i class="fa-thin fas fa-gear"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Profile"><i class="fa-solid fa-user"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Delete"><i class="fa-light fas fa-trash"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Wallet"><i class="fa-regular fas fa-wallet"></i></button></span></td>
            </tr>
            <TransferBalance userName={id} />
            <EditCreditRefBalance />
            <EditPartnerShipBalance />
        </tbody>
    )
}

export default Card;