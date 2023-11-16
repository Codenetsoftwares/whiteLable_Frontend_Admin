import React from 'react'

const Card = () => {
    return (
        <tbody>
            <tr>
                <th scope="row" className=''> <p className='border border-1 w-50 text-center bg-success rounded-pill '>Super</p>
                    <p>abhideb001</p>
                </th>
                <td scope="row" className='fs-6 text-center'><span>50000</span><span className='m-2'><i className="fa-solid fa-pen-to-square"></i></span><span className='m-2'><i class="fa-regular fa-eye"></i></span></td>
                <td scope="row" className='fs-6 text-center'><span>100</span><span className='m-2'><i className="fa-solid fa-pen-to-square"></i></span><span className='m-2'><i class="fa-regular fa-eye"></i></span></td>
                <td scope="row" className='fs-6 text-center'>479,330.23</td>
                <td scope="row" className='fs-6 text-center text-danger'>(7658)</td>
                <td scope="row" className='fs-6 text-center'>347,298</td>
                <td scope="row" className='fs-6 text-center text-danger'>(-2670)</td>
                <td scope="row" className='fs-6 text-center'><p className='border border-1 w-75 text-center bg-success rounded-pill'>Active</p></td>
                <td scope="row" className='fs-6 text-center'><span className='mx-1'><button className='btn border border-2 rounded' title="Addmoney"><i class="fa-solid fa-circle-dollar-to-slot"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Setting"><i class="fa-thin fas fa-gear"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Profile"><i class="fa-solid fa-user"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Delete"><i class="fa-light fas fa-trash"></i></button></span><span className='mx-1'><button className='btn border border-2 rounded' title="Wallet"><i class="fa-regular fas fa-wallet"></i></button></span></td>
            </tr>

        </tbody>
    )
}

export default Card;