<template>
  <div v-if="singleProduct">
    <ProductsCard :product="singleProduct" :addToCart="addToCart" class="card" />
  </div>
  <div v-else>
    No product found
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { defineProps, onBeforeMount, ref } from 'vue'
import ProductsCard from '@/components/ProductsCard.vue'

const router = useRoute()

const singleProduct = ref()

const { inventory, addToCart } = defineProps(['inventory', 'addToCart'])

const { id } = router.params

onBeforeMount(() => {
  const product = inventory.find((p) => p.id === parseInt(id))
  singleProduct.value = product
})
</script>

<style lang="scss" scoped></style>
