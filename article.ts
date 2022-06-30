import type { ApiResponse } from './utils/fetch'
import result from './utils/result'
import { useNativeFetch } from './utils/fetch'

async function add(title: string, filename: string, content: string): Promise<ApiReturn<AddArticleApi>> {
  let resp: ApiResponse
  try {
    resp = await useNativeFetch('/article/', 'POST', { title, filename, content })
  }
  catch (e: any) {
    return result.fail(e, { status: false })
  }
  return result.succ(resp.data as AddArticleApi)
}

async function get(): Promise<ApiReturn<GetArticleApi>> {
  let resp: ApiResponse
  try {
    resp = await useNativeFetch('/article/', 'GET')
  }
  catch (e: any) {
    return result.fail(e, { status: false, articles: [] })
  }
  return result.succ(resp.data as GetArticleApi)
}

async function update(title: string, filename: string, content: string): Promise<ApiReturn<UpdateArticleApi>> {
  let resp: ApiResponse
  try {
    resp = await useNativeFetch('/article/', 'PUT', { title, filename, content })
  }
  catch (e: any) {
    return result.fail(e, { status: false })
  }
  return result.succ(resp.data as UpdateArticleApi)
}

async function del(filename: string): Promise<ApiReturn<DeleteArticleApi>> {
  let resp: ApiResponse
  try {
    resp = await useNativeFetch('/article/', 'DELETE', { filename })
  }
  catch (e: any) {
    return result.fail(e, { status: false })
  }
  return result.succ(resp.data as DeleteArticleApi)
}

export default { get, add, update, del }
