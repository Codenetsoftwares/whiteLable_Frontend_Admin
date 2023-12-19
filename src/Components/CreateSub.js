import React, { useState } from "react";
import { useAuth } from "../Utils/Auth";
import AccountServices from "../Services/AccountServices";

const CreateSub = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);

  const [permissions, setPermissions] = useState({
    Username: false,
    'Credit Ref.': false,
    Partnership: false,
    Balance: false,
    Exposeure: false,
    'Avail. Bal.': false,
    'Ref. P/L': false,
    Status: false,
    Actions: false,
  });

  // const handlePermissionChange = (permission) => {
  //   setPermissions(prevPermissions => ({
  //     ...prevPermissions,
  //     [permission]: !prevPermissions[permission]
  //   }));
  // };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, value]);
    } else {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item !== value)
      );
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleRoleChange = (e) => {
  //   setSelectedRole(e.target.value);
  // };

  const handleAddSubAgentClick = (e) => {
    e.preventDefault();
    const data = {
      userName: username,
      password: password,
      roles: checkedItems,
    };
    console.log(data);
    AccountServices.AllCreate(data, auth.user)
      .then((response) => {
        console.log("============>>>>RES",response.data);
        alert("Sub-Admin created successfully");
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
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="role" className="form-label">Select Role</label>
                  <select
                    className="form-select"
                    id="role"
                    onChange={handleRoleChange}
                    value={selectedRole}
                  >
                    <option value="" disabled>Select Role</option>
                    <option value="subadmin">Subadmin</option>
                  </select>
                </div> */}
                {/* Compact Permissions Section */}
                <div className="mb-3">
                  <h5>Permissions</h5>
                  {Object.keys(permissions).map(permission => (
                    <div key={permission} className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={permission}
                        // checked={permissions[permission]}
                        checked={checkedItems}
                        onChange={() => handleCheckboxChange(permission)}
                      />
                      <label htmlFor={permission} className="form-check-label">{permission}</label>
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
