<template>
  <div>

    <h2>Available Courses</h2>

    <CourseCard
      v-for="course in courses"
      :key="course.id"
      :course="course"
      @enroll="store.enroll"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import CourseCard from '../components/CourseCard.vue'
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()

const courses = ref([
  {
    id:1,
    name:'Angular',
    code:'ANG101',
    credits:4
  },
  {
    id:2,
    name:'React',
    code:'REA201',
    credits:3
  },
  {
    id:3,
    name:'Vue',
    code:'VUE301',
    credits:4
  },
  {
    id:4,
    name:'Python',
    code:'PYT401',
    credits:5
  },
  {
    id:5,
    name:'Java',
    code:'JAVA501',
    credits:4
  }
])
</script>