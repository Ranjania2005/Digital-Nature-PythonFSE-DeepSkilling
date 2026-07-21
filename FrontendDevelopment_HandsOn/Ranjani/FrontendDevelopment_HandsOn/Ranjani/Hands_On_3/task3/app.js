import { courses } from "./data.js";

let displayedCourses=[...courses];

const grid=document.querySelector(".course-grid");

const total=document.querySelector("#total-credits");

const search=document.querySelector("#search-courses");

const sortBtn=document.querySelector("#sort-btn");

const selected=document.querySelector("#selected-course");

function renderCourses(courseList){

    grid.innerHTML="";

    const fragment=document.createDocumentFragment();

    courseList.forEach(course=>{

        const card=document.createElement("article");

        card.className="course-card";

        card.dataset.id=course.id;

        card.innerHTML=`

        <h3>${course.name}</h3>

        <p><strong>Code:</strong> ${course.code}</p>

        <p><strong>Credits:</strong> ${course.credits}</p>

        `;

        fragment.appendChild(card);

    });

    grid.appendChild(fragment);

    const credits=courseList.reduce(

        (sum,course)=>sum+course.credits,

        0

    );

    total.textContent=`Total Credits : ${credits}`;

}

renderCourses(displayedCourses);

search.addEventListener("input",()=>{

    const keyword=search.value.toLowerCase();

    displayedCourses=courses.filter(course=>

        course.name.toLowerCase().includes(keyword)

    );

    renderCourses(displayedCourses);

});

sortBtn.addEventListener("click",()=>{

    displayedCourses.sort(

        (a,b)=>b.credits-a.credits

    );

    renderCourses(displayedCourses);

});

grid.addEventListener("click",(event)=>{

    const card=event.target.closest(".course-card");

    if(!card) return;

    const id=parseInt(card.dataset.id);

    const course=courses.find(c=>c.id===id);

    selected.innerHTML=`

    <h3>Selected Course</h3>

    <p><strong>Name:</strong> ${course.name}</p>

    <p><strong>Grade:</strong> ${course.grade}</p>

    `;

});