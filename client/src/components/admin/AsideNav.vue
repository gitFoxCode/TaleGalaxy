<template>
  <aside>
    <div class="aside__title">
      <svg-icon icon="admin-badge"/>
      <span class="title">Panel</span>
      <span class="title__exact">Administracyjny</span>
    </div>
    <nav>
      <ul>
          <li><router-link to="/admin"><svg-icon icon="dashboard"/> Dashboard</router-link></li>
          <li><router-link to="/admin/users"><svg-icon icon="users"/>Users</router-link></li>
          <li><router-link to="/admin/series"><svg-icon icon="series"/>Series</router-link></li>
          <li><router-link to="/admin/episodes"><svg-icon icon="episode"/>Episodes</router-link></li>
          <li><router-link to="/admin/codes"><svg-icon icon="ticket"/>Magic codes</router-link></li>
      </ul>
    </nav>
  </aside>

</template>

<script>
export default {
  name: "AsideNav",
};
</script>

<style lang="scss" scoped>
aside{
  height: 100vh;
  background-color: rgba(27, 22, 47, 0.75);
  padding-top: 4rem;
}
nav{
  ul{
    display: flex;
    flex-direction: column;
  }
  li a{
    display: flex;
    gap: 1rem;
    color: #FFF;
    padding: 1rem 2rem;
    text-decoration: none;
    transition: all 0.3s;
    &:hover{
      transition: all 0.3s;
      background-color: rgba(12, 11, 18, 0.2);
      transform: translateX(1rem)
    }
  }
  .router-link-exact-active{
    color: #F04C52;
    font-weight: bold;
    border-right: 3px solid #F04C52;
  }
}

.aside__title{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 2rem;
  .icon{
    font-size: 2em;
    margin-bottom: 1rem;
  }
  .title{
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
  .title__exact{
    font-weight: bold;
  }
}
</style>