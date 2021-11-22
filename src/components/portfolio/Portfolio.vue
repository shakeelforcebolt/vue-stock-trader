<template>
  <div class="container">
    <div class="row text-left text-dark">
      <Stock v-for="stock in stocks" v-bind:key="stock.id" :stock="stock" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Stock from "./Stock.vue";

export default {
  name: "Portfolio",
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
  data() {
    return {
      stocks: [
        {
          id: 1,
          name: "BMW",
          price: 110,
          quantity: 30,
        },
        {
          id: 2,
          name: "Google",
          price: 120,
          quantity: 40,
        },
        {
          id: 3,
          name: "Apple",
          price: 140,
          quantity: 50,
        },
        {
          id: 4,
          name: "Amazon",
          price: 150,
          quantity: 60,
        },
      ],
    };
  },
  components: {
    Stock,
  },
};
</script>

<style>
.name-bg2 {
  background-color: rgb(255, 202, 202);
}
</style>
