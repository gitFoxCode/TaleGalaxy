<template>
  <section class="panel">
    <div class="header">
      <h1 class="panel__title">Series ({{seriesCount}})</h1>
      <input type="text" class="header__input" placeholder="Wyszukaj...">
    </div>
    
    <DataTable 
    :value="series"
    :paginator="true" 
    :rows="10"
    selectionMode="single" 
    responsiveLayout="scroll">
        <Column field="id" header="#ID" :sortable="true"></Column>
        <Column field="title" header="Title" :sortable="true">
          <template #body="slotProps">
            {{slotProps.data.title}}
          </template>
        </Column>
        <Column field="description" header="Description" :sortable="true"></Column>
        <Column field="station" header="Station" :sortable="true"></Column>
        <Column field="rate" header="Rateing" :sortable="true"></Column>
        <Column field="src" header="SRC link" :sortable="true"></Column>
        <Column field="thumb" header="Thumbnail" :sortable="true">
            <template #body="slotProps">
                <div class="image__wrapper">
                    <img class="table-img" :src="`${baseURL}data/thumbs/${slotProps.data.thumb}`" alt="Serie Thumbnail"/>
                </div>
            </template>
        </Column>
        <Column field="dubbing" header="Dubbing" :sortable="true">
        <template #body="slotProps">
            {{ slotProps.data.dubbing.join(', ') }}
        </template>
        </Column>
        <Column field="pegi" header="PEGI" :sortable="true"></Column>
        <Column field="available" header="Status" :sortable="true">
            <template #body="slotProps">
                <span class="badge badge--green" v-if="slotProps.data.available">
                Available
                </span>
                <span class="badge badge--reddish" v-else>
                Not available
                </span>
            </template>
        </Column>
        <Column header="Actions">
          <template #body>
            <div class="table__options">
              <button type="button" class="btn btn--translate" title="Tłumaczenia"><svg-icon icon="translation"/></button>
              <button type="button" class="btn btn--edit" title="Edytuuj"><svg-icon icon="edit"/></button>
              <button type="button" class="btn btn--delete" title="Usuń"><svg-icon icon="trash"/></button>
            </div>
          </template>
        </Column>
    </DataTable>
  </section>
</template>

<script>
import { formatDistance, subDays } from 'date-fns'
import { ref, onMounted } from 'vue';
import AdminService from "@/services/AdminService";
import SeriesService from '@/services/SeriesService';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  components: {
    DataTable,
    Column
  },
    setup() {
      onMounted(async () => {
        series.value = await SeriesService.getAllSeries()
        seriesCount.value = (await AdminService.getCount({module: 'series'})).count
      })

      const series = ref([]);
      const seriesCount = ref(0)
      const baseURL = AdminService.getBaseURL()
      return { baseURL, series, seriesCount, formatDistance, subDays }
    }
}
</script>  

<style lang="scss" scoped>
.panel{
  padding: 1rem;
  background-color: #FAFAFA;
  width: 100%;
  color: #333;
}
.header{
  display: flex;
  gap: 1rem;
}
.header__input{
  border-radius: 50rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  border: 1px solid #ECECEC;
  padding: 0.3rem 1rem;
  text-indent: 0.5rem;
  position: relative;
}
.panel__title{
  font-size: 2em;
  font-weight: bold;
}
.table-img{
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: 50%;
}
.image__wrapper{
    width: 100%;
    height: 100%;
    text-align: center;
}
</style>
