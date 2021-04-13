import Api from '@/services/Api.js'

/*
    Logika użytkowników, logowanie, rejestracja, wyszukiwanie itp.
*/

export default{
    register (credentials){
        return Api().post('users', credentials) // /users POST
    }
}

/*
Auth.register({
    login: 'test',
    password: '12345'
})
*/