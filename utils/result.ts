export default {
  succ<T extends object>(data: T): ApiReturn<T> {
    return {
      status: true,
      message: '',
      data,
    }
  },
  fail<T extends object>(message: string, data: T): ApiReturn<T> {
    return {
      status: false,
      message,
      data,
    }
  },
}
