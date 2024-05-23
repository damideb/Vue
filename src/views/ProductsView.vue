<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
        <ProductsCard
        v-for="(product,index) in inventory.slice(0,6) " :key='product.id'
        :product="product" :index="index"
        :addToCart="addToCart"
        class="card"/>
    </div>
  </main>

</template>

<script>
import ProductsCard from '@/components/ProductsCard.vue'

  export default{

    props:['inventory', 'addToCart'],
    components: {
      ProductsCard
    }
  }
</script>