import React, { useState, useEffect } from "react";
import { useAuth } from "../../Utils/Auth";
import AccountServices from "../../Services/AccountServices";

const SelectModal = ({ userId, selectedStatus, setSelectedStatus }) => {
  const [isactive, setIsactive] = useState(false);
  const [Lock, setLock] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeStatus, setActiveStatus] = useState([]);
  const auth = useAuth();
  // console.log("=========>>I AM HERE",id)

  useEffect(() => {
    AccountServices.getActiveStatus(auth.user.id, auth.user).then((res) => {
      console.log("xxxxxxxxxxxx", res.data);
      setActiveStatus(res.data);
    });
  }, []);
  console.log("============>status", activeStatus);
  const handleButtonClick = (data) => {
    setIsactive(data);
  };
  console.log(isactive);

  const handleButtonChange = (data) => {
    setLock(data);
  };
  console.log("LOCKED", Lock);

  const handleSubmit = () => {
    console.log("lock", Lock);
    console.log("isActive", isactive);
    let Data;

    if (isactive === false) {
      Data = {
        isActive: isactive,
      };
    } else if (isactive) {
      Data = {
        isActive: isactive,
      };
    } else if (Lock === false) {
      Data = {
        locked: Lock,
      };
    } else {
      Data = {
        locked: Lock,
      };
    }

    AccountServices.ActiveInactive(Data, userId, auth.user)
      .then((res) => {
        console.log("res==========>", res);
        alert(res.data.message);
        window.location.reload();
      })

      .catch((err) => {
        console.log("errorrr", err.response.data.message);
        alert(err.response.data.message);
        return;
      });
    // console.log('===============DATA',Data);
  };

  return (
    <div
      className="modal fade"
      id={`activeInactive-${userId}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby={`activeInactive-${userId}`}
      
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div
            className="modal-header"
            style={{ backgroundColor: "#006699", color: "white" }}
          >
            <h5
              className="modal-title"
              style={{ fontWeight: "bold", color: "white" }}
            >
              Change Status
            </h5>
          </div>
          <div className="modal-body d-flex justify-content-center align-items-center">
            {/* {activeStatus.locked === false?(<button type="button" className="btn btn-outline-danger mx-2"  onClick={() =>handleButtonChange(true)}>UnLocked</button>):({activeStatus.isActive?})} */}
            {activeStatus.isactive ? (
              <button
                type="button"
                className="btn btn-outline-secondary mx-2"
                onClick={() => handleButtonClick(false)}
              >
                Inactive
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-success mx-2"
                onClick={() => handleButtonClick(true)}
              >
                Active
              </button>
            )}
            {activeStatus.locked ? (
              <button
                type="button"
                className="btn btn-outline-danger mx-2"
                onClick={() => handleButtonChange(false)}
              >
                Locked
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-danger mx-2"
                onClick={() => handleButtonChange(true)}
              >
                UnLocked
              </button>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => handleSubmit()}
            >
              CHANGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectModal;
        