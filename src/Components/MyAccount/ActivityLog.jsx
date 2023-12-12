import React from "react";

const ActivityLog = () => {
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
                  <td scope="row"></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
