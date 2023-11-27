<template>
  <header class="b-layout__header">
    <div class="b-header">
        <router-link to="/">
          <div class="header-elem"><img src="../assets/logo.png" class="logo-main">Home</div>
        </router-link>
      
      <router-link to="/about"><div class="header-elem">About</div></router-link>

      <router-link to="/projects"><div class="header-elem">Projects</div></router-link>

      <router-link to="/events"><div class="header-elem">Events</div></router-link>

      <router-link to="/news"><div class="header-elem">News</div></router-link>
      
      <div class="header-elem__right"><img src="../assets/search.png" class="search-png">
      <br/>
      <span class="btn-contact">Связаться</span></div>
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

.header-elem__right {
  float: right;
  display: flex;
  margin-top: -1rem;
  margin-right: 10%;
}

.logo-main, .search-png {
  height: calc(2rem + 1vw);
  width: calc(2rem + 1vw);
  margin-right: 0.5rem;

}

.search-png {
  align-items: right;
  position: absolute;
  top: 50%;
  right: 19%;
  margin-top: -1.5rem;
}

.btn-contact {
  background-color: #d65cb8;
  width: 130px;
  height: 30px;
  position: absolute;
  right: 4%;
  top: 50%;
  margin: -15px 1rem 1rem 1rem;
  border-radius: 30% / 120%;
  transition: 0.4s linear;

}

.btn-contact:hover {
  background-color: #b83ea4;

}

.btn-contact:hover:active {
  background-color: #a0979b;
}

span {
  text-align: center;
  font-size: 23px;
}

</style>
