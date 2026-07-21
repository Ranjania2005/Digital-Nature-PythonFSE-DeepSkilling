import { courses } from "./data.js";

const courseGrid = document.querySelector(".course-grid");

const totalCreditsElement = document.querySelector("#total-credits");

const fragment = document.createDocumentFragment();

courses.forEach(course => {

    const article = document.createElement("article");

    article.className = "course-card";

    article.innerHTML = `

        <h3>${course.name}</h3>

        <p><strong>Code:</strong> ${course.code}</p>

        <p><strong>Credits:</strong> ${course.credits}</p>

        <p><strong>Grade:</strong> ${course.grade}</p>

    `;

    fragment.appendChild(article);

});

courseGrid.appendChild(fragment);

const totalCredits = courses.reduce(

    (total, course) => total + course.credits,

    0

);

totalCreditsElement.textContent = `Total Credits Enrolled : ${totalCredits}`;