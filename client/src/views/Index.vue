<template>
  <main>
    <section class="hero">
      <div class="hero__title">
        <h1>Galaktyka<span class="logo__text--special">Bajek</span></h1>
        <span class="hero__title__undertext"
          >Oglądaj swoje ulubione kreskówki w jednym miejscu!</span
        >
      </div>
      <div class="hero__actions">
        <router-link 
        type="button" 
        class="hero__button" 
        tag="button" 
        to="/login">
          Zacznij teraz!<span class="hero__button-addtext"
            >Sprawdź przez 7 dni
            <span class="text--special">za darmo</span>!</span
          >
        </router-link>
      </div>
    </section>
    <section class="section">
      <h2 class="section__title">Galaktykabajek oferuje:</h2>
      <div class="card-items">
        <div class="card-items__card">
          <span class="card-items__icon"> <svg-icon icon="logo" filled/> </span>
          <span class="card-items__text">
            Ponad <b>45.0000</b> odcinków kreskówek na wyciągnięcie ręki!
          </span>
        </div>
        <div class="card-items__card">
          <span class="card-items__icon"><svg-icon icon="satellite" filled/></span>
          <span class="card-items__text">
            Wszystkie odcinki dostępne z <b>każdego</b> miejsca na świecie!
          </span>
        </div>
        <div class="card-items__card">
          <span class="card-items__icon"><svg-icon icon="stars" filled/></span>
          <span class="card-items__text">
            Doskonała jakość <b>animacji</b> oraz <b>dzwięku</b>, która zadowoli największych
            fanów!
          </span>
        </div>
        <div class="card-items__card">
          <span class="card-items__icon"><svg-icon icon="microphone" filled/></span>
          <span class="card-items__text">
            Wszystkie sezony Twoich ulubionych kreskówek dostępne w wersji
            <b>dubbingowej</b>!
          </span>
        </div>
      </div>
      <span class="section__text">
        Sprawdź jakie kreskówki są w naszej ofercie <a href="#">tutaj</a>!
      </span>
    </section>
    <section class="section" id="plans">
      <h2 class="section__title">Kup dostęp</h2>
      <div class="plan-cards">
        <div class="plan-card">
          <span class="plan-card__type">Abonament</span>
          <span class="plan-card__price"><span class="line">4 $</span></span>
          <span class="plan-card__title">1 Dzień</span>
          <button type="button" class="plan-card__button">Kup dostęp</button>
        </div>
        <div class="plan-card">
          <span class="plan-card__type">Abonament</span>
          <span class="plan-card__price"><span class="line">25 $</span></span>
          <span class="plan-card__title">Miesiąc</span>
          <button type="button" class="plan-card__button">Kup dostęp</button>
        </div>
        <div class="plan-card">
          <span class="plan-card__type">Abonament</span>
          <span class="plan-card__price"><span class="line">150 $</span></span>
          <span class="plan-card__title">Rok</span>
          <button type="button" class="plan-card__button">Kup dostęp</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script></script>

<style lang="scss" scoped>
.hero{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.hero__title h1{
  font-size: 4em;
  font-family: "Lovelo";
}
.hero__title__undertext{
  font-family: "Montserrat";
  font-weight: 600;
  line-height: 200%;
}
.hero__button{
  color: #fff;
  display: block;
  position: relative;
  font-size: 1.2em;
  padding: 20px 200px;
  font-family: "Lovelo";
  color: #fff;
  background-color: #f73e3e;
  transition: all 0.4s;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  transition: transform 0.3s;
  box-shadow: 0px 0px 40px 0px rgba(247,62,62,0.9);
  transform-style: preserve-3d;
  text-decoration: none;
}
.hero__button::after{
  content: "";
  position: absolute;
  top: -7px;
  left:-7px;
  width: calc(100% + 8px) ;
  height: calc(100% + 8px);
  border: 3px solid #f73e3e;
  border-radius: 25px;
  z-index: -2;
  transition: transform 0.3s;
  box-sizing: content-box;
  transform: translateZ(-1px);
}
.hero__button::before{
  content: "";
  position: absolute;
  top: -60px;
  right: 0;
  width: 100px;
  height: 100px;
  background: url('~@/assets/icons/rocket.svg');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  transform: translateZ(-1px) rotate(45deg);
}
.hero__button:hover{
transform: scale(0.95);
}
.hero__button:hover::after{
  transform: translateZ(-1px) scale(1.05);
  transition: transform 0.3s;
}
.hero__button:hover::before{
  transform: translateZ(-1px) rotate(45deg);
  transition: transform 0.3s;
  z-index: -1;
}
.hero__button-addtext{
  position: absolute;
  font-size: 0.8em;
  font-family: "Montserrat";
  font-weight: 600;
  white-space: nowrap;
  bottom: 0;
  right: -100px;
  color: #111;
  padding: 10px 15px;
  background-color: #fff;
  transform: rotate(-10deg);
}
.text--special{
  font-weight: bold;
}
.hero__actions{
  margin-top: 50px;
}
.section{
  padding: 50px;
}
.section__title{
  font-family: "Lovelo";
  text-align: center;
  font-size: 2em;
  line-height: 150%;
}
.card-items{
  background-color: rgba(16, 22, 40, 0.9);
  display: flex;
  padding: 30px;
  border-radius: 100vh;
  text-align: center;
  margin-top: 20px;
}
.card-items__card{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0% 3%;
  font-size: 1.1em;
  line-height: 150%;
}
.card-items__icon{
  font-size: 5em;
}
.card-items__text{
  margin-top: 20px;
}
.section__text{
  display: block;
  text-align: center;
  font-size: 1.1em;
  margin: 25px 0;
}
.section__text a{
  font-weight: bold;
  color: #fcbc1d;
}

.plan-cards{
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 300px;
}
.plan-card{
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 2px solid #fff;
  padding: 15px;
  width: 250px;
  height: 350px;
  margin: 0 1%;
  border-radius: 5px;
  overflow:hidden;
  transition: all 0.5s;
  position: relative;
  z-index: 1;
}
.plan-card::after{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url('~@/assets/images/plan_card_background.jpg');
  background-attachment: fixed;
  background-position: 20% top;
  background-size: 100%;
  opacity: 0.3;
  z-index: -1;
  transition: all 0.5s;
}
.plan-card:hover::after{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url('~@/assets/images/plan_card_background.jpg');
  background-attachment: fixed;
  background-position: 20% top;
  background-size: 100%;
  opacity: 0.9;
  transition: all 0.5s;
  z-index: -1;
}
.plan-card:hover{
  transition: all 0.5s;
  transform: translateY(-5px);
  box-shadow: 0px 0px 50px 0px rgb(255 255 255 / 10%);
}
.plan-card__type{
  font-size: 0.9em;
  font-weight: bold;
  text-transform: uppercase;
}
.plan-card__price{
  font-size: 1.7em;
  margin-top: 20px;
}
.line{
  position: relative;
  padding: 0 20px;
}
.line::before{
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: 300%;
  height: 3px;
  background: white;
}
.line::after{
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: 300%;
  height: 3px;
  background: white;
}
.plan-card__title{
  font-family: "Lovelo";
  font-size: 3em;
  padding-top: 40%;
  flex: 1;
}
.plan-card__button{
  padding: 10px 30px;
  margin: 0 10%;
  border: 2px solid #fcbc1d;
  font-family: 'Roboto',sans-serif;
  color: #fcbc1d;
  background: transparent;
  font-weight: 900;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.9em;
  cursor: pointer;
  transition: all 0.4s;
}
.plan-card__button:hover{
  transition: all 0.4s;
  color: #111;
  background-color: rgba(252, 188, 29, 0.8);
  box-shadow: 0px 0px 50px 0px rgb(252 188 29);
}
.section#plans{
  padding-top: 180px;
}
</style>
