import axios from 'axios'
axios.defaults.baseURL = "https://api-sanctum-aplicativos.herokuapp.com/api";
// sessionStorage.setItem('token', '');

export async function getProducts(token) {
  return await axios({
    method: "get",
    url: "/products",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': 'Bearer '+token,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    },
  }).then( res => {
    return  res.data.data
  }).catch(res => {
    return 'error in get products'
  });
}