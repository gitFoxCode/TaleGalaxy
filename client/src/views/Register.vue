<template>
    <section class="section">
        <h1 class="section__title">Zarejestruj się</h1>
        <section class="section__content">
            <div class="column">
                <img src="@/assets/images/galaxy_register.jpg" alt="">
            </div>
            <div class="column">
                <span class="title">Odkrywaj galaktykę!</span>
                <span class="subtitle">Zajerestruj się poniżej</span>

                <label>
                    <span class="input__title">E-mail</span>
                    <input type="email" class="input" placeholder="johndoe@example.com" 
                    v-model="email" 
                    :class="[inputError == 'email' ? 'input--error' : '']">
                </label>
                <label>
                    <span class="input__title">Hasło</span>
                    <input type="password" class="input" placeholder="******" 
                    v-model="password"
                    :class="[inputError == 'password' ? 'input--error' : '']">
                </label>

                <button type="submit" class="login-button register-button" @click="register">Zarejestruj się</button>

                <div class="errorbox" v-html="error" v-if="error"></div>

                <span class="linetext">
                    <span class="linetext__text">Albo</span>
                </span>
                <div class="socialbtns">
                    <button type="submit" class="login-button socialbtn__facebook" title="Zarejestruj się przy użyciu konta facebook"><svg-icon icon="facebook" /> </button>
                    <button type="submit" class="login-button socialbtn__gmail" title="Zarejestruj się przy użyciu konta gmail"><svg-icon icon="google" /> </button>
                </div>
                <hr>
                <span class="text">Posiadasz konto? <router-link to="/login">Zaloguj się</router-link></span>

            </div>
        </section>
    </section>
</template>

<script>
import Auth from "@/services/Auth";
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex'

export default{
    setup(){
        const email = ref("");
        const password = ref("");
        const error = ref(null);
        const inputError = ref(null);
        const store = useStore();

        async function register(){
            try{
                const response = await Auth.register({
                    email: email.value, 
                    password: password.value
                });
                store.dispatch('setToken', response.data.token)
                store.dispatch('setUser', response.data.user)
                console.log(response.data)
            } catch(err){
                inputError.value = err.response.data.input || "";
                error.value = "<b>Error:</b> " + err.response.data.error;
            }
            
        }

        return {email, password, register, error, inputError}
    }
}
</script>

<style lang="scss" scoped>
.socialbtns{
    display: flex;
}
.linetext{
    position: relative;
    z-index: 1;
}
.linetext__text{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8em;
    padding: 0px 15px;
    background-color: #F7F8FC;
}
.linetext::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #333;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -1;
}
.register-button{
    margin-bottom: 30px;
}
.column{
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;
    overflow: hidden;
    position: relative;
}
.column:last-of-type{
    padding: 50px 13%;
}
.column img{
    // position: absolute;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 700px;
    object-fit: cover;
}
.section__content{
    display: flex;
    align-items: center;
    margin-top: 20px;
    border-radius: 20px;
    background-color: #f7f8fc;
    color: #111;
    overflow: hidden;
}
.title{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.7em;
    font-weight: bold;
    color: #fc371d;
    white-space: nowrap;
}
.subtitle{
    font-family: 'Roboto', sans-serif;
    font-size: 0.9em;
    color: #3b3b9d;
    font-weight: 500;
    padding: 10px;
}
.input__title{
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 0.8em;
    font-weight: bold;
    color: #3b3b9d;
    text-align: left;
    padding: 10px 0;
    padding-top: 20px;
}
.input{
    padding: 10px 5px;
    border: 1px solid #d8d8d8;
    width: 100%;
}
.login-button{
    font-family: 'Roboto', sans-serif;
    display: block;
    width: 100%;
    padding: 10px 0;
    margin-top: 20px;
    background-color: #4a7984;
    border: 0;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    transition: all 0.4s;
}
.text{
    font-size: 0.9em;
    font-weight: bold;
    margin-top: 20px;
    color: #777;
}
.smalltext, .smalltext a{
    font-family: 'Roboto', sans-serif;
    display: block;
    margin-top: 10px;
    font-weight: bold;
    font-size: 0.9em;
    color: #aaa;
    text-decoration: underline;
}
.socialbtns .login-button:first-of-type{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.socialbtns .login-button:last-of-type{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.socialbtns .icon{
   font-size: 1.2em;
}
.socialbtns .login-button{
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
}
.socialbtns .login-button:hover{
    flex-grow: 1.5;
}
.socialbtn__facebook{
    background-color: #3b5998;
}
.socialbtn__gmail{
    background-color: #EA4335;
}
.register-button {
    font-family: 'Roboto', sans-serif;
    padding: 10px 0;
    margin-top: 5px;
    background-color: #fc371d;
    border: 0;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    transition: all 0.4s;
    color: #fff;
    text-decoration: none;
}
.register-button:hover{
    cursor: pointer;
    box-shadow: 0px 0px 20px 5px rgb(252 55 29 / 50%);
    transition: all 0.4s;
}
button{
    cursor: pointer;
}
</style>