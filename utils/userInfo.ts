import Cookies from 'js-cookie'

/**
* 保存 token
* @params token 带上 Bearer
*/
function save(token: string) {
  Cookies.set('token', token, { expires: 30 })
}

/**
* 读取 token
*/
function getToken() {
  return Cookies.get('token') || ''
}

/**
* 读取用户信息
*/
function get(): UserInfo {
  return {
    username: Cookies.get('username') || '',
  }
}

export default { save, getToken, get }
