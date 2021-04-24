import Api from '@/services/Api.js'

export default{
    getAllSeries (){
        return Api().get('series')
    }
}