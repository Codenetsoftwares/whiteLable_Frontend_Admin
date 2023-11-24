import React, { useState, useEffect }  from "react";
import { useAuth } from '../../Utils/Auth';
import TransactionServices from "../../Services/TransactionServices";

const TransactionView = () => {
  const auth = useAuth();
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    TransactionServices.viewTransactions(auth.user.id, auth.user).then((res) => {
      console.log('xxxxxxxxxxxx', res.data);
      setTransactionData(res.data);
    });
  }, []);

  console.log('>>>>>>>>>>>>>', transactionData);

  return (
    <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <table className="table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Transfer Amount</th>
                <th>Transaction Type</th>
                <th>Date</th>
                {/* Add similar headers for other properties */}
              </tr>
            </thead>
            <tbody>
              {transactionData.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.userName}</td>
                  <td>{transaction.transferAmount}</td>
                  <td>{transaction.transactionType}</td>
                  <td>{transaction.date}</td>
                  {/* Add similar cells for other properties */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* ... (modal footer) */}
      </div>
    </div>
  </div>
  
  );
};

export default TransactionView;
