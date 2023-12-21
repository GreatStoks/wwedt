<template>
    <div class="projects-container">
    <nav-pan/>
    <div class="b-layout__main">
      <h1>ПРОЕКТЫ</h1>
      <ul>
      <li v-for="repo in sortedRepositories" :key="repo.id">
        <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
        <p>CREATED: {{repo.created_at}}</p>
        <p>UPDATED: {{repo.updated_at}}</p>
      </li>
    </ul>
    </div>
    </div>
</template>

<script>
import NavPan from '@/components/NavPan.vue'
export default {
  components: { NavPan },
  data() {
    return {
      repositories: [],
    }
  },
  mounted() {
    this.fetchRep();
  },
  computed: {
    sortedRepositories() {
      return [...this.repositories].sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
    },
  },
  methods: {

    async fetchRep() {
      try {
        const response = await fetch(`https://api.github.com/users/GreatStoks/repos`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          this.repositories = data; // Сохраняем список репозиториев из ответа API
        } else {
          throw new Error('Ошибка при получении репозиториев');
        }
      } catch (error) {
        console.error('Ошибка при получении репозиториев:', error);
      }

    }

  }
}
</script>

<style lang="scss" scoped>

ul {
  padding-left: 0;
}

a, ul, li {
  color: #2c3e50;
  list-style-type: none;
  text-decoration: none;
  font-size: calc(10px + 1vw);
  transition-duration: 0.6s;
}

a {
  font-size: calc(20px + 3vw);
  color: #d65cb8;

}

a:hover {
  color: #2c3e50;
}

.projects-container {
    display: flex;
    margin: 0 1rem 0 1rem;
}
</style>