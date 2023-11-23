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
            <form>
              {transactionData.map((transaction, index) => (
                <div key={index}>
                  <div className="mb-3">
                    <label htmlFor={`userName${index}`} className="form-label">
                      User Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`userName${index}`}
                      value={transaction.userName}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor={`transferAmount${index}`} className="form-label">
                      Transfer Amount:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`transferAmount${index}`}
                      value={transaction.transferAmount}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor={`userName${index}`} className="form-label">
                    Transaction Type:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`userName${index}`}
                      value={transaction.transactionType}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor={`userName${index}`} className="form-label">
                    Date:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`userName${index}`}
                      value={transaction.date}
                      readOnly
                    />
                  </div>
                  {/* Add similar blocks for other properties like date, transactionType */}
                </div>
              ))}
            </form>
          </div>

          {/* ... (modal footer) */}
        </div>
      </div>
    </div>
  );
};

export default TransactionView;
