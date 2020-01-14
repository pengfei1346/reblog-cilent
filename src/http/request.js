import axios from 'axios'
import {  Message } from 'element-ui'
import config from './config'

const service = axios.create({
    baseURL: config.baseUrl,
    timeout: 3000000,
    withCredentials: true
})

//请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//响应拦截器
service.interceptors.response.use(
    response => {
        // if (loading) {
        //   loading.close()
        // }
        const code = response.status
        if ((code >= 200 && code < 300) || code === 304) {
            if (!response.data.success) {
                Message({
                    message: response.data.message || 'Error',
                    type: 'error',
                    duration: 5 * 1000
                })
            }
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        // if (loading) {
        //   loading.close()
        // }
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    Message.error('请求出错，请稍后重试')
                    break
                case 401:
                    // 返回401 清除token信息并跳转到登陆页面
                    router.replace({
                        path: '/login'
                    })
                    break
                case 404:
                    Message.error('网络请求不存在')
                    break
                case 500:
                    Message.error('服务器错误')
                    break
                default:
                    Message.error(error.response.data.message)
            }
        } else {
            // 请求超时或者网络有问题
            if (error.message.includes('timeout')) {
                Message.error('请求超时！请检查网络是否正常')
            } else {
                Message.error('请求失败，请检查网络是否已连接')
            }
        }
        return Promise.reject(error)
    }
)

export default service
