<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">

      <h2>Recommended</h2>

      <div class="recommended">
        <ProductsCard
        v-for="(product,index) in inventory.slice(0,3) " :key='product.id'
        :product="product" :index="index"
        :addToCart="addToCart"
        class="card"/>
      </div>

    </main>

  </div>
</template>

<script>

import ProductsCard from '@/components/ProductsCard.vue'

  export default {
      name: 'HomeView',
      components:{
        ProductsCard
      },
       
        props:['inventory', 'addToCart']
  }
</script>