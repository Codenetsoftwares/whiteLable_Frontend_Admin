import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import DepositBalance from "./Modal/DepositBalance";
import TransactionServices from "../Services/TransactionServices";
import { useAuth } from "../Utils/Auth";
import AccountServices from "../Services/AccountServices";
import Pagination from "./Pagination";

const MainTransaction = () => {
  const auth = useAuth();
  const [balance, setBalance] = useState(0);
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState();
const [name, setName] = useState('');
console.log(currentPage)

  useEffect(() => {
    if (auth.user) {
      TransactionServices.viewBalance(auth.user.id, auth.user)
        .then((res) => {

          setBalance(res.data.amount.balance);
        })
        .catch((err) => setBalance([]));

      {
        ["superAdmin", "WhiteLabel", "HyperAgent", "SuperAgent", "MasterAgent"].includes(auth.user.roles[0].role) && AccountServices.getAllCreates(auth.user.id,currentPage, name, auth.user)
          .then((res) => {

            setUserList(res.data.user);
            setTotalPages(res.data.totalPages);
          })
          .catch((err) => setUserList([]));
      }
      {
        ["SubAdmin", "SubWhiteLabel", "SubHyperAgent", "SubSuperAgent", "SubMasterAgent"].includes(auth.user.roles[0].role) && AccountServices.getAllCreates(auth.user.createBy,currentPage,name,  auth.user)
          .then((res) => {

            setUserList(res.data.user);
          })
          .catch((err) => setUserList([]));
      }
    }
  }, [auth.user, currentPage, name]);
 
  const handlePageChange = (page) => {
    console.log("Changing to page:", page);
    
      setCurrentPage(page);
    
  };

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
        <div class="white_box_tittle list_header">
                    <h4>User List </h4>
                    <div class="box_right d-flex lms_block">
                      <div class="serach_field_2">
                        <div class="search_inner">
                          <form Active="#">
                            <div class="search_field">
                              <input
                              value={name}
                              onChange={e=>{setName(e.target.value)}}
                                type="text"
                                placeholder="Search content here..."
                              />
                            </div>
                            <button type="submit">
                              {" "}
                              <i class="ti-search"></i>{" "}
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* <div class="add_button ms-2">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#addcategory"
                          class="btn_1"
                        >
                          search
                        </a>
                      </div> */}
                    </div>
                  </div>
          <div className="QA_table mb_30" style={{ overflow: "auto" }}>
            {userList.length > 0 ? (
              <>
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
                {userList.map((data, i) => {
                  const creditRefLength = data.creditRef.length;
                  const partnershipLength = data.partnership.length;
                  return (
                    <Card
                      userName={data.userName}
                      role={data.roles[0].role}
                      key={data.id}
                      creditRef={data.creditRef[creditRefLength - 1]?.value}
                      balance={data.balance}
                      loadBalance={data.loadBalance}
                      refProfitLoss={data.refProfitLoss}
                      userId={data.id}
                      partnership={data.partnership[partnershipLength - 1]?.value}
                      Status={data.Status}
                      creditRefLength={creditRefLength}
                      partnershipLength={partnershipLength}
                    />
                  )
                })}
              </table>
              <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
    />
              </>
            ):(
              
                  <div
                    class="alert text-dark bg-light"
                    role="alert"
                  >
                    <div class="alert-text d-flex justify-content-center">
                      <b> &#128680; No Data Found !! </b>
                    </div>
                  </div>
               
            )}
          </div>
        </div>
      </div>
    

      <DepositBalance />
    </div>
  );
};

export default MainTransaction;
