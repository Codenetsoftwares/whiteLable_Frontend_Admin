import React, { useState, useEffect }   from 'react'
import TransactionServices from '../../Services/TransactionServices';
import { useAuth } from '../../Utils/Auth';

const DemoTransView = () => {
    const auth = useAuth();
    const [transactionData, setTransactionData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          let apiEndpoint = '';
  
          switch (auth.user.role) {
            case 'superadmin':
              apiEndpoint = 'superadmin';
              break;
            case 'whitelabel':
              apiEndpoint = 'whitelabel';
              break;
            case 'hyperagent':
              apiEndpoint = 'hyperagent';
              break;
            case 'superagent':
              apiEndpoint = 'superagent';
              break;
            default:
              // Handle other roles if needed
              break;
          }
  
          const res = await TransactionServices.viewTransactions(auth.user.id, apiEndpoint, auth.user);
          setTransactionData(res.data);
        } catch (error) {
          console.error("Error fetching transaction data:", error);
        }
      };
  
      fetchData();
    }, [auth.user.id, auth.user.role]);
  
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
  
}

export default DemoTransView