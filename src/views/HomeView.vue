<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">
      <TitleSlot>
        <h2>Recommended</h2>

        <template v-slot:title>
          <h2>Vegetables and Fruits</h2>
        </template>

         <template v-slot:image>
          <i  class="icofont-spoon-and-fork"></i>
        </template>
      </TitleSlot>

      <div class="recommended">
        <ProductsCard
          v-for="(product, index) in inventory.slice(0, 3)"
          :key="product.id"
          :product="product"
          :index="index"
          :addToCart="addToCart"
          class="card"
        />
      </div>
    </main>
  </div>
</template>

<script>
import ProductsCard from '@/components/ProductsCard.vue'
import TitleSlot from '@/components/TitleSlot.vue'

export default {
  name: 'HomeView',
  components: {
    ProductsCard,
    TitleSlot
  },

  props: ['inventory', 'addToCart']
}
</script>
