import React, { useState, useEffect } from "react";
import { useAuth } from "../../Utils/Auth";
import MyAccountServices from "../../Services/AccountServices";

const ActivityLog = ({ props }) => {
  const [activityLog, setActivityLog] = useState(props.ip);

  console.log("activityLog=>>>", activityLog);

  // const isEmpty = Object.keys(activityLog).length === 0;

  // if (isEmpty) {
  //   console.log("The ipAddressInfo object is empty.");
  // } else {
  //   console.log("The ipAddressInfo object is not empty.");
  // }

  const auth = useAuth();
  // useEffect(() => {
  //   const getActivityLog = async () => {
  //     try {
  //       const response = MyAccountServices.getActivityLog(username, auth.user);

  //       setActivityLog(response.data); // Assuming the response contains the data you want
  //     } catch (error) {
  //       console.error("Error fetching activity log:", error);
  //     }
  //   };

  //   getActivityLog();
  // }, [username, auth.user]);
  console.log("props from Activity", props);

  return (
    <div className="col-sm-8 mt-3">
      {/* card */}
      <div class="card w-100 rounded">
        <div
          class="card-heade text-white p-1"
          style={{ backgroundColor: "#26416e" }}
        >
          <b>&nbsp;&nbsp;Activity Log</b>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-3">
            <table class="table table-bordered table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
              <thead>
                <tr class="table-active">
                  <th scope="col">Login Date & Time</th>
                  <th scope="col">Login Status</th>
                  <th scope="col">IP Address</th>
                  <th scope="col">ISP</th>
                  <th scope="col">City/State/Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">No Data From Serverside</td>
                  <td>No Data From Serverside</td>
                  {/* <td>{activityLog.IP}</td> */}
                  <td>No Data From Serverside</td>
                  <td>No Data From Serverside</td>
                  <td>
                    {/* {activityLog.region} / {activityLog.country}{" "} */}
                    No Data From Serverside
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
      {/* card */}
    </div>
  );
};

export default ActivityLog;
