import { createApp } from 'vue'
import App from './App.vue'
// import ContactDetails from './ContactDetails.vue'
// import TheCard from './TheCard.vue'
import ProductCard from './ProductCard.vue'

// createApp(App).mount('#app')

var app = createApp(App);
// app.component('contact-details', ContactDetails)
app.component('product-card', ProductCard)
app.mount('#app');