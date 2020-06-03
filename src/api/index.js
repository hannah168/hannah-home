import { get, post } from '../assets/ajax'

export function weatherData (obj) {
  return get('/api/weatherdetail', obj) // 天气数据
}

export function getXiamu (obj) {
  return post('/api/anime/xiamu', obj) // 获取夏目友人帐信息
}

export function productList (obj) {
  return post('/api/productlist', obj) // 获取夏目友人帐信息
}

export function guiGuai (obj) {
  return post('/api/korean/guiguai', obj) // 获取夏目友人帐信息
}

export function aboutUs (obj) {
  return get('/api/aboutus', obj) // 获取夏目友人帐信息
}

export function login (obj) {
  return post('/api/login', obj) // 获取夏目友人帐信息
}
