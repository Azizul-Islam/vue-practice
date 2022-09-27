import { createApp } from 'vue'
import App from './App.vue'
import TheRating from './TheRating.vue'


var app = createApp(App);
app.component('the-rating', TheRating)
app.mount('#app');