import axios from 'axios'
axios.defaults.baseURL = "https://api-sanctum-aplicativos.herokuapp.com/api";
// sessionStorage.setItem('token', '');

export async function logar() {
    let token = '199|AticVTFEUbHegoidwzFBrNJz7qDZjQgZV0ALczwp';
    return token;
    return await axios({
      method: "post",
      url: "/auth/login",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      },
      data: {
        email: "higoraugusto120@gmail.com",
        password: "123456"
      }
    })
    .then(res => {
        console.log(res.data.data.token)
        return res.data.data.token
    })
    .catch(res => {
        return 'error'
    })
}