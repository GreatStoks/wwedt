<template>
    <div class="about">
    <nav-pan/>
    <div class="b-layout__main">
    <h1>This is an about page</h1>
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
.about {
  display: flex;
  margin: 0 1rem 0 1rem;
}
</style>