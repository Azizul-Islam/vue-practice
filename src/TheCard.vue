<template>
     <div class="card-main">
      <div class="card_title">
        <strong>{{ cardTitle }}</strong>
      </div>
      <div class="card_body">
        <slot>This is demo text</slot>
      </div>
      <div class="card_footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
</template>
<script>
export default {
        props: ['cardTitle'],
        data(){
            return {
                msg: "Hello",
            };
        },
    }
</script>

<style>
  .card-main{
    width: 200px;
    border: 1px solid blueviolet;
    margin: 10px;
  }
  .card_title{
    background-color: blueviolet;
    padding: 10px;
    text-align: center;
    color: #fff;
  }
  .card_body{
    padding: 20px;
  }
  .card_footer{
    background-color: gray;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
</style>