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

  console.log("----------xxxx>>>AUTH", auth);
  console.log("-------STATUS ID", statusId);

  useEffect(() => {
    AccountServices.getActiveStatus(statusId, auth.user).then((res) => {
      console.log("xxxxxxxxxxxx----DaTa", res.data);

      setActiveStatus(res.data);
      console.log("Line 26=>>", activeStatus);
    });
  }, [statusId, auth.user]);
  
  
  const handleActiveChange = () => {
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
    };

    AccountServices.ActiveInactive(
      data,
      statusId,
      auth.user,
      data.isActive,
      data.locked
    )
      .then((res) => {
        console.log("res==========>", res);
        // alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        console.log("errorrr", err.response.data.message);
        // alert(err.response.data.message);
        return;
      });
  };
  const hi = () => {
    console.log(activeStatus);
  };

  let status = "";

  if (activeStatus.isActive && activeStatus.locked) {
    status = "Active";
  } else if (!activeStatus.isActive && activeStatus.locked) {
    status = "Suspended";
  } else if (!activeStatus.isActive && !activeStatus.locked) {
    status = "Locked";
  }

   // Call the onStatusChange function to pass the status back to the parent
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
        <div class="modal-content">
          <div
            class="modal-header"
            style={{
              height: "10px",
              backgroundColor: "#006699",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <h5
              class="modal-title"
              id="exampleModalLabel"
              style={{ fontWeight: "bold", color: "white" }}
            >
              CHANGE STATUS
            </h5>

            <button
              type="button"
              class="btn-close btn-close-white"
              aria-label="Close"
              onClick={hi}
            ></button>
          </div>
          <div class="modal-body">
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
                disabled={activeStatus.isActive}
                onClick={handleActiveChange}
              >
                Active
              </button>
              <button
                className={`btn ${
                  btncolor2 ? "btn-danger" : "btn-outline-danger"
                }`}
                onClick={handleInactiveChange}
                disabled={!activeStatus.isActive}
              >
                Suspended
              </button>
              <button
                className={`btn ${
                  btncolor3 ? "btn-warning" : "btn-outline-warning"
                }`}
                onClick={handleLockChange}
                disabled={!activeStatus.locked}
              >
                Lock
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-primary"
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
