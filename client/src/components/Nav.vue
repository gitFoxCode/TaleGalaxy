<template>
    <header class="header">
        <div class="logo" @click="$router.push({ path: '/'})">
            <img src="@/assets/icons/logo.svg" alt="Obrazek galaktyki">
            <span class="logo__text">Galaktyka<span class="logo__text--special">Bajek</span></span>
        </div>
        <nav class="nav">
            <div class="searchbar">
                <AutoComplete v-model="selectedCountry" :suggestions="filteredCountries" @complete="searchCountry($event)" field="title"  placeholder="Szukaj bajek...">
                    <template #item="slotProps">
		                <img :alt="slotProps.item.title" :src="require(`@/tales/thumbs/${slotProps.item.img}`)" />
                        <div class="option__info">
                            <span class="option__info__title">{{slotProps.item.title}}</span>
                            <span class="option__info__description">{{slotProps.item.description.substring(0, 110).trim() + '...' }}</span>
                        </div>
	                </template>
                </AutoComplete>
            </div>
            <Nav_user  v-if="store.state.isUserLoggedIn" />
            <Nav_guest v-else />
        </nav>
    </header>
</template>

<style>
.buttons{
    display: flex;
    margin-left: 30px;
}
.button{
    position: relative;
}
.button a{
    display: block;
    height: 80px;
    display: flex;
    align-items: center;
    margin: 0 3px;
    font-family: 'Lovelo';
    color: #fff;
    text-decoration: none;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 400;
    font-style: normal;
    padding: 0 20px;
    transition: background-color 0.4s;
}
.button a:hover{
    background-color: rgba(16, 22, 40, 0.5);
}
.button--active a{
    color: #fc371d;
}
.button--active::before{
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #fc371d;
    animation: showAnim 0.3s ease forwards;
    transition: all 0.4s;
}
.button--active::after{
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: transparent;
    box-shadow: 2px 0px 40px 10px rgb(252 55 29);
    animation: showAnim 0.3s ease forwards;
}
</style>

<style lang="scss" scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 80px;
    background-color: rgba(16, 22, 40, 0.9);
    border-bottom: 3px solid #18213c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
}
.nav{
    display: flex;
    align-items: center;
}
.logo{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.logo a{
    text-decoration: none;
}
.logo img{
    width: 55px;
}
.logo__text{
    font-family: 'Lovelo';
    font-size: 24px;
    color: #fff;
    margin-left: 20px;
}
.searchbar{
    position: relative;
}
.searchbar input{
    padding: 7px 20px;
    border-radius: 100vh;
    border: none;
    font-family: "Poppins";
    font-size: 0.9em;
    width: 300px;
    text-indent: 20px;
}
.searchbar::after{
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    left: 5px;
    top: 0;
    background: url('~@/assets/icons/search.svg');
    background-size: 40%;
    background-position: center;
    background-repeat: no-repeat;
}
.p-autocomplete-item img{
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: 100vh;
    border: 2px solid #eee;
    box-shadow: 0px 0px 0px 2px #C8DEDF; /* Opera 10.5, IE9, FF4+, Chrome 6+, iOS 5 */
}
.option__info{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    line-height: 120%;
}
.option__info__title{
    font-size: 1.2em;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: #4D5665;
}
.option__info__description{
    font-family: "Roboto", sans-serif;
    max-width: 350px;
    margin-top: 5px;
    white-space: normal;
}
</style>
<style>
.p-autocomplete .p-inputtext{
    padding: 7px 20px !important;
    border-radius: 100vh !important;
    border: none;
    font-family: "Poppins";
    font-size: 0.9em;
    width: 300px;
    text-indent: 20px;
    font-family: "Roboto", sans-serif !important;
}
.p-autocomplete-item{
    display: flex;
    align-items: center;
}
.p-autocomplete-items{
    top: 53px;
    position: fixed;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
}
</style>

<script>
import Nav_guest from "@/components/Nav_guest.vue";
import Nav_user from "@/components/Nav_user.vue";
import { useStore } from 'vuex';
import { ref, computed, watch } from 'vue'; //jezeli chce reaktywne gowno

export default {
    name: "Nav",
    components: {
        Nav_guest,
        Nav_user
    },
    setup(){
        const filteredCountries = ref(null);
        const selectedCountry = ref(null);

        const store = useStore();

        const  list = ref([{
            title: "Pora na przygodę!",
            src: "pora-na-przygode",
            img: "adventure-time.jpg",
            pegi: 6,
            station: "DisneyXD",
            addition: "3 Sezony",
            description: "Finn i pies Jake bronią mieszkańców krainy Ooo przed wrogami",
            rating: 8,
            dubbing: ['pl','eng'],
            available: true,
            dateAdd: new Date('2020-06-11T00:00')
        },
        {
            title: "Pokemon",
            src: "pokemon",
            img: "pokemon.jpg",
            pegi: 3,
            station: "DisneyXD",
            addition: "2 Sezony",
            description: "Ash wyrusza w podróż, by zostać najlepszym trenerem pokemonów na świecie",
            rating: 8,
            dubbing: ['pl','eng', 'ger'],
            available: true,
            dateAdd: new Date('2010-06-11T00:00')
        },
        {
            title: "SpongeBob Kanciastoporty",
            src: "spangebob",
            img: "spangebob.jpg",
            pegi: 3,
            station: "Disney Channel",
            addition: "7 Sezonów",
            description: "Fabuła serialu koncentruje się na tytułowym SpongeBobie Kanciastoportym, energicznej i pozytywnie nastawionej do świata gąbce morskiej z wyglądu przypominającej gąbkę kuchenną.",
            rating: 9.5,
            dubbing: ['pl','eng', 'ger'],
            available: true,
            dateAdd: new Date('2011-06-11T00:00')
        },
        {
            title: "Xiaolin – pojedynek mistrzów",
            src: "xiaolin",
            img: "xiaolin.jpeg",
            pegi: 12,
            station: "Cartoon Network",
            addition: "3 Sezony",
            description: "Serial opowiada o losach czwórki dzieci, szkolących się w klasztorze Shaolin.",
            rating: 8.3,
            dubbing: ['pl', 'jp', 'eng', 'ger', 'fr'],
            available: true,
            dateAdd: new Date('2016-06-11T00:00')
        },
        {
            title: "Wodogrzmoty Małe",
            src: "gravity-falls",
            img: "gravity-falls.jpg",
            pegi: 12,
            station: "DisneyXD",
            addition: "4 Sezony",
            description: "Podczas wakacji spędzanych u wujka, bliźniaki Dipper i Mabel odkrywają tajemnice miasteczka Gravity Falls.",
            rating: 9.1,
            dubbing: ['pl', 'eng'],
            available: true,
            dateAdd: new Date('2020-05-11T00:00')
        },
        {
            title: "Ben 10",
            src: "ben-ten",
            img: "ben10.jpg",
            pegi: 12,
            station: "Cartoon Network",
            addition: "6 Sezonów",
            description: "Ben jest przeciętnym chłopcem do dnia, w którym znajduje niesamowite urządzenie zwane Omnitrix, które pozwala mu zmieniać się w kosmitów.",
            rating: 8.41,
            dubbing: ['pl', 'eng'],
            available: true,
            dateAdd: new Date('2018-06-11T00:00')
        },
        {
            title: "Laboratorium Dextera",
            src: "dexter",
            img: "dexter.jpg",
            pegi: 12,
            station: "Cartoon Network",
            addition: "2 Sezony",
            description: "Młody naukowiec buduje w domu tajne laboratorium, o czym wie tylko jego irytująca siostra.",
            rating: 7.3,
            dubbing: ['pl', 'eng'],
            available: true,
            dateAdd: new Date('2009-06-11T00:00')
        }]);

        function searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    filteredCountries.value = [...list.value];
                }
                else {
                    filteredCountries.value = list.value.filter((item) => {
                        return item.title.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            }, 250);
        }

        return { filteredCountries, selectedCountry, searchCountry, store  }
    }
}
</script>