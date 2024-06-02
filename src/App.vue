<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
 <header class="top-bar spread">
    <nav class="top-bar-nav">
      <!-- you can also use the active-class prop that router-link provides -->
      <router-link v-for="(item, i) in links" :to="item.link" :key="i" @click="index(i)" class="top-bar-link" :class="{activee: activeIndex==i}">
        <i v-if="i===0" class="icofont-spoon-and-fork"></i>
        <span>{{ item.text }}</span>
      </router-link>
    </nav>
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <router-view 
    :inventory="inventory"
    :addToCart ="addToCart"
  />
  <SideBar
  v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>



<script lang="ts"  >


import food from './food.json'

export default{

 
  data(){
    return{
      activeIndex:0,
      links:[
        {
          text:'Home',
          link:'/'
      },
      {
          text:'Products',
          link:'/products'
      },
      {
          text:'Past Orders',
          link:'/past-orders'
      },

    ],
      showSidebar:false,
      inventory: food,
      cart: {}
    }
  },

  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },

  methods:{
    index(i:number){
      this.activeIndex=i
    },
      addToCart (name, quantity) {
        if (!this.cart[name]) this.cart[name] = 0
        this.cart[name] += quantity
      },
      toggleSidebar () {
        this.showSidebar = !this.showSidebar
      },
      removeItem (name) {
        delete this.cart[name]
      }

  }

}
</script>

