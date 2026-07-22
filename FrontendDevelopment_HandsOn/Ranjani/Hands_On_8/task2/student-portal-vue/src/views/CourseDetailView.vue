<template>

<div>

<h2>
Course Details
</h2>


<p>
Course ID: {{ id }}
</p>


<p>
This page displays details of selected course.
</p>


<button @click="enroll">

Enroll

</button>


</div>

</template>



<script setup>

import { useRoute, useRouter } from 'vue-router'


const route = useRoute()

const router = useRouter()


const id = route.params.id



function enroll(){

router.push('/profile')

}


</script>