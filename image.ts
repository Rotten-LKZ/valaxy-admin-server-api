import type { ApiResponse } from './utils/fetch'
import { useMultiFetch } from './utils/fetch'
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

export default { upload }
