import React, { useState, useEffect } from "react";
import { useAuth } from "../../Utils/Auth";
import AccountServices from "../../Services/AccountServices";
import { useParams } from "react-router-dom";

const HierarchyView = ({ userId }) => {
  console.log("UserID", userId)
  const auth = useAuth();
  
  const [hierarchydata, sethierarchyData] = useState([]);

  useEffect(() => {
    AccountServices.getHierarchy(userId, auth.user).then((res) => {
      console.log("xxxxxxxxxxxx", res.data);
      sethierarchyData(res.data);
    });
  }, [userId,auth]);

  console.log("line17 >>>>>>>>>>>>>", hierarchydata);
  const hi = () => {
  console.log("Line no. 7", userId);
}
  return (
    <div
      className="modal"
      id={`hierarchyview-${userId}`}
      aria-labelledby={`hierarchyview-${userId}`}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th onClick={hi}>User Name</th>
                  <th>Role</th>
                  {/* Add similar headers for other properties */}
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>

          {/* ... (modal footer) */}
        </div>
      </div>
    </div>
  );
};

export default HierarchyView;
