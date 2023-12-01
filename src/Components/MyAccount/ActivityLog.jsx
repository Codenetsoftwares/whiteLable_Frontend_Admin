import React from "react";

const ActivityLog = () => {
  return (
    <div className="col-sm-8 mt-3">
      <div
        className="card_box position-relative mb_30"
        style={{ backgroundColor: "#ffc717" }}
      >
        <div className="box_body">
          <div class="main_content_iner rounded ">
            <div class="container-fluid ">
              <div class="row justify-content-center">
                <div class="white_card_body mt-5 pt-5">
                  <div class="QA_section">
                    <div class="QA_table mb_30">
                      <table class="table lms_table_active3 ">
                        <thead>
                          <tr>
                            <th scope="col">Login Date & Time</th>
                            <th scope="col">Login Status</th>
                            <th scope="col">IP Address</th>
                            <th scope="col">ISP</th>
                            <th scope="col">City/State/Country</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">{Date()}</th>
                            <td>Active</td>
                            <td>45.250.48.146</td>
                            <td>Wish Net</td>
                            <td>Kolkata</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="loader--ellipsis colord_bg_4 mb_30">
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

export default ActivityLog;
