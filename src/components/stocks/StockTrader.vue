<template>
  <div class="container bg-light text-dark">
      <div class="row border p-3" style="box-shadow: 2px 1px 2px #ccc">
          <div class="col-md-12 text-left">
              <h2 class="font-weight-bold">Trade or View your Portfolio</h2>
              <p>You may Save & Load your Data</p>
              <p>Click on 'End Day' to begin a new Day!</p>
              <hr>
              <h4>Your Funds: <span class="font-weight-bold">${{data}}</span></h4>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    name:'StockTrader',
    data(){
        return{
            name:'Stock Trader Component!!',
            data:8.980
        }
    }
}
</script>

<style>

</style>