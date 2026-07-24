import { createApp } from 'vue'

import { createPinia } from 'pinia'

import App from './App.vue'

import './assets/main.css'



const app = createApp(App)



app.config.errorHandler = (error) => {


    console.error("Global Error:", error);



    alert(
        "Something went wrong. Please try again."
    );


}



app.use(createPinia())



app.mount('#app')