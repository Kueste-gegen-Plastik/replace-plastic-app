import axios from 'axios'
import {
    config
} from '@/config';

export const HTTP = axios.create({
    baseURL: config.endpoint
})

HTTP.interceptors.request.use(interceptorConfig => {
    const token = localStorage.getItem('kgp_token')
    const retVal = interceptorConfig
    if (token) {
        retVal.headers.Authorization = `Bearer ${token}`
    }
    return retVal
}, (error) => Promise.reject(error))

class Api {

    login(params) {
        return HTTP.post('/auth/local', params)
    }

    create(data) {
        return HTTP.post('/entries/', data).then(res => res.data)
    }

    searchEan(ean) {
        return HTTP.get(`/product/${ean}`).then(res => res.data)
    }

    getStats() {
        return HTTP.get(`/stats/`).then(res => res.data)
    }

}

const api = new Api()

export default api
