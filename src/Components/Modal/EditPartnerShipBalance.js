import React, { useState } from 'react'
import { useAuth } from '../../Utils/Auth';
import TransactionServices from '../../Services/TransactionServices';
import { toast } from 'react-toastify';

const EditPartnerShipBalance = ({ userId }) => {
    const auth = useAuth();

    const [Amount, SetAmount] = useState(0);
    const id = auth.user.id;

    const handelamtchange = (e) => {
        SetAmount(e.target.value);
    };

    const handleReset = () => {
        SetAmount(0);
    }
    const handelsubmit = (e) => {
        e.preventDefault();
        if (Amount === 0 || Amount < 0) {
            if (Amount < 0) {
                toast.error("Amount can not be negetive");
                return;
            }
            toast.error("Amount fields cannot be empty.");
            return;
        }
        const data = {
            partnership: Number(Amount),
        };


        TransactionServices.EditPartnership(data, userId, auth.user)
            .then((res) => {

                if (res.status === 200) {

                    alert("Partnership Udated Succesfully");
                    window.location.reload();
                }
            })
            .catch((error) => {
                alert(`${auth.user.roles[0].role} should be Locked Or Suspended`);
                window.location.reload();
            });
    };
    return (
        <div className="modal fade" id={`EditPartnerShipBalance-${userId}`} tabindex="-1" aria-labelledby={`EditPartnerShipBalance-${userId}`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="depositBalanceModal">Provide Edit PartnerShip Amount</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleReset}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Transaction By: <span className="mx-1 text-success">{auth.user?.userName || ""}</span>
                                    </span>
                                </div>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Amount"
                                    onChange={handelamtchange}
                                    value={Amount}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleReset}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handelsubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPartnerShipBalance;