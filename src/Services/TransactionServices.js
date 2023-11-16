import axios from "axios";
const API_HOST = process.env.REACT_APP_API_HOST;

class TransactionServices {

    depositAmount(data,id, user) {
        return axios({
            method: "POST",
            url: `${API_HOST}/api/admin/deposit-amount/${id}`,
            data: data,
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
    }

    depositAmount(data, id, user) {
        return axios({
            method: "POST",
            url: `${API_HOST}/api/admin/deposit-amount/${id}`,
            data: data,
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
    }

}

export default new TransactionServices();