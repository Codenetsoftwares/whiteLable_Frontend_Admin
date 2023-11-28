import React, { useState } from "react";
import { useAuth } from "../../Utils/Auth";
import { toast } from "react-toastify";
import TransactionServices from "../../Services/TransactionServices";
const TransferBalance = ({ userName }) => {
  console.log("username...", userName)
  const auth = useAuth();
  const [Amount, setAmount] = useState(0);
  const handleAmtChange = (e) => {
    setAmount(e.target.value);
  };
  const handleReset = () => {
    setAmount(0);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Amount === 0 || Amount < 0) {
      if (Amount < 0) {
        toast.error("Amount cannot be negative");
        return;
      }
      toast.error("Amount field cannot be empty.");
      return;
    }
    try {
      let data;
      if (auth.user?.role?.includes("superAdmin")) {
        data = {
          adminUserName: auth.user.userName,
          trnsfAmnt: Number(Amount),
          whiteLabelUsername: userName,
        };
      } else if (auth.user?.role?.includes("WhiteLabel")) {
        data = {
          whiteLabelUsername: auth.user.userName,
          trnsfAmnt: Number(Amount),
          hyperAgentUserName: userName,
        };
      } else if (auth.user?.role?.includes("HyperAgent")) {
        data = {
          hyperAgentUserName: auth.user.userName,
          trnsfAmnt: Number(Amount),
          SuperAgentUserName: userName,
        };
      } else if (auth.user?.role?.includes("SuperAgent")) {
        data = {
          SuperAgentUserName: auth.user.userName,
          trnsfAmnt: Number(Amount),
          masterAgentUserName: userName,
        };
      }
      console.log("data", data);
      TransactionServices.transferBalance(data, auth.user)
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
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="modal fade" id={`transferbalance-${userName}`} tabIndex="-1" aria-labelledby={`transferbalanceModal-${userName}`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="transferbalanceModal">
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