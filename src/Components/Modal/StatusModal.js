import React, { useState, useEffect } from "react";
import { useAuth } from "../../Utils/Auth";
import AccountServices from "../../Services/AccountServices";

const StatusModal = ({ statusId, username, userRole, onStatusChange }) => {
  const auth = useAuth();
  const [active, setActive] = useState(true);
  const [btncolor1, setBtncolor1] = useState(false);
  const [btncolor2, setBtncolor2] = useState(false);
  const [btncolor3, setBtncolor3] = useState(false);
  const [data, setData] = useState(0);
  const [lock, setLock] = useState(true);
  const [statusSubmitted, setStatusSubmitted] = useState(false);
  const [activeStatus, setActiveStatus] = useState({});
  const [previousState, setPreviousState] = useState({});



  useEffect(() => {
    AccountServices.getActiveStatus(statusId, auth.user).then((res) => {
      setActiveStatus(res.data);

      // Call the onStatusChange function to pass the status back to the parent
      //  const status =  calculateStatus(res)
      //  onStatusChange(status);
    });
  }, [statusId, auth.user]);

  // const calculateStatus = (response) => {

  //   if (response && response.data && response.data.isActive && response.data.locked) {
  //     return "Active";
  //   } else if (response && response.data && !response.data.isActive && response.data.locked) {
  //     return "Suspended";
  //   } else if (response && response.data && !response.data.isActive && !response.data.locked) {
  //     return "Locked";
  //   }

  //   // Return a default status if none of the conditions are met
  //   return "Unknown Status";
  // };


  const handleActiveChange = () => {
    setPreviousState({
      isActive: activeStatus.active,
      locked: activeStatus.lock,
    });

    setActive(true);
    setBtncolor1(true);
    setBtncolor2(false);
    setBtncolor3(false);

    setData(1);
  };

  const handleInactiveChange = () => {
    setActive(false);
    setBtncolor2(true);
    setBtncolor1(false);
    setBtncolor3(false);
    setLock(true);
    setData(2);
  };

  const handleLockChange = () => {
    setLock(false);
    setData(3);
    setActive(false);
    setBtncolor3(true);
    setBtncolor1(false);
    setBtncolor2(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatusSubmitted(true);

    const data = {
      isActive: active,
      locked: lock,
      previousState: previousState,
    };

    AccountServices.ActiveInactive(
      data,
      statusId,
      auth.user,
      data.isActive,
      data.locked
    )
      .then((res) => {
        // alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => {

        // alert(err.response.data.message);
        return;
      });
  };
  const hi = () => {
    // console.log(activeStatus);
  };

  let status = "";

  if (activeStatus.isActive && activeStatus.locked) {
    status = "Active";
  } else if (!activeStatus.isActive && activeStatus.locked) {
    status = "Suspended";
  } else if (!activeStatus.isActive && !activeStatus.locked) {
    status = "Locked";
  }

  //  Call the onStatusChange function to pass the status back to the parent
  useEffect(() => {
    onStatusChange(status);
  }, [status, onStatusChange]);

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      id={`activeInactive-${statusId}`}
      aria-labelledby={`activeInactive-${statusId}`}
      style={{ display: "none" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div
            className="modal-header"
            style={{
              height: "10px",
              backgroundColor: "#006699",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <h5
              className="modal-title"
              id="exampleModalLabel"
              style={{ fontWeight: "bold", color: "white" }}
            >
              CHANGE STATUS
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={hi}
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-between mb-3">
              <div>
                <span style={{ fontWeight: "bold" }}>{userRole}</span>
                <br />
                <span>{username}</span>
              </div>
              <span style={{ fontWeight: "bold" }}>{status}</span>
            </div>
            <div className="modal-body d-flex justify-content-between">
              <button
                className={`btn ${
                  btncolor1 ? "btn-success" : "btn-outline-danger"
                }`}
                disabled={activeStatus.Status === "Active"}
                onClick={handleActiveChange}
              >
                Active
              </button>
              <button
                className={`btn ${
                  btncolor2 ? "btn-danger" : "btn-outline-danger"
                }`}
                onClick={handleInactiveChange}
                disabled={activeStatus.Status === "Suspended"}
              >
                Suspended
              </button>
              <button
                className={`btn ${
                  btncolor3 ? "btn-warning" : "btn-outline-warning"
                }`}
                onClick={handleLockChange}
                disabled={activeStatus.Status === "Locked"}
              >
                Lock
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
