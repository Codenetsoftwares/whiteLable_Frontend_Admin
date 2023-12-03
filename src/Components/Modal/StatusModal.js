import React, { useState, useEffect } from "react";
import { useAuth } from "../../Utils/Auth";
import AccountServices from "../../Services/AccountServices";
const StatusModal = ({ statusId,  username, userRole }) => {
  const auth = useAuth();
  const [userStatus, setUserStatus] = useState({
    active: true,
    suspended: false,
    locked: false,
  });
  const [activeStatus, setActiveStatus] = useState([]);

  console.log("----------xxxx>>>AUTH", auth);
  console.log("-------STATUS ID", statusId);
  console.log('pppppppppp',username)
  console.log('sssssssssss',userRole)

  useEffect(() => {
    AccountServices.getActiveStatus(auth.user.id, auth.user).then((res) => {
      console.log("xxxxxxxxxxxx----DaTa", res.data);
      setActiveStatus(res.data);
    });
  }, []);
  console.log(']]]]]]]]]]]]st',activeStatus)

  const handleStatusChange = (statusType) => {
    if (statusType === "active") {
      setUserStatus({
        active: true,
        suspended: false,
        locked: false,
      });
    } else if (statusType === "suspended") {
      setUserStatus({
        active: false,
        suspended: true,
        locked: false,
      });
    } else if (statusType === "locked") {
      setUserStatus({
        active: false,
        suspended: false,
        locked: true,
      });
    }
  };

  const handleUnlock = () => {
    setUserStatus({
      active: true,
      suspended: false,
      locked: false,
    });
  };

  const handleChange = () => {
    // Add your logic to trigger the API call with the updated user status
    // For example, you can make a POST request to update the user status
    // using your API endpoint and the user status in the state.
    // Make sure to include any necessary authentication headers.

    const { active, suspended, locked } = userStatus;

    let Data;

    if (active && !suspended && !locked) {
      // If the user is active
      Data = {
        adminId: statusId,
        isActive: true,
        locked: false,
      };
      // alert("Admin activated successfully");
    } else if (!active && suspended && !locked) {
      // If the user is suspended
      Data = {
        adminId: statusId,
        isActive: false,
        locked: false,
      };
      // alert("Admin suspended successfully");
    } else if (!active && !suspended && locked) {
      // If the user is locked
      Data = {
        adminId: statusId,
        isActive: false,
        locked: true,
      };
      // alert("Admin locked successfully");
    } else if (!active && !suspended && !locked) {
      // If the user is unlocked
      Data = {
        adminId: statusId,
        isActive: false,
        locked: false,
      };
      // alert("Admin unlocked successfully");
    } else {
      // If none of the above conditions match, show an error alert
      alert("Invalid state");
      console.error("Invalid state");
      return;
    }
    AccountServices.ActiveInactive(Data, statusId, auth.user)
    .then((res) => {
      console.log("res==========>", res);
      alert(res.data.message);
      // window.location.reload();
    })

    .catch((err) => {
      console.log("errorrr", err.response.data.message);
      alert(err.response.data.message);
      return;
    });
  }
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
            ></button>
          </div>
          <div class="modal-body">
            <div className="container mt-1 mb-6">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                }}
              >
                <div>
                  <p className="border border-1 w-100 text-center bg-success rounded-pill">
                    {userRole}
                  </p>
                  <p>{username}</p>
                </div>

                <div>
                  <p
                    className="btn btn-success position-relative"
                    style={{ marginRight: "10px" }}
                  >
                    Active
                    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle"></span>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="align-middle"
              role="group"
              aria-label="User Status"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                type="button"
                className={`btn ${
                  userStatus.active ? "btn-success" : "btn-outline-success"
                }`}
                style={{ margin: "10px 20px" }}
                onClick={() => handleStatusChange("active")}
                
              >
                <i className="fas fa-check-circle"></i>
                <div> Active</div>
              </button>

              <button
                type="button"
                className={`btn ${
                  userStatus.suspended
                    ? "btn-danger"
                    : "btn-outline-danger"
                }`}
                style={{ margin: "10px 10px" }}
                onClick={() => handleStatusChange("suspended")}
                
              >
                <i className="fa fa-user-times"></i>
                <div>Suspended </div>
              </button>

              <button
                type="button"
                className={`btn ${
                  userStatus.locked ? "btn-secondary" : "btn-outline-secondary"
                }`}
                style={{ margin: "10px 20px" }}
                onClick={() => {
                  if (userStatus.locked) {
                    handleUnlock();
                  } else {
                    handleStatusChange("locked");
                  }
                }}
              >
                {userStatus.locked ? (
                  <>
                    <i className="fas fa-lock"></i>
                    <div>Locked</div>
                  </>
                ) : (
                  <>
                    <i className="fas fa-unlock"></i>
                    <div>Unlock</div>
                  </>
                )}
              
              
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit"  onClick={handleChange}>
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
