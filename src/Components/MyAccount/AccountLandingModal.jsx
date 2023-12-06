import React, { useState, useEffect } from "react";
import AccountStatement from "./AccountStatement";
import { Link } from "react-router-dom";
import ActivityLog from "./ActivityLog";
import AccountProfile from "./AccountProfile";
import { useAuth } from "../../Utils/Auth";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import MyAccountServices from "../../Services/MyAccountServices";

const AccountLandingModal = () => {
  let componentToRender;
  const { userId } = useParams();
  const auth = useAuth();
  console.log("13=>>>", userId);
  const [documentView, setDocumentView] = useState([]);
  const [toggle, settoggle] = useState(1);
  const [activeItem, setActiveItem] = useState("statement");
  const Id = userId.userId;
  useEffect(() => {
    MyAccountServices.getAccountStatement(userId, auth.user)
      .then((res) => setDocumentView(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [userId, auth]);
  console.log("24=>>>", documentView);

  const handelStatement = () => {
    settoggle(1);
    setActiveItem("statement");

    console.log(toggle);
  };
  const handelActivity = () => {
    settoggle(2);
    setActiveItem("activity");
  };
  const handelProfile = () => {
    settoggle(3);
    setActiveItem("profile");
  };

  if (toggle === 1) {
    componentToRender = <AccountStatement props={documentView} />;
  } else if (toggle === 2) {
    componentToRender = <ActivityLog />;
  } else if (toggle === 3) {
    componentToRender = <AccountProfile />;
  }

  return (
    <div className="container">
      <div className="row row-no-gutters">
        {/* First Section */}
        <div className="col-sm-4">
          {/* <div className="white_card_body">
            <Link to="#">
              <div
                className="alert text-white bg-danger w-75 mt-3"
                role="alert"
                style={{ cursor: "pointer" }}
                onClick={handelStatement}
              >
                <div className="alert-text">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="loader--facebook colord_bg_3">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div className="col mt-4 text-black">
                      <h6 className="text-dark">
                        <b>Account Statement</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="#">
              <div
                className="alert text-white bg-warning w-75"
                role="alert"
                style={{ cursor: "pointer" }}
                onClick={handelActivity}
              >
                <div className="alert-text">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="loader--facebook colord_bg_4">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div className="col mt-4">
                      <h6 className="text-dark">
                        <b>Activity Log</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="#">
              <div
                className="alert text-white bg-success w-75"
                role="alert"
                style={{ cursor: "pointer" }}
                onClick={handelProfile}
              >
                <div className="alert-text">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="loader--facebook colord_bg_2">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div className="col mt-4">
                      <h6 className="text-dark">
                        <b>Profile</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div> */}

          <div class="card mt-3" style={{ width: "18rem" }}>
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item text-white fs-6"
                style={{ backgroundColor: "#26416e" }}
              >
                My Account
              </li>
              <li
                className={`list-group-item`}
                style={{
                  cursor: "pointer",
                  backgroundColor: activeItem === "statement" ? "#d1d9f0" : "",
                }}
                onClick={handelStatement}
              >
                Account Statement
              </li>
              <li
                className={`list-group-item `}
                style={{
                  cursor: "pointer",
                  backgroundColor: activeItem === "activity" ? "#d1d9f0" : "",
                }}
                onClick={handelActivity}
              >
                Activity Log
              </li>
              <li
                className={`list-group-item`}
                style={{
                  cursor: "pointer",
                  backgroundColor: activeItem === "profile" ? "#d1d9f0" : "",
                }}
                onClick={handelProfile}
              >
                Profile
              </li>
            </ul>
          </div>
        </div>

        {/* Second Section */}

        {componentToRender}
      </div>
    </div>
  );
};

export default AccountLandingModal;
