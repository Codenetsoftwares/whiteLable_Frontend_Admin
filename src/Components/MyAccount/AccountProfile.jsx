import React, { useState } from "react";
import EditIcon from "../../Assets/EditIcon.png";
import MyAccountServices from "../../Services/MyAccountServices";
import { useAuth } from "../../Utils/Auth";

const AccountProfile = ({ props, UserName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [passtoggle, setPassToggle] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  console.log("Im here in the Line no.10 of profile", UserName);
  const auth = useAuth();

  const funChangePassword = () => {
    console.log("funChangePassword clicked line 14");
    const data = {
      userName: UserName,
      password: newPassword,
    };
    MyAccountServices.changePassword(data, auth.user)
      .then((res) => {
        console.log("response from Profile page password change ==========>", res);
        alert("Password Changed Successfully");
        // setPassToggle(false);
      })

      .catch((err) => {
        console.log("errorrr", err.response.data.message);
        alert(err.response.data.message);
      });
  };

  const funShowPasswordChangeOption = () => {
    setPassToggle(false);
  };

  return (
    <div className="col-sm-8 mt-3">
      {/* card */}
      <div class="card w-100 rounded">
        <div
          class="card-heade text-white p-1"
          style={{ backgroundColor: "#26416e" }}
        >
          <b>&nbsp;&nbsp;Account Details</b>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-3">
            <b style={{ color: "#1c3763" }}>Name : </b> <b>{props.userName}</b>
          </li>
          <li class="list-group-item p-3">
            <b style={{ color: "#1c3763" }}>Currency : </b>{" "}
            <b>No Data From Serverside</b>
          </li>
          <li class="list-group-item p-3">
            <b style={{ color: "#1c3763" }}>Exposure Limit : </b>{" "}
            <b>No Data From Serverside</b>
          </li>
          <li class="list-group-item p-3">
            <b style={{ color: "#1c3763" }}>Mobile Number : </b>
            <b>No Data From Serverside</b>
          </li>
          {passtoggle ? (
            <li class="list-group-item p-3">
              <b style={{ color: "#1c3763" }}>Password : </b>
              <b>********</b>{" "}
              <img
                onClick={funShowPasswordChangeOption}
                src={EditIcon}
                style={{ width: isHovered ? "25px" : "20px" }}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                alt="Edit Icon"
                title="Change Password"
              />
            </li>
          ) : (
            <li class="list-group-item p-3">
              <form class="form-inline">
                <div class="form-group d-flex w-50">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword2"
                    placeholder=" New Password "
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                  &nbsp; &nbsp;
                  <button
                    type="submit"
                    class="btn btn-primary ml-5"
                    onClick={funChangePassword}
                  >
                    Change
                  </button>
                  &nbsp; &nbsp;
                  <button
                    type="submit"
                    class="btn btn-primary ml-5"
                    onClick={() => {
                      setPassToggle(false);
                    }}
                  >
                    Back
                  </button>
                </div>
              </form>
            </li>
          )}
        </ul>
      </div>
      {/* card */}
    </div>
  );
};

export default AccountProfile;
