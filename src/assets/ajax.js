import axios from 'axios'
import { Loading, Message } from 'element-ui'
import qs from 'qs'
// eslint-disable-next-line
/* eslint-disable */
// 响应时间
axios.defaults.timeout = 30000
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencodedcharset=UTF-8"
//const baseURL = process.env.NODE_ENV === 'production' ? config.BASEURL : ''
const baseURL = ''

// 配置接口地址
axios.defaults.baseURL = baseURL

// 全局加载
let loading
function openLoading() {
  loading = Loading.service({
    lock: true,
    text: '数据加载中',
    spinner: 'el-icon-loading',
    background: 'rgba(0,0,0,0.75)'
  })
}
function closeLoading() {
  loading.close()
}
function getCookie (name) {
  let cname = name + '='
  let cookies = document.cookie.split(' ')
  for (let i = 0; i < cookies.length; i++) {
    let tmpC = cookies[i]
    if (tmpC === '') {
      return ''
    }
    while (tmpC.charAt(0) === '') {
      tmpC = tmpC.substring(1)
    }
    if (tmpC.indexOf(cname) !== -1) {
      return tmpC.substring(cname.length, tmpC.length)
    }
  }
  return ''
}
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    if (config.method === "post") {
      // 序列化
      config.headers["Content-Type"] = "application/x-www-form-urlencoded"
      // config.headers['Content-Type'] = 'application/json'
      config.headers['withCredentials'] = true
      config.headers['X-CSRFToken'] = getCookie('csrf_token')
      config.data = qs.stringify(config.data) // ***** 这里转义
    }

    openLoading()
    // if (store.state.token) {
    //   config.headers["token-auth"] = store.state.token
    // }
    config.params = {
      t: new Date().getTime(),
      ...config.params
    }
    return config
  },
  err => {
    // Message.error('错误的传参')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.config.responseType == "blob") {
      closeLoading()
      return res
    }
    if (res.data.code === 0) {
      closeLoading()
      return res.data.data
    } else {
      closeLoading()
      // Message({
      //   message: res.data.msg,
      //   type: "error",
      //   showClose: true,
      //   showCancelButton: false,
      //   showConfirmButton: true,
      //   closeOnClickModal: false,
      //   closeOnPressEscape: false
      // }).then(() => {})
      Message.warning(res.data)
      return
    }
  },
  err => {
    // if (config.ENV !== "prod") {
    //   if (err.code == "ECONNABORTED" && err.message.indexOf("timeout") != -1)
    //     return
    //   Message({
    //     message: err.message,
    //     type: "error",
    //     showClose: true,
    //     showCancelButton: false,
    //     showConfirmButton: true,
    //     closeOnClickModal: false,
    //     closeOnPressEscape: false
    //   }).then(() => {})
    // }
    return Promise.reject(err.message)
  }
)
// GET 请求方式
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(
        data => {
          resolve(data)
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

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        data => {
          resolve(data)
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
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then(
        data => {
          resolve(data)
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
// delete 请求方式
export function DELETE(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        params: params
      })
      .then(
        data => {
          resolve(data)
        },
        err => {
          reject(err)
          alert(err.data.msg)
        }
      )
      .catch(error => {
        reject(error)
        alert(error)
      })
  })
}