import React, { useState } from "react";
import { useAuth } from "../Utils/Auth";
import AccountServices from "../Services/AccountServices";
// import { useNavigate } from "react-router-dom";
const CreateSub = () => {
  const auth = useAuth();
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const roles = [
    "TransferBalance",
    "Status",
    "CreditRef-Edit",
    "Partnership-Edit",
    "CreditRef-View",
    "Partnership-View",
    "User-Profile-View",
    "Profile-View",
    "Create-Admin",
    "Create-User",
    "AccountStatement",
    "ActivityLog",
    "Delete-Admin",
    "Restore-Admin",
    "Move-To-Trash",
    "Trash-View",
  ];
  const [permissions, setPermissions] = useState(
    roles.reduce((acc, role) => {
      acc[role] = false;
      return acc;
    }, {})
  );
  const handleCheckboxChange = (permission) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(permission)
        ? prevCheckedItems.filter((item) => item !== permission)
        : [...prevCheckedItems, permission]
    );
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [permission]: !prevPermissions[permission],
    }));
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleAddSubAgentClick = (e) => {
    e.preventDefault();
    const data = {
      userName: username,
      password: password,
      permission: checkedItems,
    };
    console.log(data);
    AccountServices.SubCreate(data, auth.user)
      .then((response) => {
        console.log("============>>>>RES", response.data);
        alert("Sub-Admin created successfully");
        // auth.login();
        //     navigate("/welcome");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed! Invalid Data");
      });
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">Create New Sub</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="mb-3">
                  <h5>Permissions</h5>
                  {Object.keys(permissions).map((permission) => (
                    <div
                      key={permission}
                      className="form-check form-check-inline"
                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={permission}
                        checked={checkedItems.includes(permission)}
                        onChange={() => handleCheckboxChange(permission)}
                      />
                      <label
                        htmlFor={permission}
                        className="form-check-label"
                      >
                        {permission}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleAddSubAgentClick}
                  >
                    Add Sub Agent
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateSub;