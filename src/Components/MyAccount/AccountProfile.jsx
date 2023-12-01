import React from 'react'

const AccountProfile = () => {
 
  return (
    <div className="col-sm-8 mt-3">
      <div
        className="card_box position-relative mb_30"
        style={{ backgroundColor: "#80cf00" }}
      >
        <div className="box_body">
          <div class="main_content_iner rounded ">
            <div class="container-fluid p-0">
              <div class="row justify-content-center">
                <div class="single_board">
                  <div class="main_board_card">
                    <div class="board_card_list">
                      <div class="card mt-5">
                        <div class="card-body">
                          <div class="card_head d-flex justify-content-between align-items-center ">
                            <div class="col">
                              <a class="float-end" href="#">
                                <div class="thumb_34 ms-1 mt-0">
                                  <img
                                    class="img-fluid radius_50"
                                    src="img/customers/1.png"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>

                          <h5 class="f_s_16 f_w_500 mb-0">
                            <i class="far fa-circle f_s_14 text_color_4"></i>
                            &nbsp; Name
                          </h5>
                          <p class="text-muted mb-2">Nilkamal Seth</p>

                          {/* <h5 class="f_s_16 f_w_500 mb-0">
                            <i class="far fa-circle f_s_14 text_color_4"></i>
                            &nbsp; Commission
                          </h5>
                          <p class="text-muted mb-2">10</p> */}

                          {/* <h5 class="f_s_16 f_w_500 mb-0">
                            <i class="far fa-circle f_s_14 text_color_4"></i>
                            &nbsp; Rolling Commission
                          </h5>
                          <p class="text-muted mb-2">2 </p> */}

                          <h5 class="f_s_16 f_w_500 mb-0">
                            <i class="far fa-circle f_s_14 text_color_4"></i>
                            &nbsp;Currency
                          </h5>
                          <p class="text-muted mb-2">INR</p>

                          <h5 class="f_s_16 f_w_500 mb-0">
                            <i class="far fa-circle f_s_14 text_color_4"></i>
                            &nbsp; Exposure Limit
                          </h5>
                          <p class="text-muted mb-2 mr-5">10000</p>

                          <h5 class="f_s_16 f_w_500 mb-0">
                            <i class="far fa-circle f_s_14 text_color_4"></i>
                            &nbsp; Mobile Number
                          </h5>
                          <p class="text-muted mb-2">9998788458</p>

                          <h5 class="f_s_16 f_w_500 mb-0">
                            <i class="far fa-circle f_s_14 text_color_4"></i>
                            &nbsp; Password
                          </h5>
                          <p class="text-muted mb-2">*****</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="loader--ellipsis colord_bg_2 mb_30">
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
}

export default AccountProfile
