<template>

  <Header />


  <nav>

    <RouterLink to="/">
      Home
    </RouterLink>


    <RouterLink to="/courses">
      Courses
    </RouterLink>


    <RouterLink to="/profile">
      Profile
    </RouterLink>


  </nav>


  <RouterView />


</template>



<script setup>

import Header from './components/Header.vue'

</script>



<style scoped>

nav {

  padding:20px;
}


nav a {

  margin:10px;
  text-decoration:none;

}

</style>