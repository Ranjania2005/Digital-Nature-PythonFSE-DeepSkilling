import { defineStore } from "pinia";

import { enrollStudent } from "../api/courseApi";


export const useEnrollmentStore = defineStore(
    "enrollment",

    {

        state: () => ({

            enrolledCourse: null,

            loading: false,

            error: null

        }),



        actions: {


            async fetchAndEnroll(courseId) {


                try {


                    this.loading = true;

                    this.error = null;



                    const result = await enrollStudent(
                        1,
                        courseId
                    );



                    this.enrolledCourse = result;



                }

                catch(error) {


                    this.error = error.message;


                }

                finally {


                    this.loading = false;


                }


            }

        }

    }

);