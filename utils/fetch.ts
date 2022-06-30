import token from './token'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export let BASE_URL = 'http://localhost:3000'

export function sendRequest(url: string, method: Method, data: object = {}) {
  url = BASE_URL + url
  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      let _u = url
      for (const key in data)
        _u += `&${key}=${data[key]}`
      fetch(_u, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token.get(),
        },
      }).then((res) => {
        if (res.ok)
          return res.json()
        reject(res.statusText)
      }).then(data => resolve(data))
        .catch(err => reject(err))
    }
    else {
      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token.get(),
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok)
          return res.json()
        reject(res.statusText)
      }).then(data => resolve(data))
        .catch(err => reject(err))
    }
  })
}
