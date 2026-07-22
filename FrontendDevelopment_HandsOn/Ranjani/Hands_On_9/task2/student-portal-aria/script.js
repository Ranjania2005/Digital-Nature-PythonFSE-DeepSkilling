function enroll(courseName) {

    alert(courseName + " enrolled successfully");

}


function handleCardKey(event, courseName) {

    if (event.key === "Enter") {

        enroll(courseName);

    }

}



function searchCourses() {

    let searchValue = document
        .getElementById("search")
        .value
        .toLowerCase();


    let courses = document.querySelectorAll(".course-card");


    let count = 0;


    courses.forEach(course => {

        let name = course
            .querySelector("h3")
            .innerText
            .toLowerCase();


        if(name.includes(searchValue)) {

            course.style.display = "block";
            count++;

        }
        else {

            course.style.display = "none";

        }

    });


    document.getElementById("result-count").innerText =
        count + " courses found";

}
function toggleMenu(){

    let button = document.getElementById("menuButton");


    let expanded = button.getAttribute("aria-expanded");


    if(expanded === "false"){

        button.setAttribute("aria-expanded","true");

        alert("Menu opened");

    }
    else{

        button.setAttribute("aria-expanded","false");

        alert("Menu closed");

    }

}