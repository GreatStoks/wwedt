<template>
    <div class="projects-container">
    <nav-pan/>
    <div class="b-layout__main">
  <h1>ПРОЕКТЫ</h1>
    </div>
    </div>
</template>

<script>
import NavPan from '@/components/NavPan.vue'
export default {
  components: { NavPan },

}
</script>

<style>
.projects-container {
    display: flex;
    margin: 0 1rem 0 1rem;
}
</style>