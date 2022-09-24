<template>
     <div class="product_card_main">
      <div class="product_card_title">
        <div>
          {{ product.name }}
        </div>
        <div>
          <img src="/star.png" v-if="product.addedToFavorite" @click="handleFavorite" />
          <img src="/un-star.png" v-else @click="handleFavorite" />
        </div>
      </div>
      <div class="product_card_body">
        <img :src="product.thumbnail" width="200" alt=""><br>
        <strong>Price: {{ product.price }}</strong>
      </div>
      <div class="product_card_footer">
        <button @click="handleBuyNow">Buy Now</button>
        <button @click="handleAddToCart">Add To Cart</button>
      </div>
    </div>
</template>
<script>

export default {
        emits: {
          "handel_buy_now": function(data){
            if(!data){
              console.error("Your data is missiong!");
              return false;
            }
            return true;
          }
        },
        props: {product: {type: Object, default: ()=>({})}},
        data(){
            return {
              
               
            };
        },
        methods: {
          handleBuyNow(){
            this.$emit('handel_buy_now',this.product);
          },
          handleAddToCart(){
            this.$emit('handle_add_to_cart',this.product);
          },
          handleFavorite(){
            this.$emit('handle_favorite',this.product);
          }
        }
    }
</script>

<style>
  .product_card_main{
    width: 300px;
    border: 1px solid blueviolet;
    margin: 10px;
  }
  .product_card_title{
    background-color: blueviolet;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }
  .product_card_body{
    padding: 20px;
    text-align: center;
  }
  .product_card_footer{
    background-color: gray;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  .product_card_footer button{
    padding: 5px 10px;
    border: 1px solid blueviolet;
    margin-right: 5px;
  }
</style>