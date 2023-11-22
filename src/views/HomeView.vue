<template>
  <div class="homeview-container">
    <nav-pan/>
    <div class="b-layout__main">
    <h1>Заголовок Zagolovok</h1>
    </div>
  </div>
</template>

<script>
import NavPan from '@/components/NavPan.vue'

export default {
  name: 'HomeView',
  components: {
    NavPan
  },

}
</script>

<style lang="scss" scoped>
.homeview-container {
  display: flex;
  margin: 0 1rem 0 1rem;
}

.b-layout__main {
  margin: 3rem 0 0 0;
}
</style>