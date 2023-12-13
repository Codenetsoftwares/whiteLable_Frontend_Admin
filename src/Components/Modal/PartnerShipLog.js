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
                    console.log("==========aaaaaaaaaMMMMMMM>", res.data);
                    setPartnershipData(res.data);
                })
                .catch((err) => setPartnershipData([]));
        }
    }, []);

    const originalDate = new Date(partnershipData?.date);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };

    const formattedDate = originalDate.toLocaleDateString('en-US', options);

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
                        <div className="card text-center">
                            <div className="card-header">
                                {partnershipData.userName}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Partnership Amount</h5>
                                <p className="card-text">{partnershipData.partnership}</p>
                            </div>
                            <div className="card-footer text-muted">
                                {formattedDate}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PartnerShipLog;