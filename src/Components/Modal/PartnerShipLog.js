import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Utils/Auth';
import { toast } from 'react-toastify';
import AccountServices from '../../Services/AccountServices';

const PartnerShipLog = ({ userId }) => {
    const auth = useAuth();
    console.log("first", userId)
    const [partnershipData, setPartnershipData] = useState([]);
    useEffect(() => {
        if (auth.user) {

            AccountServices.getPartnershipData(userId, auth.user)
                .then((res) => {
                    console.log("==========aaaaaaaaaMMMMMMM>", res.data.partnership);
                    setPartnershipData(res.data.partnership);
                })
                .catch((err) => setPartnershipData([]));
        }
    }, []);



    console.log("hkhkhkuh", partnershipData)
    return (
        <div className="modal fade" id={`PartnerShipLog-${userId}`} tabindex="-1" aria-labelledby={`PartnerShipLog-${userId}`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title " id="depositBalanceModal">PartnerShip Log</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div className="modal-body">
                        <h5>UserName:{auth.user.userName}</h5>
                        {partnershipData.length > 0 ? (<table className="table lms_table_active3 table-bordered table-sm">
                            <thead>
                                <tr>
                                    <th>Sl. No.</th>
                                    <th>Date</th>
                                    <th>PartnerShip Amount</th>

                                </tr>
                            </thead>
                            <tbody>
                                {partnershipData.map((data, i) => {
                                    const originalDate = new Date(data?.date);
                                    const options = { day: 'numeric', month: 'short', year: 'numeric' };

                                    const formattedDate = originalDate.toLocaleDateString('en-US', options);
                                    return (
                                        <tr key={data._id}>
                                            <td>{i + 1}</td>

                                            <td>{formattedDate}</td>
                                            <td>{data.value}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>) : (<h3 className='text-center'>No Data Found</h3>)}


                    </div>

                </div>
            </div>
        </div>
    )
}

export default PartnerShipLog;