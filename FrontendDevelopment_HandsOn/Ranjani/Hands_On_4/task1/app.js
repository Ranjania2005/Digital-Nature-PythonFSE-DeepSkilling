import { courses } from "./data.js";

/* -----------------------------
   Promise Chaining
------------------------------ */

function fetchUser(id){

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>response.json())
    .then(user=>{

        console.log("Promise User :",user.name);

        return user;

    });

}

fetchUser(1);

/* -----------------------------
   async / await
------------------------------ */

async function fetchUserAsync(id){

    try{

        const response=await fetch(

            `https://jsonplaceholder.typicode.com/users/${id}`

        );

        const user=await response.json();

        console.log("Async User :",user.name);

    }

    catch(error){

        console.error(error);

    }

}

fetchUserAsync(1);

/* -----------------------------
   Simulated API Delay
------------------------------ */

function fetchAllCourses(){

    return new Promise(resolve=>{

        setTimeout(()=>{

            resolve(courses);

        },1000);

    });

}

/* -----------------------------
   Render Courses
------------------------------ */

const loading=document.querySelector("#loading");

const grid=document.querySelector(".course-grid");

function renderCourses(courseList){

    grid.innerHTML="";

    courseList.forEach(course=>{

        const card=document.createElement("article");

        card.className="course-card";

        card.innerHTML=`

            <h3>${course.name}</h3>

            <p>Code : ${course.code}</p>

            <p>Credits : ${course.credits}</p>

            <p>Grade : ${course.grade}</p>

        `;

        grid.appendChild(card);

    });

}

fetchAllCourses()

.then(courseList=>{

    loading.style.display="none";

    renderCourses(courseList);

});

/* -----------------------------
   Promise.all()
------------------------------ */

Promise.all([

    fetchUser(1),

    fetchUser(2)

])

.then(users=>{

    console.log(

        "Promise.all :",

        users[0].name,

        "&",

        users[1].name

    );

});