
import { post, get, postForm } from '@/server/index';
import { objectToFormData } from '@/utils'
import type { 
  LoginParamsType, LoginResType
} from './interface';

/**
 * 登录
 * @param params
 */
export const login = (params: LoginParamsType) => {
  return post<LoginParamsType, LoginResType>('/user/login', params)
}
// export const login = (params: LoginParamsType) => {
//   return get<LoginParamsType, LoginResType>('/user/login', params)
// }
// export const login = (params: LoginParamsType) => {
//   return postForm<FormData, LoginResType>('/user/login', objectToFormData( params ))
// }
