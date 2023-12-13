import React from "react";
import AccountServices from "../../../Services/AccountServices";
import Authform from "../../../Components/AuthForm";


const Login = () => {
  return (
    <Authform purpose={"login"} authFormApin={AccountServices.AllLogin} />
  );
};

export default Login;
