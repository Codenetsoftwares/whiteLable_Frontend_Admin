import React, { useState } from 'react'
import { useAuth } from '../../Utils/Auth';
import TransactionServices from '../../Services/TransactionServices';
import { toast } from 'react-toastify';

const PartnerShipLog = ({ userId }) => {
    const auth = useAuth();
    console.log("first", userId)
    return (
        <div class="modal fade" id={`PartnerShipLog-${userId}`} tabindex="-1" aria-labelledby={`PartnerShipLog-${userId}`} aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="depositBalanceModal">PartnerShip Log</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div className="modal-body">
                        <h1>{userId}</h1>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                        <button type="button" class="btn btn-primary" >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerShipLog;