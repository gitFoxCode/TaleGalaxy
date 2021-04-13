<template>
    <section class="section">
        <h1 class="section__title">Zaloguj się</h1>
        <section class="section__content">
            <div class="column">
                <img src="@/assets/images/galaxy_login.jpg" alt="">
            </div>
            <div class="column">
                <span class="title">Witamy ponownie!</span>
                <span class="subtitle">Zaloguj się na konto poniżej</span>

                <label>
                    <span class="input__title">E-mail</span>
                    <input type="email" class="input" placeholder="johndoe@example.com">
                </label>
                <label>
                    <span class="input__title">Hasło</span>
                    <input type="password" class="input" placeholder="******">
                </label>

                <button type="submit" class="login-button">Zaloguj się</button>

                <button type="submit" class="login-button socialbtn__facebook">Zaloguj się przez facebook</button>
                <hr>
                <span class="text">Nie posiadasz konta?</span>
                <router-link to="/register" class="login-button register-button">Zarejestruj się</router-link>
                <span class="smalltext">
                    <router-link to="/">Zapomniałem hasła</router-link>
                </span>

            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
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
.socialbtn__facebook{
    background-color: #3b5998;
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