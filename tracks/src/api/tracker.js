import axios from 'axios'
import { AsyncStorage } from 'react-native'

const instance = axios.create({
    // After 8 hours the ngrok url changes
    baseURL: 'http://83849e2f.ngrok.io'

})
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance

