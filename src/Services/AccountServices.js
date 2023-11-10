import axios from "axios";
const API_HOST = process.env.REACT_APP_API_HOST;

class AccountService {
    AdminLogin(data) {
        return axios({
          method: "POST",
          url: API_HOST+"/api/admin-login/:userType",
          data: data,
        });
      }

}

export default new AccountService();