<template>

    <div>

        <h1>
            Course Enrollment
        </h1>


        <button @click="enroll">

            Enroll Course 101

        </button>



        <button @click="clearEnrollment">

            Clear

        </button>



        <p v-if="loading">

            Enrolling...

        </p>



        <p v-if="error">

            Error: {{ error }}

        </p>



        <div v-if="enrolledCourse">

            <h3>
                Enrollment Successful
            </h3>


            <p>
                Student ID:
                {{ enrolledCourse.studentId }}
            </p>


            <p>
                Course ID:
                {{ enrolledCourse.courseId }}
            </p>


        </div>


    </div>

</template>



<script setup>

import { storeToRefs } from "pinia";

import { useEnrollmentStore } from "../stores/enrollment";



const store = useEnrollmentStore();



const {

    enrolledCourse,

    loading,

    error

} = storeToRefs(store);





function enroll(){


    store.fetchAndEnroll(101);


}





function clearEnrollment(){


    store.$reset();


}


</script>