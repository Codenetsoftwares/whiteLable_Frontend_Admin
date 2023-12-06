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
      {/* card */}
      <div class="card w-100 rounded">
        <div
          class="card-heade text-white p-1"
          style={{ backgroundColor: "#26416e" }}
        >
          <b>&nbsp;&nbsp;Account Statement</b>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="white_card_body">
              {/* Table */}
              <div class="QA_section">
                <div class="QA_table mb_30">
                  <table class="table lms_table_active3 ">
                    <thead>
                      <tr
                        style={{
                          backgroundColor: "#e6e9ed",
                          color: "#5562a3",
                        }}
                      >
                        <th scope="col">
                         <b>Date/Time</b>
                        </th>
                        <th scope="col">
                          <b>Deposit</b>
                        </th>
                        <th scope="col">
                          <b>Withdraw</b>
                        </th>
                        <th scope="col">
                          <b>Balance</b>
                        </th>
                        <th scope="col">
                          <b>Remark</b>
                        </th>
                        <th scope="col">
                          <b>From//To</b>
                        </th>
                      </tr>
                    </thead>
                    {props.map((transaction) => (
                      <tr key={transaction._id}>
                        <th scope="row">
                          <a href="#" className="question_content">
                            {formatDate(transaction.date)}
                          </a>
                        </th>
                        {transaction.transactionType === "Debit" ? (
                          <>
                            <td></td>
                            <td className="text-danger">
                              {transaction.amount}
                            </td>
                          </>
                        ) : (
                          <>
                            <td>{transaction.amount}</td>
                            <td></td>
                          </>
                        )}

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
                {/* Table */}
              </div>
            </div>
          </li>
          <li class="list-group-item">
            {/* Pagiantion */}
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
            {/* Pagiantion */}
          </li>
        </ul>
      </div>
      {/* card */}
    </div>
  );
};

export default AccountStatement;
