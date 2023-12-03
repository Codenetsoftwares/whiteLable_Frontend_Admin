import React, { useState } from "react";
import TransferBalance from "./Modal/TransferBalance";
import EditCreditRefBalance from "./Modal/EditCreditRefBalance";
import EditPartnerShipBalance from "./Modal/EditPartnerShipBalance";
import { useAuth } from "../Utils/Auth";
import AccountServices from "../Services/AccountServices";
import { toast } from "react-toastify";
import StatusModal from "./Modal/StatusModal";
import { Link } from "react-router-dom";
const Card = ({
  role,
  userId,
  userName,
  statusId,
  creditRef,
  balance,
  loadBalance,
  refProfitLoss,
}) => {
  const auth = useAuth();
  const [userid, setUserId] = useState("");
  const [userID, setUserID] = useState("");
  const [status, setStatus] = useState("");
  console.log("99999999LOADBALAN", loadBalance);

  const handleId = (id) => {
    setUserId(id);
  };

  const handlestatus = (userId) => {
    setUserId(userId);
  };

  const handleUserName = (UserName) => {
    setUserID(UserName);
  };
  console.log("OOOOOOOOOOOUID--->", userID);
  const handeldelete = (id) => {
    // e.preventDefault();
    console.log("Line 88", id);
    const userConfirmed = window.confirm(
      "Are You Sure You Want to Delete This Agent?"
    );
    if (userConfirmed) {
      console.log("Im here in line 94");
      AccountServices.deleteAgent({ requestId: id }, auth.user)
        .then((res) => {
          if (res.status === 201) {
            alert("Agent Deleted approval sent!");
            window.location.reload();
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  return (
    <tbody>
      <tr>
        <th scope="row" className="">
          <button
            className="border border-1 w-75 text-center bg-success rounded-pill "
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            {role}
          </button>
          <p>{userName}</p>
        </th>
        <td scope="row" className="fs-6 text-center">
          <span>{creditRef}</span>
          <span className="m-2">
            <button
              className="border border-0 bg-white"
              data-bs-toggle="modal"
              data-bs-target={`#EditCreditRefBalance-${userId}`}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </span>
          <span className="m-2">
            <i class="fa-regular fa-eye"></i>
          </span>
        </td>
        <td scope="row" className="fs-6 text-center">
          <span>100</span>
          <span className="m-2">
            <i
              className="fa-solid fa-pen-to-square"
              data-bs-toggle="modal"
              data-bs-target="#EditPartnerShipBalance"
              aria-label="Close"
              z
            ></i>
          </span>
          <span className="m-2">
            <i class="fa-regular fa-eye"></i>
          </span>
        </td>
        <td scope="row" className="fs-6 text-center">
          {loadBalance}
        </td>
        <td scope="row" className="fs-6 text-center text-danger">
          0
        </td>
        <td scope="row" className="fs-6 text-center">
          {balance}
        </td>
        <td scope="row" className="fs-6 text-center text-danger">
          {refProfitLoss}
        </td>
        <td scope="row" className="fs-6 text-center">
          <p className="border border-1 w-75 text-center bg-success rounded-pill">
            Active
          </p>
        </td>
        <td scope="row" className="fs-6 text-center">
          <span className="mx-1">
            <button
              data-bs-toggle="modal"
              data-bs-target={`#transferbalance-${userName}`}
              className="btn border border-2 rounded"
              title="Addmoney"
            >
              <i class="fa-solid fa-circle-dollar-to-slot"></i>
            </button>
          </span>
          <span className="mx-1">
            <button
              className="btn border border-2 rounded"
              title="Setting"
              type="button"
              data-toggle="modal"
              data-target={`#activeInactive-${userId}`}
              onClick={handlestatus}
            >
              <i className="fa-thin fas fa-gear"></i>
            </button>
          </span>
          <span className="mx-1">
            <Link to={`/account-landing/${userId}`}>
              <button className="btn border border-2 rounded" title="Profile">
                <i class="fa-solid fa-user"></i>
              </button>
            </Link>
          </span>
          <span className="mx-1">
            <button className="btn border border-2 rounded" title="Profile">
              <i class="fa-solid fa-user"></i>
            </button>
          </span>
          <span className="mx-1">
            <button
              className="btn border border-2 rounded"
              title="Delete"
              onClick={(e) => {
                handeldelete(userId);
              }}
            >
              <i class="fa-light fas fa-trash"></i>
            </button>
          </span>
          <span className="mx-1">
            <button className="btn border border-2 rounded" title="Wallet">
              <i class="fa-regular fas fa-wallet"></i>
            </button>
          </span>
        </td>
      </tr>

      <TransferBalance
        userName={userName}
        key={`transferbalance-${userName}`}
      />
      {/* <SelectModal userId={userId} key={`activeInactive-${userId}`}/> */}
      <StatusModal
        statusId={userId}
        username={userName} // Pass the username as a prop
        userRole={role}
        // key={`activeInactive-${userId}`}
      />

      <EditCreditRefBalance
        userId={userId}
        key={`EditCreditRefBalance-${userId}`}
      />
      <EditPartnerShipBalance />
    </tbody>
  );
};

export default Card;
