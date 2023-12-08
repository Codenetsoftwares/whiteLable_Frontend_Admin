import React, { useState } from "react";
import { useAuth } from "../../Utils/Auth";
import { toast } from "react-toastify";
import TransactionServices from "../../Services/TransactionServices";
const TransferBalance = ({ userId }) => {
  console.log("username...", userId)
  const auth = useAuth();
  const [Amount, setAmount] = useState(0);
  const [Remarks, SetRemarks] = useState("");
  const handleAmtChange = (e) => {
    setAmount(e.target.value);
  };
  const handleReset = () => {
    setAmount(0);
  };

  const handelRemarkschange = (e) => {
    SetRemarks(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Amount === 0 || Remarks === "" || Amount < 0) {
      if (Amount < 0) {
        toast.error("Amount cannot be negative");
        return;
      }
      toast.error("Amount field cannot be empty.");
      return;
    }
    try {
      const data = {
        trnsfAmnt: Number(Amount),
        receiveUserId: userId,
        remarks: Remarks,
      };

      TransactionServices.transferBalance(auth.user.id, data, auth.user)
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            alert(res.data.message);
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data.message);
          handleReset()
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="modal fade" id={`transferbalance-${userId}`} tabIndex="-1" aria-labelledby={`transferbalance-${userId}`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" >
              Amount
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleReset}
            ></button>
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
                  value={auth.user?.userName || ""}
                  disabled
                  style={{ fontSize: "10px" }}
                />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  onChange={handleAmtChange}
                  value={Amount}
                />
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Remarks *"
                onChange={handelRemarkschange}
                value={Remarks}
                required
              />
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleReset}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransferBalance;