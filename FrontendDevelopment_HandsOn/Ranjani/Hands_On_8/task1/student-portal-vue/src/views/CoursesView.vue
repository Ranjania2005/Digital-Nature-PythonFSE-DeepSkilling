<template>

  <div>

    <h2>Available Courses</h2>


    <input 
      v-model="searchTerm"
      placeholder="Search course..."
    />


    <CourseCard
      v-for="course in filteredCourses"
      :key="course.id"
      :name="course.name"
      :code="course.code"
      :credits="course.credits"
      :grade="course.grade"
    />


  </div>

</template>


<script setup>

import { ref, computed, onMounted } from 'vue'

import CourseCard from '../components/CourseCard.vue'


const courses = ref([])


const searchTerm = ref('')



onMounted(() => {

  courses.value = [

    {
      id: 1,
      name: 'Vue Fundamentals',
      code: 'VUE101',
      credits: 4,
      grade: 'A'
    },

    {
      id: 2,
      name: 'JavaScript Advanced',
      code: 'JS201',
      credits: 3,
      grade: 'A'
    },

    {
      id: 3,
      name: 'React Basics',
      code: 'RCT101',
      credits: 4,
      grade: 'B'
    },

    {
      id: 4,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 5,
      grade: 'A'
    },

    {
      id: 5,
      name: 'Python Programming',
      code: 'PY101',
      credits: 3,
      grade: 'B'
    }

  ]

})



const filteredCourses = computed(() => {

  return courses.value.filter(course =>

    course.name
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase())

  )

})


</script>