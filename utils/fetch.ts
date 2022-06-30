import userInfo from './userInfo'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface Data {
  [key: string]: any
}

export interface ApiResponse {
  code: number
  data: Data
}

export function useNativeFetch(url: string, method: Method, data: Data = {}): Promise<ApiResponse> {
  url = `${localStorage.getItem('base_url')}${url}`
  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      let _u = url
      for (const key in data)
        _u += `&${key}=${data[key]}`
      fetch(_u, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': userInfo.getToken(),
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
          'Authorization': userInfo.getToken(),
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
