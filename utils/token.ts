import cookie from 'js-cookie'

export default {
  /**
  * 保存 token
  * @params token 带上 Bearer
  */
  save(token: string) {
    cookie.set('token', token, { expires: 30 })
  },
  /**
  * 读取 token
  */
  get() {
    return cookie.get('token') || ''
  },
}
