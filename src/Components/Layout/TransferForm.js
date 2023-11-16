import React, { useState, useEffect } from 'react';
import axios from "axios";

const TransferForm = () => {
 
    const [formData, setFormData] = useState({
        adminUserName: "",
        whiteLabelUsername: "",
        hyperAgentUserName: "",
        SuperAgentUserName: "",
        masterAgentUserName: "",
        trnsfAmnt: "",
      });
      
      const [transferResult, setTransferResult] = useState(null);
      const [walletBalance, setWalletBalance] = useState({
        superAdmin: 1000, // replace with actual balance
        whiteLabel: 500, // replace with actual balance
        hyperAgent: 300, // replace with actual balance
        SuperAgent: 200, // replace with actual balance
        masterAgent: 100, // replace with actual balance
      });
      
      
      
      
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post("/api/transfer-amount", formData, {
            headers: {
              // Add any necessary headers here
            },
          });
    
          setTransferResult(response.data);
          // Update wallet balances
          updateWalletBalances();
    
          // Reset the form after successful transfer
          setFormData({
            adminUserName: "",
            whiteLabelUsername: "",
            hyperAgentUserName: "",
            SuperAgentUserName: "",
            masterAgentUserName: "",
            trnsfAmnt: "",
          });

        } catch (error) {
          console.error("Error transferring amount:", error.response.data);
          setTransferResult({ code: error.response.data.code, message: error.response.data.message });
        }
      };
      const updateWalletBalances = async () => {
        // Fetch and update wallet balances from the backend
        try {
          const walletBalancesResponse = await axios.get("/api/get-wallet-balances");
          setWalletBalance(walletBalancesResponse.data);
        } catch (error) {
          console.error("Error fetching wallet balances:", error.response.data);
        }
      };
    

      
  useEffect(() => {
    // Fetch initial wallet balances
    updateWalletBalances();
  }, []);
    
 
 
 
    return (
        <div>
          <div style={{ textAlign: "right", padding: "10px" }}>
            <p>Super Admin: {walletBalance.superAdmin} 💰</p>
            <p>White Label: {walletBalance.whiteLabel} 💰</p>
            <p>Hyper Agent: {walletBalance.hyperAgent} 💰</p>
            <p>Super Agent: {walletBalance.SuperAgent} 💰</p>
            <p>Master Agent: {walletBalance.masterAgent} 💰</p>
          </div>
    
          <form onSubmit={handleSubmit}>
            <div>
              <label>Super Admin Username:</label>
              <input
                type="text"
                name="adminUserName"
                value={formData.adminUserName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>White Label Username:</label>
              <input
                type="text"
                name="whiteLabelUsername"
                value={formData.whiteLabelUsername}
                onChange={handleChange}
                disabled={!formData.adminUserName}
              />
            </div>
            <div>
              <label>Hyper Agent Username:</label>
              <input
                type="text"
                name="hyperAgentUserName"
                value={formData.hyperAgentUserName}
                onChange={handleChange}
                disabled={!formData.whiteLabelUsername}
              />
            </div>
            <div>
              <label>Super Agent Username:</label>
              <input
                type="text"
                name="SuperAgentUserName"
                value={formData.SuperAgentUserName}
                onChange={handleChange}
                disabled={!formData.hyperAgentUserName}
              />
            </div>
            <div>
              <label>Master Agent Username:</label>
              <input
                type="text"
                name="masterAgentUserName"
                value={formData.masterAgentUserName}
                onChange={handleChange}
                disabled={!formData.SuperAgentUserName}
              />
            </div>
            <div>
              <label>Transfer Amount:</label>
              <input
                type="text"
                name="trnsfAmnt"
                value={formData.trnsfAmnt}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Transfer Amount</button>
          </form>
    
          {transferResult && (
            <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
              <h3>Transfer Result</h3>
              <p>Code: {transferResult.code}</p>
              <p>Message: {transferResult.message}</p>
            </div>
          )}
        </div>
      );
}

export default TransferForm