import React from "react";

const AccountStatement = ({ props }) => {
  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  }

  return (
    <div className="col-sm-8 mt-3">
      <div
        className={`card_box position-relative mb_30 `}
        style={{ backgroundColor: "#fd517d" }}
      >
        <div className="box_body w-100">
          <div class="main_content_iner rounded ">
            <div class="container-fluid p-0">
              <div class="row justify-content-center">
                <div class="white_card_body">
                  <div class="QA_section">
                    <div class=" list_header">
                      <div class="box_right d-flex lms_block">
                        <div class="serach_field_2">
                          <div class="search_inner">
                            <form Active="#">
                              <div class="search_field w-50">
                                <input
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
                      </div>
                    </div>

                    <div class="QA_table mb_30">
                      <table class="table lms_table_active3 ">
                        <thead>
                          <tr>
                            <th scope="col">Date/Time</th>
                            <th scope="col">Txn Type</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Balance</th>
                            <th scope="col">Remark</th>
                            <th scope="col">From//To</th>
                          </tr>
                        </thead>
                        {props.map((transaction) => (
                          <tr key={transaction._id}>
                            <th scope="row">
                              <a href="#" className="question_content">
                                {formatDate(transaction.date)}
                              </a>
                            </th>
                            <td>{transaction.transactionType}</td>
                            <td>{transaction.amount}</td>
                            <td>
                              {transaction.transactionType === "Debit"
                                ? transaction.debitBalance
                                : transaction.balance}
                            </td>
                            <td>{transaction.remarks}</td>
                            <td>{`${transaction.From} / ${transaction.To}`}</td>
                          </tr>
                        ))}
                      </table>
                    </div>

                    <div class="col-lg-12">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                          <li class="page-item disabled">
                            <a
                              class="page-link"
                              href="#"
                              tabindex="-1"
                              aria-disabled="true"
                            >
                              Previous
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="loader--ellipsis colord_bg_3 mb_30">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatement;
