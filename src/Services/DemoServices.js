// import axios from 'axios';
// import { API_HOST } from '../constants'; // Assuming you have a constants file with the API_HOST

// const DemoServices = () => {
//   return (
//      viewTransactions(id, user) {
//     let url = '';

//     switch (user.role) {
//       case 'superadmin':
//         url = `/api/transaction-view/${id}`;
//         break;
//       case 'whitelabel':
//         url = `/api/transaction-view/whitelabel/${id}`;
//         break;
//       case 'hyperagent':
//         url = `/api/transaction-view/hyperagent/${id}`;
//         break;
//       case 'superagent':
//         url = `/api/transaction-view/superagent/${id}`;
//         break;
//       default:
//         // Handle other roles if needed
//         break;
//     }

//     return axios({
//       method: 'GET',
//       url: `${API_HOST}${url}`,
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     });
//   }
//   )
// }

// export default DemoServices