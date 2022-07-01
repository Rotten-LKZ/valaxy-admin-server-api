import { type ApiResponse, useMultiFetch, useNativeFetch } from './utils/fetch'

import result from './utils/result'

async function upload(files: File[]): Promise<ApiReturn<UploadImageApi>> {
  let resp: ApiResponse
  try {
    resp = await useMultiFetch('/image/', files)
  }
  catch (e: any) {
    return result.fail(e, { status: false, urls: [] })
  }
  return result.succ(resp.data as UploadImageApi)
}

async function get(): Promise<ApiReturn<GetImageApi>> {
  let resp: ApiResponse
  try {
    resp = await useNativeFetch('/image/', 'GET')
  }
  catch (e: any) {
    return result.fail(e, { status: false, images: [] })
  }
  return result.succ(resp.data as GetImageApi)
}

async function del(id: string): Promise<ApiReturn<DeleteImageApi>> {
  let resp: ApiResponse
  try {
    resp = await useNativeFetch('/image/', 'DELETE', { id })
  }
  catch (e: any) {
    return result.fail(e, { status: false })
  }
  return result.succ(resp.data as DeleteImageApi)
}

export default { upload, get, del }
