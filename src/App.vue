<template>
  <the-rating v-model="appRating">
    
  </the-rating>
</template>
<script>

import TheRating from './TheRating.vue'

export default {
  data() {
  return {
          appRating: 3,
      };
  },
  methods: {
    
  },
  components: {
    TheRating
  }

}
</script>
