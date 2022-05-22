<template>
  <section class="panel">
    <div class="header">
      <h1 class="panel__title">Users ({{usersCount}})</h1>
      <input type="text" class="header__input" placeholder="Wyszukaj...">
    </div>
    
    <DataTable 
    :value="users"
    :paginator="true" 
    :rows="10"
    selectionMode="single" 
    responsiveLayout="scroll">
        <Column field="id" header="#ID" :sortable="true"></Column>
        <Column field="email" header="Email" :sortable="true"></Column>
        <Column field="premiumFor" header="Premium" :sortable="true">
          <template #body="slotProps">
            <span :title="slotProps.data.premiumFor" v-if="slotProps.data.premiumFor !== null">
              {{formatDistance(new Date(slotProps.data.premiumFor), new Date(), { addSuffix: true })}}
            </span>
            <span else>
              Brak
            </span>
          </template>
        </Column>
        <Column field="createdAt" header="Created" :sortable="true">
          <template #body="slotProps">
            <span :title="slotProps.data.createdAt">
            {{ formatDistance(new Date(slotProps.data.createdAt), new Date(), { addSuffix: true }) }}
            </span>
          </template>
        </Column>
        <Column field="updatedAt" header="Updated" :sortable="true">
          <template #body="slotProps">
            <span :title="slotProps.data.updatedAt">
            {{ formatDistance(new Date(slotProps.data.updatedAt), new Date(), { addSuffix: true }) }}
            </span>
          </template>
        </Column>
        <Column field="rank" header="Rank" :sortable="true">
          <template #body="slotProps">
            <span class="badge badge--admin" v-if="slotProps.data.rank === 4">
            <svg-icon icon="admin-badge"/>
            Administrator
            </span>

            <span class="badge badge--green" v-if="slotProps.data.rank === 3">
            <svg-icon icon="admin-badge"/>
            Moderator
            </span>

            <span class="badge badge--premium" v-if="slotProps.data.rank === 2">
            <svg-icon icon="star"/>
            Premium
            </span>

            <span class="badge badge--user" v-if="slotProps.data.rank === 1">
            <svg-icon icon="users"/>
            User
            </span>

            <span class="badge badge--banned" v-if="slotProps.data.rank === 0">
            <svg-icon icon="ban"/>
            Banned
            </span>
          </template>
        </Column>
        <Column header="Actions">
          <template #body>
            <div class="table__options">
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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  components: {
    DataTable,
    Column
  },
    setup() {
      onMounted(async () => {
        users.value = await AdminService.getUsers()
        usersCount.value = (await AdminService.getCount({module: 'users'})).count
      })

      // TODO: Przerobić pobieranie użytkowników na backend, dodać edycje i usuwanie użytkowników

      const users = ref([]);
      const usersCount = ref(0)

      return { users, usersCount, formatDistance, subDays }
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
</style>