import axios from "axios";
const API_HOST = process.env.REACT_APP_API_HOST;

class AccountService {
   
 
  AllLogin(data) {
    console.log(data)
        return axios({
          method: "POST",
          url: API_HOST+"/api/admin-login",
          data: data,
        });
      }

   

}

export default new AccountService();