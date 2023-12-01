import axios from "axios";
const API_HOST = process.env.REACT_APP_API_HOST;


class MyAccountServices {
  getAccountStatement(id, user) {
    return axios({
      method: "get",
      url: `${API_HOST}/api/transaction-view/${id}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }
}

export default new MyAccountServices() ;
