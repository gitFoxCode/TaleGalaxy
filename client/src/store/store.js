import { createStore } from 'vuex';

export default createStore({
    strict: true,
    state() {
        return {
            token: null,
            user: null,
            isUserLoggedIn: false
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            state.isUserLoggedIn = !!(token);
        },
        setUser(state,user){
            state.user = user
        }
    },
    actions: {
        setToken({commit}, token){
            commit('setToken', token)
        },
        setUser({commit}, user){
            commit('setUser', user)
        }
    }
})