<template>
    <li class="card">
        <div class="card__avatar">
            <img src="@/assets/images/placeholder-image.jpg" :alt="`Obrazek zastępczy dla ${title}`" v-if="img =='' ">
            <img :src="require(`@/tales/thumbs/${img}`)" v-else @mouseover="hover = true" @mouseleave="hover = false" />
             <img class="img__inspect" :src="require(`@/tales/thumbs/${img}`)" v-if="hover">
            <div class="card__pegi">{{pegi}}</div>
        </div>
        <div class="card__info">
            <span class="card__title"> {{ title }} </span>
            <span class="card__title-station"> {{ station }} </span>
            <span class="card__info-addition"> {{ addition }} </span>
        </div>
        <div class="card__inner">
            <span class="card__inner__title">Opis</span>
            <span class="card__inner__value"> {{ description }} </span>
        </div>
        <div class="card__inner">
            <span class="card__inner__title">Ocena</span>
            <div class="hearts">
                <span class="hearts__title">{{rating}}/10</span>
                <div class="hearts__inner">
                    <template v-for="i in 10" :key="i">
                        <svg-icon icon="heart" class="filled" v-if="i <= rating" />
                        <svg-icon icon="heart" v-else/>
                    </template>
                </div>
            </div>
        </div>
        <div class="card__inner">
            <span class="card__inner__title">Dubbing</span>
            <ul class="flags">
                <li v-for="item in dubbing" :key="item"> 
                    <svg-icon :icon="`flag-${item}`" />
                    
                </li>
            </ul>
        </div>
        <div class="card__inner">
            <span class="card__inner__title">Dostępny</span>
            <div v-if="available" class="card__available">Tak</div>
            <div v-else class="card__available card__available--false">Nie</div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.card{
    padding: 10px 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}
.card__avatar{
    position: relative;
}
.card__pegi{
    position: absolute;
    bottom: 0;
    right: 2px;
    width: 30px;
    height: 30px;
    background-color: #eee;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
}
.card__avatar img{
    width: 70px;
    height: 70px;
    border-radius: 100vh;
    object-fit: cover;
    cursor: zoom-in;
}
.card__info{
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    border-right: 2px dotted #eeecec;
    min-height: 70px;
    padding: 0 20px;
    min-width: 190px;
    max-width: 190px;
    box-sizing: content-box;
}
.card__inner{
   font-family: "Roboto", sans-serif;
   border-right: 2px dotted #eeecec;
   padding: 0 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center; 
   min-height: 70px;
   min-width: 125px;
   box-sizing: content-box;
}
.card__inner:last-of-type{
    border-right: 0;
}
.card__title{
    color: #636d7c;
    font-size: 1.2em;
    font-weight: 900;
    line-height: 130%;
}
.card__title-station{
    font-weight: 600;
    color: #d4dade;
    font-size: 0.9em;
    margin-top: 5px;
}
.card__info-addition{
    font-weight: 600;
    color: #6f93eb;
    margin-top: 15px;
    font-size: 1em;
}
.card__inner__title{
    font-weight: 600;
    color: #9ea5b3;
    font-size: 1em;
}
.card__inner__value{
    font-size: 0.9em;
    font-weight: 400;
    color: #9aa1ae;
    margin-top: 7px;
    max-width: 400px;
    line-height: 150%;
}
.hearts__title{
    display: block;
    margin-top: 7px;
    font-weight: bold;
    color: #ff6060;
    font-size: 1.1em;
}
.hearts__inner{
    margin-top: 5px;
    position: relative;
}
.hearts__inner .icon{
    margin: 0 1px;
    font-size: 0.9em;
    color: #CECECE;
}
.hearts__inner .filled{
    color: #FF6060;
}
.flags{
    margin-top: 10px;
    display: flex;
    max-width: 126px;
    flex-wrap: wrap;
    justify-content: center;
}
.flags li{
    font-size: 2em;
    margin: 0 5px;
}
.card__available{
    margin-top: 10px;
    font-size: 1.2em;
    color: #69c539;
    font-weight: bold;
}

.card__avatar .img__inspect{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    z-index: 3;
    border-radius: 0;
    cursor: normal;
    max-width: 60%;
    max-height: 100%;
}
</style>

<script>
export default {
    name: "Listcard",
    data() {
        return {
            hover: false,
        };
    },
    props: {
        title: String,
        img: String,
        src: String,
        gowno: String,
        pegi: Number,
        station: String,
        addition: String,
        description: String,
        rating: Number,
        dubbing: Array,
        available: Boolean
    }
}
</script>