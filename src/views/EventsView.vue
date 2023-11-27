<template>
    <div class="events-container">
    <nav-pan/>
    <div class="b-layout__main">
  <h1>Events</h1>
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
.events-container {
    display: flex;
    margin: 0 1rem 0 1rem;
}
</style>