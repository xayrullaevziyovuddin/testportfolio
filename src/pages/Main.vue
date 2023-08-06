<template>
    <div>
        <main class="section">
        <div class="container">
            <h2 class="title-1">Projects</h2>
            <ul class="projects">
                <li class="project" v-for="repo in repositories" :key="repo.id">
                    <a href="">
                        <a :href="repo.html_url"><img src="../assets/images/git.jpg" alt="Project img" class="project__img"></a>
                        <h3 class="project__title">{{ repo.name }}</h3>
                    </a>
                </li>

            </ul>
        </div>
    </main>
    </div>
</template>

<script>
  export default {
    computed: {
      repositories() {
        return this.$store.state.repositories;
      }
    },
    mounted() {
      this.$store.dispatch('fetchRepositories');
    }
  };
  </script>

