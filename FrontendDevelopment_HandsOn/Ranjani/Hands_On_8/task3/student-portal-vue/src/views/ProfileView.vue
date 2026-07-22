<template>

<div>

<h2>My Enrolled Courses</h2>

<ul>

<li
v-for="course in store.enrolledCourses"
:key="course.id"
>

{{ course.name }}
-
{{ course.credits }} Credits

<button @click="store.unenroll(course.id)">
Remove
</button>

</li>

</ul>

<h3>

Total Credits :
{{ store.totalCredits }}

</h3>

</div>

</template>

<script setup>

import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()

</script>

<style scoped>

button{

margin-left:15px;

}

</style>