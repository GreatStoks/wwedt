<template>
  <header class="b-layout__header">
    <div class="b-header">
        <router-link to="/">
          <div class="header-elem"><img src="../assets/logo.png" class="logo-main">Home-лого</div>
        </router-link>
      
      
      <router-link to="/about"><div class="header-elem">About</div></router-link>

      <router-link to="/about"><div class="header-elem">Project</div></router-link>

      <router-link to="/about"><div class="header-elem">Events</div></router-link>

      <router-link to="/about"><div class="header-elem">News</div></router-link>

      <router-link to="/about"><div class="header-elem">Search-logo</div></router-link>

    </div>
  </header>
</template>

<script>
export default {

}
</script>
<style scoped lang="scss">


.header-elem {
  float: left;
  margin: 0 1rem 0 0;
  height: 2rem;
  display: flex;
  align-items: center;
}

.logo-main {
  max-height: 50px;
  max-width: 50px;
  margin: 0.5rem;
}

</style>
