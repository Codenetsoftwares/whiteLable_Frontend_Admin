import React from 'react'

const AccountProfile = () => {
 
  return (
    <div className="col-sm-8 mt-3">
      {/* card */}
      <div class="card w-100 rounded">
        <div
          class="card-heade text-white p-1"
          style={{ backgroundColor: "#26416e" }}
        >
          <b>&nbsp;&nbsp;Account Details</b>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-3">
            <b style={{ color: "#1c3763" }}>Name</b>
          </li>
          <li class="list-group-item p-3">
            <b style={{ color: "#1c3763" }}>Currency</b>
          </li>
          <li class="list-group-item p-3">
            <b style={{ color: "#1c3763" }}>Exposure Limit</b>
          </li>
          <li class="list-group-item p-3">
            <b style={{ color: "#1c3763" }}>Mobile Number</b>
          </li>
          <li class="list-group-item p-3">
            <b style={{ color: "#1c3763" }}>Password</b>
          </li>
        </ul>
      </div>
      {/* card */}
    </div>
  );
}

export default AccountProfile
