import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Pages/Accounts/Login/Login.css";

const Authform = ({ purpose, authFormApin }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleKeyDown = (e) => {
    // If Enter key is pressed, trigger form submission
    if (e.key === "Enter") {
      handleAuthForm(e);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setRole(value);
  };

  const handleAuthForm = () => {
    const data = {
      userName: username,
      password: password,
      roles: [role],
    };

    authFormApin(data, auth.user)
      .then((res) => {
        console.log(res);
        if (purpose === "login") {
          localStorage.setItem("user", res.data.token.accessToken);
          toast.success("Login Successful.");
          navigate("/welcome");
        } else if (purpose === "userLogin") {
          toast.success("User Login Successful.");
        } else if (purpose === "userCreate") {
          toast.success("User Create Successful.");
        } else {
          toast.success("Create Successful.");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <div class="main_content_iner ">
      <div class="container-fluid mt-6">
        <div class="col-lg-12">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="modal-content cs_modal">
                <div class="modal-header justify-content-center theme_bg_1">
                  <h5 class="modal-title text_white">
                    {purpose === "create" && "Create"}
                    {purpose === "userCreate" && "Create User"}
                    {purpose === "login" && "Log In"}
                    {purpose === "userLogin" && "User Log In"}
                  </h5>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div class="">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                    {purpose === "create" && (
                      <div class="">
                        <select
                          class="form-select"
                          style={{ border: "1px solid #F1F3F5" }}
                          value={role || ""}
                          autoComplete="off"
                          onChange={handleChange}
                        >
                          <option selected>Open this select menu</option>
                          {auth.user.role.some(
                            (role) => role === "superAdmin"
                          ) && <option value="WhiteLabel">WhiteLabel</option>}
                          {auth.user.role.some(
                            (role) =>
                              role === "superAdmin" || role === "WhiteLabel"
                          ) && <>
                              {auth.user.role.some(
                                (role) => role === "WhiteLabel"
                              ) && <option value="SubWhiteLabel">Sub WhiteLabel</option>}
                              <option value="HyperAgent">HyperAgent</option></>}
                          {auth.user.role.some(
                            (role) =>
                              role === "superAdmin" ||
                              role === "WhiteLabel" ||
                              role === "HyperAgent"
                          ) && <>{auth.user.role.some(
                            (role) => role === "HyperAgent"
                          ) && <option value="SubHyperAgent">Sub HyperAgent</option>}
                              <option value="SuperAgent">SuperAgent</option></>}
                          {auth.user.role.some(
                            (role) =>
                              role === "superAdmin" ||
                              role === "WhiteLabel" ||
                              role === "HyperAgent" ||
                              role === "SuperAgent"
                          ) && <>{auth.user.role.some(
                            (role) => role === "SuperAgent"
                          ) && <option value="SubSuperAgent">Sub SuperAgent</option>}
                              <option value="MasterAgent">MasterAgent</option></>}
                          {auth.user.role.some(
                            (role) => role === "MasterAgent"
                          ) && <option value="SubMasterAgent">Sub MasterAgent</option>}
                        </select>
                      </div>
                    )}

                    <a
                      class="btn_1 full_width text-center"
                      style={{ cursor: "pointer" }}
                      onClick={handleAuthForm}
                    >
                      {purpose === "create" && "Create"}
                      {purpose === "userCreate" && "Create User"}
                      {purpose === "login" && "Log In"}
                      {purpose === "userLogin" && "User Log In"}
                    </a>
                    {/* <p>Need an account? <a data-toggle="modal" data-target="#sing_up" data-dismiss="modal"  href="#"> Sign Up</a></p> */}
                    {purpose === ("login" || "userLogin") && (
                      <div class="text-center">
                        <p></p>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#forgot_password"
                          data-dismiss="modal"
                          class="pass_forget_btn"
                        >
                          Forget Password?
                        </a>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authform;
