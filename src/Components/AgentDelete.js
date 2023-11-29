import React, { useEffect, useState } from 'react'
import { useAuth } from '../Utils/Auth';
import AccountServices from '../Services/AccountServices';

const AgentDelete = () => {
  const auth = useAuth();

  const [viewAgentDelete, setViewAgentDelete] = useState([]);
  // const [isApproved, setIsApproved] = useState();
  var EditData = [];

  useEffect(() => {
    if (auth.user) {
      AccountServices.ViewAgentDelete(auth.user).then((res) => (
        console.log(res),
        setViewAgentDelete(res.data)));
    }
  }, [auth]);

  console.log(viewAgentDelete)

  for (let i = 0; i < alert.length; i++) {
    EditData[i] = alert[i].changedFields;
  }
  console.log(viewAgentDelete)

  const handleDelete = (e, id) => {
    e.preventDefault();
    console.log("=============....>>>>>",id);
    const flag = true;

    const data = {
      isApproved: flag,
    };
    AccountServices.IsAgentDeleteApprove(id, auth.user)
      .then((response) => {
        window.location.reload();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {viewAgentDelete.length > 0 ? (
        <div className="container d-flex justify-content-center ">
          <div className=" p-2">
            <div>
              <table className="table  m-2">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Agent Name</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                {viewAgentDelete.map((data, index) => (
                  <tr key={data.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.userName}</td>
                    <td>
                      <button
                        className="btn btn-secondary text-dark rounded"
                        onClick={(e) => handleDelete(e, data._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div class="container alert alert-warning mt-1" role="alert">
          <p className="d-flex justify-content-center">
            No Delete Request Found
          </p>
        </div>
      )}
    </>
  );
}

export default AgentDelete