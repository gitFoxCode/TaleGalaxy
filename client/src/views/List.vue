<template>
  <section class="section">
    <h1 class="section__title">Lista bajek</h1>
    <section class="section__content">
      <div class="options">
        <div class="options__search">
          <label for="search-input">
            <span class="label__title">Wyszukaj</span>
            <input
              type="text"
              class="search__input"
              placeholder="Szukaj bajki..."
              @input="searching"
            />
          </label>
        </div>
        <div class="options__sort">
          <label for="sort-select">
            <span class="label__title">Sortuj po</span>
            <Dropdown
              v-model="selected"
              :options="optionsSelect"
              optionLabel="name"
              placeholder="Sortuj po"
              :showClear="false"
              @change="sorting"
            >
              <template #value="slotProps">
                <div class="select__option">
                  <svg-icon
                    :icon="`${slotProps.value.icon}`"
                    :class="`select__icon--${slotProps.value.icon}`"
                  />
                  <div>{{ slotProps.value.name }}</div>
                </div>
              </template>
              <template #option="slotProps">
                <div class="select__option">
                  <svg-icon
                    :icon="`${slotProps.option.icon}`"
                    :class="`select__icon--${slotProps.option.icon}`"
                  />
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Dropdown>
          </label>
        </div>
      </div>
      <ul>
        <template v-if="series.length > 0">
          <Listcard
            v-for="item in series"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :available="item.available"
            :dubbing="item.dubbing"
            :pegi="item.pegi"
            :rating="item.rate"
            :station="item.station"
            :src="item.src"
            :img="item.thumb"
          />
        </template>
        <template v-else>
          <div class="empty">
            <p>
              Nie znaleziono takiej bajki jak
              <span class="text--special">{{ search }}</span>
            </p>
          </div>
        </template>
      </ul>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.section__content {
  margin-top: 20px;
  border-radius: 20px;
  padding: 50px 25px;
  padding-top: 15px;
  background-color: #f7f8fc;
  color: #111;
}
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.empty {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-align: center;
  color: #333;
  font-size: 1.1em;
  padding: 60px 0;
}
/*  Przenies do app.vue */
.options label {
  display: flex;
  flex-direction: column;
}
.label__title {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #555555;
  text-transform: uppercase;
  font-size: 0.9em;
}
.search__input {
  width: 350px;
  color: #222;
  padding: 10px;
  border-radius: 25px;
  border: 2px solid #999;
  text-indent: 30px;
  outline: none;
  font-family: "Roboto", sans-serif;
  margin-top: 5px;
  background: url("~@/assets/icons/search.svg") no-repeat scroll 7px 7px;
  background-size: 15px;
  background-position: 15px;
  transition: all 0.4s;
}
.search__input:focus {
  border-color: #333;
  transition: all 0.4s;
  width: 400px;
}
.select__option {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #585858;
  font-size: 1em;
}
.select__option svg {
  margin-right: 10px;
}
.p-dropdown {
  margin-top: 5px;
  border-radius: 25px;
  border: 2px solid #999;
  padding-left: 10px;
}
.select__icon--fire {
  color: #ffa060;
}
.select__icon--heart {
  color: #ff6060;
}
.select__icon--asc {
  color: #60bfff;
}
.select__icon--old {
  color: #929292;
}
</style>

<script>
// import levenshtein from 'js-levenshtein';
import Listcard from "@/components/Listcard.vue";
import { ref, onMounted } from "vue";

import SeriesService from "@/services/SeriesService";

export default {
  name: "List",
  components: {
    Listcard,
  },
  setup() {
    const series = ref([]);
    let search = "";
    let searchSort = "rate";
    let debounce = null;
    let loading = true;

    function searching(ev) {
      clearTimeout(debounce);
      loading = true;
      debounce = setTimeout(async () => {
        search = ev.target.value;
        await getFullList();
        loading = false;
      }, 600);
    }

    async function getFullList() {
      series.value = await SeriesService.getAllSeries({
        sort: searchSort,
        search,
      });
    }

    onMounted(() => {
      getFullList();
    });

    const selected = ref({ name: "Ocena", icon: "heart", sort: "rate" });
    const optionsSelect = ref([
      { name: "Ocena", icon: "heart", sort: "rate" },
      { name: "Najnowsze", icon: "fire", sort: "new" },
      { name: "Najstarsze", icon: "old", sort: "old" },
      { name: "Alfabetycznie", icon: "asc", sort: "asc" },
    ]);

    function sorting(ev) {
      searchSort = ev.value.sort;
      getFullList();
    }

    return { sorting, search, selected, optionsSelect, series, searching };
  },
};
</script>