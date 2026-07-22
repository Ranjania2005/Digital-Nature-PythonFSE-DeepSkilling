<template>

  <div>

    <h2>
      Available Courses
    </h2>


    <div
      v-for="course in courses"
      :key="course.id"
      class="course-card"
    >

      <h3>
        {{ course.name }}
      </h3>


      <p>
        Code: {{ course.code }}
      </p>


      <p>
        Credits: {{ course.credits }}
      </p>


      <RouterLink :to="`/courses/${course.id}`">

        View Details

      </RouterLink>


    </div>


  </div>

</template>



<script setup>

import { ref } from 'vue'


const courses = ref([

  {
    id:1,
    name:"Vue Fundamentals",
    code:"VUE101",
    credits:4
  },


  {
    id:2,
    name:"JavaScript Advanced",
    code:"JS201",
    credits:3
  },


  {
    id:3,
    name:"React Basics",
    code:"RCT101",
    credits:4
  },


  {
    id:4,
    name:"Angular Fundamentals",
    code:"ANG101",
    credits:5
  },


  {
    id:5,
    name:"Python Programming",
    code:"PY101",
    credits:3
  }

])


</script>



<style scoped>

.course-card{

border:1px solid #ccc;
padding:15px;
margin:15px;
border-radius:10px;

}

</style>