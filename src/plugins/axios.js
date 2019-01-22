import qs from 'qs'
import axios from 'axios'
import Vue from 'vue'
import { Notify } from 'vant'

Vue.use(Notify)

// import Texts from '@/assets/file/code_text'
const http = axios.create({
  // baseURL: 'https://yapi.advai.net/mock/370/asboss',
  debug: process.env.NODE_ENV !== 'production',
  headers: {
    // 'accept-language': 'en-CN',
    // client: 'ACCOUNT-SYSTEM',
    // 'Access-Control-Allow-Origin': '*',
  },
})

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use(
  (res) => {
    // const { vue } = window
    // const code = res.data.code
    // switch (code) {
    //   // account code
    //   case 'ACCOUNT_ALREADY_EXISTS':
    //   case 'ACCOUNT_NOT_EXIST':
    //   case 'ACCOUNT_ID_EXIST':
    //   case 'ACCOUNT_LOCKED':
    //   case 'BAD_CREDENTIAL':
    //   case 'MOBILE_EXIST':
    //   case 'EMAIL_EXIST':
    //   case 'INVALID_PHONE_NUMBER':
    //   case 'INVALID_EMAIL':
    //   case 'INVALID_PASSWORD':
    //   case 'UNSUPPORTED_REGISTRY_TYPE':
    //     break
    //   default: {
    //     break
    //   }
    // }
    // return res
    if (res.status === 200) {
      const { data: result } = res
      if (result.code === 'SUCCESS') {
        return { success: true, data: result.data }
      }
      // if (result.code === 'ACCESSDENIED') {
      //   Notification.error({ title: 'Login expired', message: 'Please login again' })
      //   vue.$store.dispatch('user/resetUserState')
      //   localStorage.removeItem('cboss')
      //   vue.$router.push('/login')
      //   vue.$cookie.delete('cboss_user')
      // }
      if (result.code === 'ERROR') {
        Notify({
          message: result.message,
          duration: 1000,
          background: '#1989fa'
        })
        return { error: true }
      }
      Notify({
        message: result.message,
        duration: 1000,
        background: '#1989fa'
      })
      return { success: false, data: result.data }
    }
    // Notification.error({ title: 'Error', message: res.message })
    return { success: false, data: null }
  },
  (error) => {
    console.warn('network error', error)
    Notify({
      message: error.message,
      duration: 1000,
      background: '#1989fa'
    })
    return Promise.reject(error)
  },
)

const post = (url, config) => {
  const data = config || {}
  return http({
    url,
    method: 'POST',
    data: data,
  })
}

const get = (url, params) => {
  return http({
    url,
    method: 'GET',
    params: params,
  })
}

const ajax = {
  post,
  get,
}

const form = (url, config) => {
  const data = config || {}
  return http.post(url, qs.stringify(data), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

export {
  post,
  get,
  form,
  ajax,
}
