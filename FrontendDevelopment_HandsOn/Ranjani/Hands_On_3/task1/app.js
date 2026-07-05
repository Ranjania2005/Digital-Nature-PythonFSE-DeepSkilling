import { courses } from "./data.js";

console.log("========== Course Details ==========");

/* Destructuring */

courses.forEach(course => {

    const { name, credits } = course;

    console.log(`${name} - ${credits} Credits`);

});

/* map() */

const formattedCourses = courses.map(course =>

`${course.code} — ${course.name} (${course.credits} credits)`

);

console.log("");

console.log("Formatted Courses");

console.log(formattedCourses);

/* filter() */

const filteredCourses = courses.filter(course =>

course.credits >= 4

);

console.log("");

console.log("Courses having credits >= 4");

console.log(filteredCourses);

console.log(`Count : ${filteredCourses.length}`);

/* reduce() */

const totalCredits = courses.reduce(

(total, course) => total + course.credits,

0

);

console.log("");

console.log(`Total Credits : ${totalCredits}`);

/* Arrow Function */

const displayCourse = course =>

`${course.code} : ${course.name}`;

console.log("");

console.log("Arrow Function Output");

courses.forEach(course =>

console.log(displayCourse(course))

);