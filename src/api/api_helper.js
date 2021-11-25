import axios from "axios"

// const obj = JSON.parse(localStorage.getItem("authUser"))
// console.log("obj in axios:",obj)
// let token = ""
// if(obj){
//   token = obj.accessToken
// }
const API_URL = "http://localhost:3005"

const axiosApi = axios.create({
  baseURL: API_URL,
})

// axiosApi.defaults.headers.common["x-access-token"] = token

// console.log("api",axiosApi.defaults.headers.common["x-access-token"])

console.log("API_URL",API_URL)


axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  const axiosApi = axios.create({
    baseURL: API_URL,
    // auth: {
    //     username: process.env.REACT_APP_AUTH_USER,
    //     password: process.env.REACT_APP_AUTH_PASS
    // },
    })
    // const obj = JSON.parse(localStorage.getItem("authUser"))
    // try{
    //     token = obj.accessToken
    // }catch(err){
    //     console.log("err",err)
    // }
    // axiosApi.defaults.headers.common["x-access-token"] = token
    axiosApi.interceptors.response.use(
        response => response,
        error => Promise.reject(error)
    )
    // console.log("getapi",axiosApi.defaults.headers.common["x-access-token"])
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
//   console.log("url post" ,url,data)
  const axiosApi = axios.create({
    baseURL: API_URL,
    // auth: {
    //     username: process.env.REACT_APP_AUTH_USER,
    //     password: process.env.REACT_APP_AUTH_PASS
    // },
    })
    // const obj = JSON.parse(localStorage.getItem("authUser"))
    // try{
    //     token = obj.accessToken
    // }catch(err){
    //     console.log("err",err)
    // }
    // axiosApi.defaults.headers.common["x-access-token"] = token
    axiosApi.interceptors.response.use(
        response => response,
        error => Promise.reject(error)
    )
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
//   console.log("url" ,url,config)
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
//   console.log("url" ,url,config)
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
