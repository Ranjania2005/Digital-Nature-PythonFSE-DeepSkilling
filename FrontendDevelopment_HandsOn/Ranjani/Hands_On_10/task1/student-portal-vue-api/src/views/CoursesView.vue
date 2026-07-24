<template>

<div>

    <h1>Courses</h1>


    <button @click="loadCourses">
        Load Courses
    </button>


    <p v-if="loading">
        Loading courses...
    </p>


    <p v-if="error">
        {{ error }}
    </p>


    <ul>

        <li 
        v-for="course in courses" 
        :key="course.id">

            {{ course.title }}

        </li>

    </ul>


</div>

</template>



<script setup>

import { ref } from "vue";

import { getAllCourses } from "../api/courseApi";


const courses = ref([]);

const loading = ref(false);

const error = ref("");



async function loadCourses(){


    try {


        loading.value = true;

        error.value = "";


        courses.value = await getAllCourses();



    }


    catch(err){


        error.value = err.message;


        console.log(err);


    }


    finally{


        loading.value = false;


    }


}


</script>