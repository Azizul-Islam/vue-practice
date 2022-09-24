<template>
  <product-card 
  :product="product" 
  @handel_buy_now="buyNow" 
  @handle_add_to_cart="addToCart" 
  @handle_favorite="toggleFavorite"
  v-for="product in products" :key="product.name"
  >
   
  </product-card>
</template>
<script>
// import ContactDetails from './ContactDetails.vue'
// import TheCard from './TheCard.vue'
import ProductCard from './ProductCard.vue'

export default {
  data() {
    return {
      products: [
          {
            name: "Iphone 14 pro",
            price: "500$",
            thumbnail: "https://cdn.shopify.com/s/files/1/1706/9177/products/iphone-14-pro-spaceblack-Custom-Mac-BD_300x300.jpg?v=1662621181",
            addedToFavorite: true,
          },
          {
            name: "Iphone 13 pro",
            price: "400$",
            thumbnail: "https://diamu.com.bd/wp-content/uploads/2021/09/Apple-iPhone-13-4-300x300.jpg",
            addedToFavorite: false,
          },
          {
            name: "Iphone 12",
            price: "300$",
            thumbnail: "https://www.bdprice.com.bd/wp-content/uploads/2020/07/Apple-iPhone-12-300x300.jpg",
            addedToFavorite: true,
          },
        ]
    };
  },
  methods: {
    buyNow(product){
      console.log(product);
    },
    addToCart(product){
      console.log(product)
    },
    toggleFavorite(product){
      product.addedToFavorite = !product.addedToFavorite;
      console.log("Favorite added success");
    }
  },
  components: {
    ProductCard
  }

}
</script>
