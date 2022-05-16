import axios from 'axios'

/*
    Logika użytkowników, logowanie, rejestracja, wyszukiwanie itp.
*/

export default{
    register (credentials){
        return axios.post('users', credentials) // /users POST
    },
    login (credentials){
        return axios.post('login', credentials) // /login POST
    }
}

/*
Auth.register({
    login: 'test',
    password: '12345'
})
*/