import Api from '@/services/Api.js'

export default{
    async getAllSeries (params){
        return (await Api().get('series', { params })).data
    }
}