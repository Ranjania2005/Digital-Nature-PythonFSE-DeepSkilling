import apiClient from "./apiClient";


// Get all courses

export function getAllCourses(){

    return apiClient.get("/posts");

}



// Get course by id

export function getCourseById(id){

    return apiClient.get(`/posts/${id}`);

}



// Enroll student

export function enrollStudent(studentId, courseId){


    return apiClient.post("/posts",{

        studentId: studentId,

        courseId: courseId

    });


}