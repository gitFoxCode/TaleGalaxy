import axios from 'axios'

export default{
    async getAllSeries (params){
        return (await axios.get('series', { params })).data
    }
}