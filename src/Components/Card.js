import React, { useState } from 'react'
import TransferBalance from './Modal/TransferBalance';
import { useAuth } from '../Utils/Auth';


const Card = ({ role, userName }) => {
    const auth = useAuth();
    const [id, setId] = useState("");
    const [data, setData] = useState("");

    const handleId = (id) => {
        setId(id)
    }
    return (
        <tbody>
            <tr>
                <th scope="row" className=''> 
                <button className='border border-1 w-75 text-center bg-success rounded-pill ' data-bs-toggle="modal" data-bs-target="#myModal" >{role}</button>
                <p>{userName}</p>
                </th>
                <td scope="row" className='fs-6 text-center'><span>500</span><span className='m-2'><i className="fa-solid fa-pen-to-square"></i></span><span className='m-2'><i class="fa-regular fa-eye"></i></span></td>
                <td scope="row" className='fs-6 text-center'><span>100</span><span className='m-2'><i className="fa-solid fa-pen-to-square"></i></span><span className='m-2'><i class="fa-regular fa-eye"></i></span></td>
                <td scope="row" className='fs-6 text-center'>479,330.23</td>
                <td scope="row" className='fs-6 text-center text-danger'>(7658)</td>
                <td scope="row" className='fs-6 text-center'>347,298</td>
                <td scope="row" className='fs-6 text-center text-danger'>(-2670)</td>
                <td scope="row" className='fs-6 text-center'><p className='border border-1 w-75 text-center bg-success rounded-pill'>Active</p></td>
                <td scope="row" className='fs-6 text-center'><span className='mx-1'>
                    <button data-bs-toggle="modal" data-bs-target="#transferbalance" className='btn border border-2 rounded' title="Addmoney" onClick={() => { handleId(userName) }}><i class="fa-solid fa-circle-dollar-to-slot"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Setting"><i class="fa-thin fas fa-gear"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Profile"><i class="fa-solid fa-user"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Delete"><i class="fa-light fas fa-trash"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Wallet"><i class="fa-regular fas fa-wallet"></i></button></span></td>
            </tr>
            <TransferBalance userName={userName} />
        </tbody>
    )
}

export default Card;