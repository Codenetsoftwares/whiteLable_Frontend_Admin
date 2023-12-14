import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../Utils/Auth";
import AccountServices from "../Services/AccountServices";
import { useNavigate } from "react-router-dom";

const HierarchyPageView = () => {
  const { userId } = useParams();
  const auth = useAuth();
  const [hierarchydata, sethierarchyData] = useState([]);
  const [userID, setUserID] = useState("");
  // const [pathname, setPathname] = useState([]);
  const navigate = useNavigate();
  const garbage = [];


  useEffect(() => {

    AccountServices.getHierarchy(userId, auth.user).then((res) => {
      console.log("xxxxxxxxxxxx", res.data.user);
      sethierarchyData(res.data.user);
    });
  }, [userId, auth]);


  const takeMeTohierarchy = (userId) => {
    navigate(`/hierarchypageview/${userId}`);
  };

  const handleId = (id) => {
    console.log("id========", id)
    setUserID(id)
  }
  const savePathName = (userName) => {
    garbage.push(userName);
    console.log("Path=>>>", garbage);
  };

 const pathname = Array.from(garbage);
  console.log("=>>", pathname);

  return (
    <div class="main_content_iner overly_inner ">
      <div class="container-fluid p-0 ">
        <div class="row">
          <div class="col-12">
            <div class="page_title_box d-flex flex-wrap align-items-center justify-content-between">
              <div class="page_title_left d-flex align-items-center">
                <h3 class="f_s_25 f_w_700 dark_text mr_30">
                  Hierarchy Dashboard
                </h3>
                <ol class="breadcrumb page_bradcam mb-0">
                  <li class="breadcrumb-item">
                    <a href="#">
                      <Link to="/welcome">Home</Link>
                    </a>
                  </li>
                  <li class="breadcrumb-item active">
                    {" "}
                    <a href="#" onClick={() => navigate(-1)}>
                      Back to Previous
                    </a>
                  </li>
                </ol>
              </div>
              <div class="page_title_right">
                <div class="page_date_button d-flex align-items-center">
                  <img src="img/icon/calender_icon.svg" alt="" />
                  {Date()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="white_card card_height_100 mb_30 pt-4">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>User List </h4>
                    <div class="box_right d-flex lms_block">
                      <div class="serach_field_2">
                        <div class="search_inner">
                          <form Active="#">
                            <div class="search_field">
                              <input
                                type="text"
                                placeholder="Search content here..."
                              />
                            </div>
                            <button type="submit">
                              {" "}
                              <i class="ti-search"></i>{" "}
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="add_button ms-2">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#addcategory"
                          class="btn_1"
                        >
                          search
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="QA_table mb_30">
                    <table class="table lms_table_active table-bordered">
                      <thead>
                        <tr className="text-bolder fs-6 text-center">
                          <th scope="col">Username</th>
                          <th scope="col">Credit ref</th>
                          <th scope="col">Partnership</th>
                          <th scope="col">Balance</th>
                          <th scope="col">Exposure</th>
                          <th scope="col"> Avail. Bal.</th>
                          <th scope="col"> Ref. P/L</th>
                          <th scope="col"> Status</th>

                          {/* <th scope="col">Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {hierarchydata && hierarchydata.length > 0 ? (
                          hierarchydata.map((user, index) => (
                            <tr key={index} className="text-center">
                              <th scope="row" className="">
                                <button
                                  className="border border-1 w-75 text-center bg-success rounded-pill "
                                  // data-bs-toggle="modal"
                                  // data-bs-target={`#hierarchyview-${userId}`}
                                  style={{ cursor: "auto" }}
                                >
                                  {user.roles[0]}
                                </button>

                                <p onClick={()=>{savePathName(user.userName)}}>
                                  <Link
                                    to={{
                                      pathname: `/hierarchypageview/${user.id}`,
                                    }}
                                  >
                                    <b title="Click to show next hierarchy">
                                      {user.userName}
                                    </b>
                                  </Link>
                                </p>
                              </th>
                              <td>{user.creditRef}</td>
                              <td>{user.partnership}</td>
                              <td>{user.loadBalance}</td>
                              <td>0</td>
                              <td>{user.balance}</td>
                              <td>{user.balance - user.creditRef}</td>
                              <td className="text-danger">
                                <p className="border border-1 w-75 text-center bg-danger rounded-pill">
                                  No data from ServerSide
                                </p>
                              </td>

                              {/* Uncomment the following lines for action buttons */}
                              {/* <td>
                <div className="action_btns d-flex">
                  <a href="#" className="action_btn mr_10">
                    <i className="far fa-edit"></i>
                  </a>
                  <a href="#" className="action_btn">
                    <i className="fas fa-trash"></i>
                  </a>
                </div>
              </td> */}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="8">
                              <div
                                class="alert text-white bg-danger"
                                role="alert"
                              >
                                <div class="alert-text d-flex justify-content-center">
                                  <b> &#128680; No Data Found !! </b>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                        {/* <td>
                            <div class="action_btns d-flex">
                              <a href="#" class="action_btn mr_10">
                                {" "}
                                <i class="far fa-edit"></i>{" "}
                              </a>
                              <a href="#" class="action_btn">
                                {" "}
                                <i class="fas fa-trash"></i>{" "}
                              </a>
                            </div>
                          </td> */}
                      </tbody>
                    </table>
                  </div>
                  {/* Pagination Start*/}
                  <div class="col-lg-12">
                    <div class="white_box mb_30">
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
                  </div>
                  {/* Pagination End*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HierarchyPageView;
