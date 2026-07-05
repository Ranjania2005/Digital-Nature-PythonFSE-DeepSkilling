const loading=document.querySelector("#loading");

const notificationList=document.querySelector("#notification-list");

const errorMessage=document.querySelector("#error-message");

const retryButton=document.querySelector("#retry-btn");

/* -----------------------
   Reusable Fetch Function
------------------------ */

async function apiFetch(url){

    const response=await fetch(url);

    if(!response.ok){

        throw new Error(

            `HTTP Error : ${response.status}`

        );

    }

    return await response.json();

}

/* -----------------------
   Render Notifications
------------------------ */

function renderNotifications(posts){

    notificationList.innerHTML="";

    posts.slice(0,10).forEach(post=>{

        const card=document.createElement("div");

        card.className="card";

        card.innerHTML=`

            <h3>${post.title}</h3>

            <p>${post.body}</p>

        `;

        notificationList.appendChild(card);

    });

}

/* -----------------------
   Load Notifications
------------------------ */

async function loadNotifications(url){

    loading.style.display="block";

    errorMessage.textContent="";

    retryButton.style.display="none";

    notificationList.innerHTML="";

    try{

        const posts=await apiFetch(url);

        renderNotifications(posts);

    }

    catch(error){

        errorMessage.textContent=

        "Unable to load notifications. Please try again.";

        retryButton.style.display="inline-block";

        console.error(error);

    }

    finally{

        loading.style.display="none";

    }

}

/* -----------------------
   Retry Button
------------------------ */

retryButton.addEventListener("click",()=>{

    loadNotifications(

        "https://jsonplaceholder.typicode.com/posts"

    );

});

/* -----------------------
   Simulate 404 Error
------------------------ */

loadNotifications(

"https://jsonplaceholder.typicode.com/nonexistent"

);