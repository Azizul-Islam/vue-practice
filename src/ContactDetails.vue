<template>
    <div class="container">
    <h2 class="title">Welcome to contact page</h2>
    <p class="name">Name: {{ name }}</p>
    <p>Email: {{ emailAddress }}</p>
    <p>Phone: {{ phone }}</p>
    </div>
</template>

<script>
    export default {
    props: 
        {
            name: String,
            phone: {
                type: String,
                required: true,
            },
            emailAddress: {
                type: String,
                default: 'cseazizul@gmail.com',
                required: false,
            },
           
        },

  data(){
    return {
     
    };
  }
 
}
</script>


<style scoped>

.container{
        border: 1px solid gray;
        padding: 30px;
        margin: 10px;
        width: 300px;
    }
    .title{
        color: green;

    }
</style>