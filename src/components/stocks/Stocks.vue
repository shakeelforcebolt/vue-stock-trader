<template>
  <div class="container text-left">
    <div class="row">
      <div class="col-xl-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" v-for="stock in stocks" v-bind:key="stock.id">
        <Stock123 :stock="stock" />
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-xl-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="p-3 name-bg">
          <span class="font-weight-bold">BMW </span>
          <span style="font-size:12px">(Price:{{ price1 }})</span>
        </div>
        <div class="d-flex justify-content-between p-3 border">
          <div class="select">
            <input type="number" class="form-control" placeholder="Quantity" v-model="selected1">
          </div>
          <div class="btn1">
            <b-button variant="success">Buy</b-button>
          </div>
        </div>
      </div>
      <div class="col-xl-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="p-3 name-bg">
          <span class="font-weight-bold">Google </span>
          <span style="font-size:12px">(Price:{{ price2 }})</span>
        </div>
        <div class="d-flex justify-content-between p-3 border">
          <div class="select">
            <input type="number" class="form-control" placeholder="Quantity" v-model="selected2">
          </div>
          <div class="btn1">
            <b-button variant="success">Buy</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 text-left">
      <div class="col-xl-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="p-3 name-bg">
          <span class="font-weight-bold">Apple </span>
          <span style="font-size:12px">(Price:{{ price3 }})</span>
        </div>
        <div class="d-flex justify-content-between p-3 border">
          <div class="select">
            <input type="number" class="form-control" placeholder="Quantity" v-model="selected3">
          </div>
          <div class="btn1">
            <b-button variant="success">Buy</b-button>
          </div>
        </div>
      </div>
      <div class="col-xl-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="p-3 name-bg">
          <span class="font-weight-bold">Twitter </span>
          <span style="font-size:12px">(Price:{{ price4 }})</span>
        </div>
        <div class="d-flex justify-content-between p-3 border">              <div class="select">
                  <input type="number" class="form-control" placeholder="Quantity" v-model="selected4">
              </div>
              <div class="btn1">
                  <b-button variant="success">Buy</b-button>
              </div>
              </div>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Stock123 from './Stock.vue'

export default {
  name: "Stocks",
  components:{
    Stock123
  },
  computed:{
    stocks(){
      return this.$store.getters.stocks;  
    }
  }
};
</script>

<style>
.name-bg{
    background-color: rgb(163, 255, 224);
}
</style>
