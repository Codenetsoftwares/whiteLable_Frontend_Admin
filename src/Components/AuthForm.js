import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/Auth";
const Authform = ({ purpose, authFormApin }) => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setRole(value);
    };

    const handleAuthForm = () => {

        const data = {
            userName: username,
            password: password,
            roles: [role]
        };

        authFormApin(data, auth.user).then((res) => {
            console.log(res);
            if (purpose === "login") {
                localStorage.setItem("user", res.data.token.accessToken);
                alert("Login Successful.");
                navigate("/welcome");
            }
            else if (purpose === "userLogin") {
                alert("User Login Successful.");
            }
            else if (purpose === "userCreate") {
                alert("User Create Successful.");
            }
            else {
                alert("Create Successful.");

            }
        })
            .catch((err) => {
                console.log(err);
            });


    };
    return (
        <div>
            <div class="col-lg-12 mt-5">
                <div class="white_box mb_30">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="modal-content cs_modal">
                                <div class="modal-header justify-content-center theme_bg_1">
                                    <h5 class="modal-title text_white">{purpose === "create" && "Create"}
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

                                            />
                                        </div>
                                        {
                                            purpose === "create" &&
                                            <div class="">
                                                <select class="form-select" style={{ border: "1px solid #F1F3F5" }} value={role || ""}
                                                    autoComplete="off"
                                                    onChange={handleChange}>
                                                    <option selected>Open this select menu</option>
                                                    {auth.user.role.some(
                                                        (role) =>
                                                            role === "superAdmin"
                                                    ) && <option value="WhiteLabel">WhiteLabel</option>}
                                                    {auth.user.role.some(
                                                        (role) =>
                                                            role === "superAdmin" ||
                                                            role === "WhiteLabel"
                                                    ) && <option value="HyperAgent">HyperAgent</option>}
                                                    {auth.user.role.some(
                                                        (role) =>
                                                            role === "superAdmin" ||
                                                            role === "WhiteLabel" ||
                                                            role === "HyperAgent"
                                                    ) && <option value="SuperAgent">SuperAgent</option>}
                                                    {auth.user.role.some(
                                                        (role) =>
                                                            role === "superAdmin" ||
                                                            role === "WhiteLabel" ||
                                                            role === "HyperAgent" ||
                                                            role === "SuperAgent"
                                                    ) && <option value="MasterAgent">MasterAgent</option>}
                                                </select>
                                            </div>
                                        }

                                        <a
                                            class="btn_1 full_width text-center"
                                            onClick={handleAuthForm}
                                        >
                                            {purpose === "create" && "Create"}
                                            {purpose === "userCreate" && "Create User"}
                                            {purpose === "login" && "Log In"}
                                            {purpose === "userLogin" && "User Log In"}
                                        </a>
                                        {/* <p>Need an account? <a data-toggle="modal" data-target="#sing_up" data-dismiss="modal"  href="#"> Sign Up</a></p> */}
                                        {purpose === ("login" || "userLogin") && < div class="text-center">
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
                                        }

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Authform;
