<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="p-3 name-bg">
          <span class="font-weight-bold">{{stock.name}} </span>
          <span style="font-size: 12px">(Price:{{ stock.price }})</span>
        </div>
        <div class="d-flex justify-content-between p-3 border">
          <div class="select">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
            />
          </div>
          <div class="btn1">
            <b-button variant="success" @click="buyStock" :disabled="quantity <=0">Buy</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  data(){
      return{
          quantity:0
      }
  },
  methods:{
    buyStock(){
      let order={
        name: this.stock.name,
        price: this.stock.price,
        id: this.stock.id,
        qauntity: this.quantity,
      };
      this.$store.dispatch('buyStock', order);
      this.quantity =0;

      
    }
  },
  props:['stock']
};
</script>

<style></style>
