import Cookies from 'js-cookie'
import userInfo from './utils/userInfo'
import type { ApiResponse } from './utils/fetch'
import { useNativeFetch } from './utils/fetch'

async function login(baseUrl: string, username: string, password: string): Promise<ApiReturn<LoginApi>> {
  localStorage.setItem('base_url', baseUrl)
  let resp: ApiResponse
  try {
    resp = await useNativeFetch('/user/login', 'POST', { username, password })
  }
  catch (e: any) {
    return {
      status: false,
      message: e,
      data: {
        status: false,
        token: '',
      },
    }
  }
  if (resp.data.status) {
    Cookies.set('username', username)
    Cookies.set('token', resp.data.token)
  }
  return {
    status: true,
    message: '',
    data: resp.data as LoginApi,
  }
}

async function state(): Promise<ApiReturn<UserInfo>> {
  return {
    status: true,
    message: '',
    data: userInfo.get(),
  }
}

export default { login, state }
