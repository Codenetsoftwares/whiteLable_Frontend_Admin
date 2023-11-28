import React from "react";

import axios from "axios";
import { useAuth } from "../../Utils/Auth";

const SelectModal = ({ id, selectedStatus, setSelectedStatus }) => {
  const auth = useAuth();
 

  const handleButtonClick = async (status) => {
    try {
      // Determine the role of the user making the request
      const userRole = auth.user.role;

      // Determine the API endpoint based on the user's role
      let apiEndpoint = `/api/activate/${id}`;

      // Define the allowed roles for each role
      const allowedRoles = {
        superAdmin: ["WhiteLabel", "HyperAgent", "SuperAgent", "MasterAgent"],
        whiteLabel: ["HyperAgent"],
        hyperAgent: ["SuperAgent"],
        superAgent: ["MasterAgent"],
      };

      // Check if the user's role is allowed to perform the action on the selected role
      if (allowedRoles[userRole] && allowedRoles[userRole].includes(selectedStatus)) {
        apiEndpoint += `/${selectedStatus}`;
      } else {
        console.error("Unauthorized action for the current user role");
        return;
      }

      // Make the API call
      const response = await axios.post(apiEndpoint, { isActive: status, locked: false }, {
        headers: {
          Authorization: `Bearer ${auth.user.token}`,
        },
      });

      // Handle the response
      console.log(response.data); // Log the API response data

      // Update the selected status state if needed
      setSelectedStatus(status);
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

 return (
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-outline-success mx-2"  onClick={() => handleButtonClick("Active")}>Active</button> 
          <button type="button" class="btn btn-outline-secondary mx-2"  onClick={() => handleButtonClick("Inactive")}>Inactive</button>
          <button type="button" class="btn btn-outline-danger mx-2"  onClick={() => handleButtonClick("Locked")}>Locked</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectModal;
