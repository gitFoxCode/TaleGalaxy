<template>
  <header class="header">
    <div class="logo" @click="$router.push({ path: '/' })">
      <img src="@/assets/icons/logo.svg" alt="Obrazek galaktyki" />
      <span class="logo__text"
        >Galaktyka<span class="logo__text--special">Bajek</span></span
      >
    </div>
    <nav class="nav">
      <div class="searchbar">
        <AutoComplete
          v-model="selectedSerie"
          :suggestions="list"
          @complete="searching($event)"
          field="title"
          placeholder="Szukaj bajek..."
        >
          <template #item="slotProps">
            <img
              :alt="slotProps.item.title"
              :src="`${API}data/thumbs/${slotProps.item.thumb}`"
            />
            <div class="option__info">
              <span class="option__info__title">{{
                slotProps.item.title
              }}</span>
              <span class="option__info__description">{{
                slotProps.item.description.substring(0, 110).trim() + "..."
              }}</span>
            </div>
          </template>
        </AutoComplete>
      </div>
      <template v-if="store.state.isUserLoggedIn">
        <Nav_user v-if="store.state.user.rank == 1" />
        <Nav_premium v-if="store.state.user.rank == 2" />
        <Nav_moderator v-if="store.state.user.rank == 3" />
        <Nav_admin v-if="store.state.user.rank == 4"/>
      </template>
      <Nav_guest v-else />
    </nav>
  </header>
</template>

<style lang="scss">
.header{
.buttons {
  display: flex;
  margin-left: 30px;
}
.button {
  position: relative;
}
.button a,
.button button {
  display: block;
  height: 80px;
  display: flex;
  align-items: center;
  margin: 0 3px;
  font-family: "Lovelo";
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 400;
  font-style: normal;
  padding: 0 20px;
  transition: background-color 0.4s;
  border: none;
  background-color: transparent;
}
.button a:hover,
.button button:hover {
  background-color: rgba(16, 22, 40, 0.5);
  cursor: pointer;
}
.button--active a {
  color: #fc371d;
}
.button--active::before {
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
.button--active::after {
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
}

</style>

<style lang="scss" scoped>
.header {
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
.nav {
  display: flex;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.logo a {
  text-decoration: none;
}
.logo img {
  width: 55px;
}
.logo__text {
  font-family: "Lovelo";
  font-size: 24px;
  color: #fff;
  margin-left: 20px;
}
.searchbar {
  position: relative;
}
.searchbar input {
  padding: 7px 20px;
  border-radius: 100vh;
  border: none;
  font-family: "Poppins";
  font-size: 0.9em;
  width: 300px;
  text-indent: 20px;
}
.searchbar::after {
  content: "";
  position: absolute;
  width: 35px;
  height: 35px;
  left: 5px;
  top: 0;
  background: url("~@/assets/icons/search.svg");
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
}
.p-autocomplete-item img {
  width: 65px;
  height: 65px;
  object-fit: cover;
  border-radius: 100vh;
  border: 2px solid #eee;
  box-shadow: 0px 0px 0px 2px #c8dedf; /* Opera 10.5, IE9, FF4+, Chrome 6+, iOS 5 */
}
.option__info {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  line-height: 120%;
}
.option__info__title {
  font-size: 1.2em;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #4d5665;
}
.option__info__description {
  font-family: "Roboto", sans-serif;
  max-width: 350px;
  margin-top: 5px;
  white-space: normal;
}
</style>
<style>
.p-autocomplete .p-inputtext {
  padding: 7px 20px !important;
  border-radius: 100vh !important;
  border: none;
  font-family: "Poppins";
  font-size: 0.9em;
  width: 300px;
  text-indent: 20px;
  font-family: "Roboto", sans-serif !important;
}
.p-autocomplete-item {
  display: flex;
  align-items: center;
}
.p-autocomplete-items {
  top: 53px;
  position: fixed;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
}
</style>

<script>
import SeriesService from "@/services/SeriesService";
import Nav_guest from "@/components/nav/guest.vue";
import Nav_user from "@/components/nav/user.vue";
import Nav_premium from "@/components/nav/premium.vue";
import Nav_moderator from "@/components/nav/moderator.vue";
import Nav_admin from "@/components/nav/admin.vue";
import { useStore } from "vuex";
import { ref, computed, watch, onMounted } from "vue";
import axios from 'axios'

export default {
  name: "Nav",
  components: {
    Nav_guest,
    Nav_user,
    Nav_premium,
    Nav_moderator,
    Nav_admin,
  },
  setup() {
    const API = axios.defaults.baseURL;

    const store = useStore();
    console.log("Store state:", store.state);
    console.log(store);

    const selectedSerie = ref(null);
    const list = ref([]);
    let search = "";

    async function getFullList() {
      list.value = await SeriesService.getAllSeries({
        search,
      });
    }

    function searching(ev) {
      setTimeout(() => {
        search = ev.query;
        getFullList();
      }, 250);
    }

    return { list, selectedSerie, store, searching, API };
  },
};
</script>
