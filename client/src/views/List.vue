<template>
    <section class="section">
        <h1 class="section__title">Lista bajek</h1>
        <section class="section__content">
            <div class="options">
                <div class="options__search">
                    <label for="search-input">
                        <span class="label__title">Wyszukaj</span>
                        <input type="text" class="search__input" placeholder="Szukaj bajki..." v-model="search" id="search-input">
                    </label>
                </div>
                <div class="options__sort">
                    <label for="sort-select">
                        <span class="label__title">Sortuj po</span>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Sortuj po" :showClear="false">
                            <template #value="slotProps">
                                <div class="select__option">
                                    <svg-icon :icon="`${slotProps.value.icon}`" :class="`select__icon--${slotProps.value.icon}`" />
                                    <div>{{slotProps.value.name}}</div>
                                </div>
                            </template>
                            <template #option="slotProps">
                                <div class="select__option">
                                    <svg-icon :icon="`${slotProps.option.icon}`" :class="`select__icon--${slotProps.option.icon}`" />
                                    <div>{{slotProps.option.name}}</div>
                                </div>
                            </template>
                        </Dropdown>
                    </label>
                </div>
            </div>
            <ul>
                <template v-if="filteredList.length > 0">
                    <Listcard v-for="item in filteredList" :key="item"
                        :title=item.title
                        :src=item.src
                        :img=item.img
                        :station=item.station
                        :pegi=item.pegi
                        :addition=item.addition
                        :description=item.description
                        :rating=item.rating
                        :dubbing=item.dubbing
                        :available=item.available
                        />
                </template >
                <template v-else>
                    <div class="empty">
                        <p>Nie znaleziono takiej bajki jak <span class="text--special">{{search}}</span></p>
                    </div>
                </template >
            </ul>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.section__content{
    margin-top: 20px;
    border-radius: 20px;
    padding: 50px 25px;
    padding-top: 15px;
    background-color: #f7f8fc;
    color: #111;
}
.options{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.empty{
	font-family: 'Roboto',sans-serif;
	font-weight: bold;
	text-align: center;
	color: #333;
	font-size: 1.1em;
	padding: 60px 0;
}
/*  Przenies do app.vue */
.options label{
    display: flex;
    flex-direction: column;
}
.label__title{
    font-family: 'Roboto',sans-serif;
    font-weight: bold;
    color: #555555;
    text-transform: uppercase;
    font-size: 0.9em;
}
.search__input{
    width: 350px;
    color: #222;
    padding: 10px;
    border-radius: 25px;
    border: 2px solid #999;
    text-indent: 30px;
    outline: none;
    font-family: 'Roboto',sans-serif;
    margin-top: 5px;
    background: url('~@/assets/icons/search.svg') no-repeat scroll 7px 7px;
    background-size: 15px;
    background-position: 15px;
    transition: all 0.4s;
}
.search__input:focus {
    border-color: #333;
    transition: all 0.4s;
    width: 400px;
}
.select__option{
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-family: "Roboto",sans-serif;
    font-weight: bold;
    color: #585858;
    font-size: 1em;
}
.select__option svg{
    margin-right: 10px;
}
.p-dropdown{
    margin-top: 5px;
    border-radius: 25px;
    border: 2px solid #999;
    padding-left: 10px;
}
.select__icon--fire{
    color: #FFA060;
}
.select__icon--heart{
    color: #FF6060;
}
.select__icon--asc{
    color: #60BFFF;
}
.select__icon--old{
    color: #929292;
}
</style>

<script>
import levenshtein from 'js-levenshtein';
import Listcard from "@/components/Listcard.vue";
import { ref, computed, watch, onMounted  } from 'vue'; //jezeli chce reaktywne gowno

import SeriesService from '@/services/SeriesService'

export default {
    name: "List",
    components: {
        Listcard,
    },
    setup(){

        const series = ref(null);

        async function getFullList(){
            series.value = await SeriesService.getAllSeries();
            console.log(series);
        }

        onMounted(getFullList) 
        
        const selectedCity = ref({name: 'Ocena', icon: 'heart', sort: 'rate'});
		const cities = ref([
			{name: 'Ocena', icon: 'heart', sort: 'rate'},
			{name: 'Najnowsze', icon: 'fire', sort: 'new'},
			{name: 'Najstarsze', icon: 'old', sort: 'old'},
			{name: 'Alfabetycznie', icon: 'asc', sort: 'asc'}
		]);



        const search = ref("");

        const filteredList = computed(()=>{
            return list.value.filter((item)=>{ 
                let searchVal = search.value.toLowerCase().trim();
                let itemTitleVal = item.title.toLowerCase().trim();
                let itemDescVal = item.description.toLowerCase().trim();
                /* TODO?: levenshtein distance for sentences not only words */
               return levenshtein(itemTitleVal,searchVal) < 3 || levenshtein(itemDescVal,searchVal) < 3 || itemTitleVal.match(searchVal) || itemDescVal.match(searchVal);
            });
        })

        Array.prototype.sortBy = function(p) {
            return this.slice(0).sort(function(a,b) {
                return (a[p] < b[p]) ? 1 : (a[p] > b[p]) ? -1 : 0;
            });
        }

        function sort(option){
            switch (option) {
                case 'rate':
                    console.log('Sort: Rate');
                    list.value = list.value.sortBy('rating')
                    break;
                case 'new':
                    console.log("Sort: New");
                    list.value = list.value.sortBy('dateAdd');
                    break;
                case 'asc':
                    console.log("Sort: Asc");
                    list.value = list.value.sort((a, b) => (a.title > b.title) ? 1 : -1);
                    break;
                case 'old':
                    console.log("Sort: Old");
                    list.value = list.value.sort((a, b) => (a.date > b.date) ? 1 : -1);
                    break;
                default:
                    console.log(`Sorry, we are out of.`);
            }
        }

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

        watch(() => selectedCity.value, (newEl, oldEl) => {
            console.log(newEl.sort);
            console.log(list.value);
            sort(newEl.sort);
        }, { immediate: true });

        return {list, sort, search, filteredList,selectedCity,cities, series};
    }

}
</script>