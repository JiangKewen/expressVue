import axios from 'axios'

// axios初始化配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = process.env.BASE_API

// post请求
export const _post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, json2Form(params))
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// get请求
export const _get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// 参数封装
function json2Form (json) {
  var str = []
  for (var p in json) {
    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]))
  }
  return str.join('&')
}

export const getAllUser = params => _get('/getusers', params) // 获取
