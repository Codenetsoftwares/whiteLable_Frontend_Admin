import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import DepositBalance from "./Modal/DepositBalance";
import TransactionServices from "../Services/TransactionServices";
import { useAuth } from "../Utils/Auth";
import AccountServices from "../Services/AccountServices";

const MainTransaction = () => {
    const auth = useAuth();
    console.log("=======>>>>>>", auth);
    const [balance, setBalance] = useState(0);
    const [userList, setUserList] = useState([]);
    const TempAuth = auth.user.roles[0].role;
    console.log("Auth from MainTxn=>>", auth);


    useEffect(() => {
        if (auth.user) {
            TransactionServices.viewBalance(auth.user.id, auth.user)
                .then((res) => {
                    console.log("==========>uuuuuu", res.data);
                    setBalance(res.data.amount.balance);
                })
                .catch((err) => setBalance([]));

            AccountServices.getAllCreates(auth.user.id, auth.user)
                .then((res) => {
                    console.log("==========MmmmmHHHHHHHHHH>DDDDDD", res.data.user);
                    setUserList(res.data.user);
                })
                .catch((err) => setUserList([]));

        }
    }, []);
    console.log("first========>UPDATED", userList);
    return (
      <div className="mt-3 mb-3">
        <div className="text-center ">
          <p>Total Balance</p>
          <h4>₹{balance}</h4>
          {auth.user.roles &&
            auth.user.roles.length > 0 &&
            auth.user.roles[0].role === "superAdmin" && (
              <button
                data-bs-toggle="modal"
                data-bs-target="#depositBalance"
                className="btn btn-danger"
                aria-label="Close"
              >
                ADD CASH
              </button>
            )}
        </div>
        <div className="white_card_body m-3">
          <div className="QA_section">
            <div className="QA_table mb_30" style={{ overflow: "auto" }}>
              {userList.length > 0 && (
                <table className="table lms_table_active3 table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col" className="text-bolder fs-6 ">
                        Username
                      </th>
                      <th
                        scope="col"
                        className="text-bolder fs-6 text-center"
                        style={{ width: "150px" }}
                      >
                        Credit Ref.
                      </th>
                      <th
                        scope="col"
                        className="text-bolder fs-6 text-center"
                        style={{ width: "150px" }}
                      >
                        Partnership
                      </th>
                      <th scope="col" className="text-bolder fs-6 text-center">
                        Balance
                      </th>
                      <th scope="col" className="text-bolder fs-6 text-center">
                        Exposeure
                      </th>
                      <th scope="col" className="text-bolder fs-6 text-center">
                        Avail. Bal.
                      </th>
                      <th scope="col" className="text-bolder fs-6 text-center">
                        Ref. P/L
                      </th>
                      <th scope="col" className="text-bolder fs-6 text-center">
                        Status
                      </th>
                      <th scope="col" className="text-bolder fs-6 text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  {userList.map((data, i) => (
                    <Card
                      userName={data.userName}
                    //   role={data.roles[0]}
                      key={data.id}
                      creditRef={data.creditRef[0]?.value}
                      balance={data.balance}
                      loadBalance={data.loadBalance}
                      refProfitLoss={data.refProfitLoss}
                      userId={data.id}
                      partnership={data.partnership[0]?.value}
                      Status={data.Status}
                    />
                  ))}
                </table>
              )}
            </div>
          </div>
        </div>

        <DepositBalance />
      </div>
    );
};

export default MainTransaction;
