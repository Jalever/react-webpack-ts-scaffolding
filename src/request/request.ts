import qs from 'query-string';
import Cookies from 'js-cookie';
import { iDataResp } from "@/App";
const METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
}
interface iResp {
  code: number,
  data: object,
  info: string,
  success: boolean
}

export interface irespPromise {
  status: number,
  statusText: string,
  ok: boolean,
  body: any,
  url: string,
  [prop: string]: any
}

// 发送 fetch 请求
const request = (
  url: any,
  params: any,
  method = 'post',
  isQueryPost = false,
  jsonType = false,
  formType = false,
  isNeedToken = true,
) => {
  let options: any = {
    headers: {
      'Content-Type': jsonType
        ? 'application/json'
        : formType
          ? 'multipart/form-data'
          : 'application/x-www-form-urlencoded',
    },
    method: method, // *GET, POST, PUT, DELETE, etc.
    // credentials: 'include'
  }

  if (method !== METHOD.GET && params) {
    options.body = jsonType ? JSON.stringify(params) : qs.stringify(params)
  }

  if (method === METHOD.GET) {
    params = { ...params } || {}
    for (let item in params) {
      if (typeof params[item] == 'object') {
        params[item] = params[item].join(',')
      }
    }

    params._ = new Date().getTime() // 添加 _ 属性,值为随机数,避免缓存
    url += '?' + qs.stringify(params)
  }

  return fetch(url, options).then(checkRespStatus)
}

// 获取服务器返回数据
const checkRespStatus = (respPromise: irespPromise) => {
  if (respPromise.status !== 200) {
    return Promise.reject('Server error occurred');
  }

  // 服务端返回 json 字符串,所以调用 json() 来处理数据, then 方法接收的参数就是服务端返回的 json 数据
  return respPromise.json().then((resp: iDataResp) => {
    return new Promise((resolve, reject) => {
      if (resp) {
        resolve(resp);
      } else {
        reject(resp);
      }
    });
  })
};

export default request
