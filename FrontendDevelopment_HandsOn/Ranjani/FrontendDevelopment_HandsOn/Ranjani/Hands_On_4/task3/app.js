/* -------------------------------------
   Axios Request Interceptor
-------------------------------------- */

axios.interceptors.request.use(config=>{

    console.log(`API Call Started : ${config.url}`);

    return config;

});

/* -------------------------------------
   Axios API Function
-------------------------------------- */

async function apiFetch(url,params={}){

    const response=await axios.get(

        url,

        {

            params:params,

            timeout:5000

        }

    );

    return response.data;

}

/* -------------------------------------
   Render Posts
-------------------------------------- */

const loading=document.querySelector("#loading");

const container=document.querySelector("#posts-container");

function renderPosts(posts){

    container.innerHTML="";

    posts.forEach(post=>{

        const card=document.createElement("div");

        card.className="post-card";

        card.innerHTML=`

            <h3>${post.title}</h3>

            <p>${post.body}</p>

        `;

        container.appendChild(card);

    });

}

/* -------------------------------------
   Load User 1 Posts
-------------------------------------- */

async function loadPosts(){

    try{

        loading.style.display="block";

        const posts=await apiFetch(

            "https://jsonplaceholder.typicode.com/posts",

            {

                userId:1

            }

        );

        renderPosts(posts);

    }

    catch(error){

        container.innerHTML=`

            <h2>Unable to load posts.</h2>

        `;

        console.error(error);

    }

    finally{

        loading.style.display="none";

    }

}

loadPosts();

/* -------------------------------------
   Fetch vs Axios

1. Fetch requires response.json();
   Axios automatically parses JSON.

2. Fetch does not throw errors for HTTP
   status codes like 404.
   Axios throws automatically.

3. Fetch is built into browsers.
   Axios is an external library with
   interceptors, timeout support,
   automatic JSON parsing and many
   additional features.

-------------------------------------- */