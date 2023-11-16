import React, { useState } from 'react'
import { useAuth } from '../../Utils/Auth';
import TransactionServices from '../../Services/TransactionServices';
import { toast } from 'react-toastify';

const DepositBalance = () => {
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
            depositeAmount: Number(Amount),
        };

        console.log("data", data);
        TransactionServices.depositAmount(data, id, auth.user)
            .then((res) => {
                // console.log(response.data);
                if (res.status === 200) {
                    console.log(res);
                    alert(res.data.message);
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.log(error)
                alert(error.response.data.message);
                // alert.error("e.message");
            });
    };
    return (
        <div class="modal fade" id="depositBalanceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="depositBalanceModal">Provide Deposit Amount</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleReset}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <small>Transaction By:</small>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control font-weight-bold"
                                    placeholder="SubAdmin"
                                    value={auth.user.userName}
                                    disabled
                                    style={{ fontSize: "10px" }}
                                />
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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleReset}>Close</button>
                        <button type="button" class="btn btn-primary" onClick={handelsubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepositBalance