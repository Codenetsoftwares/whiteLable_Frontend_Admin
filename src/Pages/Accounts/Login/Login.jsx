// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";
import AccountServices from "../../../Services/AccountServices";
import Authform from "../../../Components/AuthForm";


const Login = () => {

  // const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const handleLogin = () => {



  //   const data = {
  //     userName: username,
  //     password: password,
  //   };

  //   AccountServices.AllLogin(data).then((res) => {
  //     console.log(res);
  //     localStorage.setItem("user", res.data.token.accessToken);
  //     alert("Login successful.");

  //     navigate("/welcome");
  //   })


  //     .catch((err) => {
  //       console.log(err);
  //     });


  // };
  return (
    // <div>
    //   <div class="col-lg-12 mt-5">
    //     <div class="white_box mb_30">
    //       <div class="row justify-content-center">
    //         <div class="col-lg-6">
    //           <div class="modal-content cs_modal">
    //             <div class="modal-header justify-content-center theme_bg_1">
    //               <h5 class="modal-title text_white">Log in</h5>
    //             </div>
    //             <div class="modal-body">
    //               <form>
    //                 <div class="">
    //                   <input
    //                     type="text"
    //                     class="form-control"
    //                     placeholder="Enter your Username"
    //                     value={username}
    //                     onChange={(e) => setUsername(e.target.value)}
    //                   />
    //                 </div>
    //                 <div class="">
    //                   <input
    //                     type="password"
    //                     class="form-control"
    //                     placeholder="Password"
    //                     value={password}
    //                     onChange={(e) => setPassword(e.target.value)}

    //                   />
    //                 </div>

    //                 <a
    //                   class="btn_1 full_width text-center"
    //                   onClick={handleLogin}
    //                 >
    //                   Log in
    //                 </a>
    //                 {/* <p>Need an account? <a data-toggle="modal" data-target="#sing_up" data-dismiss="modal"  href="#"> Sign Up</a></p> */}
    //                 <div class="text-center">
    //                   <a
    //                     href="#"
    //                     data-toggle="modal"
    //                     data-target="#forgot_password"
    //                     data-dismiss="modal"
    //                     class="pass_forget_btn"
    //                   >
    //                     Forget Password?
    //                   </a>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Authform purpose={"login"} authFormApin={AccountServices.AllLogin} />
  );
};

export default Login;
