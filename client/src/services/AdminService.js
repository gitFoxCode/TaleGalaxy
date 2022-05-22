import axios from 'axios'

export default{
    async getUsers (params){
        return (await axios.get('users', { params })).data
    },
    async getCount (params){
        return (await axios.get('count', { params })).data
    },
    getBaseURL (){
        return axios.defaults.baseURL
    }
}