import axios, { type AxiosRequestConfig } from 'axios'
import { assign } from 'lodash-es'
import { ElMessage as message } from 'element-plus'
const UN_SUPPORT_DIY_HEADER_REGEX = /^http(s)?:\/\//i
// 请求错误统一处理
import ERRORCODES from '@/enum/error-code'
import type { NUNBER_STRING as ERROR_CODES_TYPES } from '@/interface'
import { resetInterfacePath } from '@/utils'
// 默认请求失效时间60s
export const AXIOS_TIMEOUT_LIMIT = 60000
axios.defaults.timeout = AXIOS_TIMEOUT_LIMIT;
// 也可以直接使用 typeof 获取 ERROR_CODES 的接口类型，这个时候需要ERROR_CODES 在同一文件内才有效果
// type ERROR_CODES_TYPES = typeof ERROR_CODES
const ERROR_CODES = ERRORCODES as ERROR_CODES_TYPES
/**
 * 后台接口公共的返回格式
 * 具体根据实际跟后台约定的定义
 */
export interface ResCommonType<T = unknown> {
  code: number
  data: T
  msg?: string
}

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    /**
     * Request header not allowed by Access-Control-Allow-Headers in preflight response
     * 第三方接口不支持头
    */
    config.url = resetInterfacePath(config.url || '')
    if (!UN_SUPPORT_DIY_HEADER_REGEX.test(config.url ?? '')) {
      assign(config.headers, {
        // 'X-RequestFrom': 'person',
      })
    }
    // if (config?.url?.includes('/DownloadFile')) {
    //   assign(config.headers, {
    //     'Accept': 'ext/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'responseType': 'blob'
    //   })
    // }
    return config
  },
  (err) => Promise.reject(err),
)

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    if (typeof response.data === 'string') {
      // location.href = '/signIn'
      // return Promise.reject('登录失效')
    }
    const data = response.data
    const resCode: keyof ERROR_CODES_TYPES = data.status || data.code
    if (ERROR_CODES[resCode]) {
      return Promise.reject(data)
    }
    return Promise.resolve(data)
  },
  (err) => {
    let errCode: keyof ERROR_CODES_TYPES = 500
    let errMsg = err?.message || '连接到服务器失败'
    if (err?.response) {
      const { code, status } = err.response
      errCode = code || status || 500
      errMsg = ERROR_CODES[errCode]
    }
    message.error(errMsg)
    return Promise.reject({
      code: errCode,
      msg: errMsg,
      data: err || null,
    })
  },
)

/**
 * 发起GET请求, 泛型 T 定义返回数据 data 项类型, U 定义请求数据类型
 * @param {string} url 请求链接
 * @param {object} params 请求参数
 * @param {object} config 配置
 */
export const get = <U = unknown, T = unknown>(
  url: string,
  params?: U,
  config?: AxiosRequestConfig,
) => axios.get<T, T>(
    url, { params: { ...params, t: Date.now() }, ...config },
  )

/**
 * 发起POST请求, 泛型 T 定义返回数据 data 项类型, U 定义请求数据类型
 * @param {string} url 请求链接
 * @param {object} params 请求参数
 * @param {object} config 配置
 */
export const post = <U = unknown, T = unknown>(
  url: string,
  params?: U,
  config: AxiosRequestConfig = {},
) => {
  if (Array.isArray(params)) {
    return axios.post<T, T>(url, [...params], config)
  }
  return axios.post<T, T>(url, { ...params }, config)
}

/**
 * 发起FormData请求, 泛型 T 定义返回数据 data 项类型, U 定义请求数据类型
 * @param {string} url 请求链接
 * @param {object} params 请求参数
 * @param {object} config 配置
 */
// export const postForm = <U = unknown, T = unknown>(
//   url: string,
//   params?: U,
//   config: AxiosRequestConfig = {},
// ) => axios.post<T, ResCommonType<T>>(url, qs.stringify({ ...params }), config);
export const postForm = <U = unknown, T = unknown>(
  url: string,
  params?: U,
  config: AxiosRequestConfig = {},
) => axios.post<T, T>(url, params, config)

/**
 * 文件下载请求, 泛型 T 定义返回数据 data 项类型, U 定义请求数据类型
 * @param {string} url 请求链接
 * @param {object} params 请求参数
 * @param {object} config 配置
 */
// export const postFile = <U = unknown, T = unknown>(
//   url: string,
//   params?: U,
//   config: AxiosRequestConfig = { responseType: 'blob' },
// ) => axios.post<T, ResCommonType<T>>(url, { ...params }, config);

export default {
  get,
  post,
  // postForm,
  // postFile,
}
