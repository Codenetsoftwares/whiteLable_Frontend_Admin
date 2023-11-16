import React from 'react'

const TransferBalance = () => {
  
  
    const handelsubmit = (e) => {
        e.preventDefault();
       }


  
    return (
    <div class="modal fade" id="transferbalance" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="transferbalanceModal"> Amount</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" 
                        // onClick={handleReset}
                        >

                        </button>
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
                                    // value={auth.user.userName}
                                    disabled
                                    style={{ fontSize: "10px" }}
                                />
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Amount"
                                    // onChange={handelamtchange}
                                    // value={Amount}
                                />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" 
                        // onClick={handleReset}
                        >Close</button>
                        <button type="button" class="btn btn-primary" onClick={handelsubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TransferBalance