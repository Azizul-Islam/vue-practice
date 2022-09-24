<template>
  <the-card cardTitle="This is card Title">
    <template v-slot:default>
      <p>Hello, I'm Azizul Islam. I am a software developer. I work at BGIFT institute of science & technology.</p>
    </template>
    <template v-slot:footer>Test</template>
  </the-card>
  <the-card cardTitle="Web Based">
    <template v-slot:default><a href="">Click</a> here fo more info</template>
  </the-card>
  <the-card cardTitle="Demo Title">
   
    <template v-slot:footer><button>Buy Now</button></template>
  </the-card>
</template>
<script>
// import ContactDetails from './ContactDetails.vue'
import TheCard from './TheCard.vue'

export default {
  data() {
    return {
      
    };
  },
  components: {
    TheCard
  }

}
</script>
