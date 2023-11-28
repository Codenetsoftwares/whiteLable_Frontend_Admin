import axios from "axios";
const API_HOST = process.env.REACT_APP_API_HOST;

class AccountService {

  AllLogin(data) {
    return axios({
      method: "POST",
      url: API_HOST + "/api/admin-login",
      data: data,
    });
  }

  AllCreate(data, user) {
    return axios({
      method: "POST",
      url: API_HOST + "/api/admin-create",
      data: data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }

  UserCreate(data, user) {
    return axios({
      method: "POST",
      url: API_HOST + "/api/admin/Create-user",
      data: data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }

  getAllCreates(id,user) {
    return axios({
      method: "get",
      url: `${API_HOST}/api/view-all-creates/${id}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }

  ActiveInactive(data, id, user) {
    return axios({
      method: "POST",
      url: `${API_HOST}/api/activate/${id}`,
      data: data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }
}

export default new AccountService();